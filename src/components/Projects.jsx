import { useState } from 'react';
import { Plus, CheckCircle2, Circle } from 'lucide-react';

function ProjectCard({ project, toggleTask }) {
  const done = project.tasks.filter(t => t.done).length;
  const total = project.tasks.length;
  const progress = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="rounded-xl border p-4 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{project.name}</h3>
        <span className="text-xs text-gray-500">{done}/{total}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div className="h-full bg-indigo-600" style={{ width: `${progress}%` }} />
      </div>
      <ul className="space-y-2">
        {project.tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-2 text-sm">
            <button
              onClick={() => toggleTask(project.id, task.id)}
              className="shrink-0 text-indigo-600"
              aria-label={task.done ? 'Mark incomplete' : 'Mark complete'}
            >
              {task.done ? <CheckCircle2 size={18} /> : <Circle size={18} />}
            </button>
            <span className={task.done ? 'line-through text-gray-400' : 'text-gray-700'}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 'p1',
      name: 'Website Redesign',
      tasks: [
        { id: 't1', title: 'Wireframes', done: true },
        { id: 't2', title: 'Design system', done: false },
        { id: 't3', title: 'Prototype', done: false },
      ],
    },
    {
      id: 'p2',
      name: 'Marketing Launch',
      tasks: [
        { id: 't4', title: 'Campaign plan', done: false },
        { id: 't5', title: 'Landing page', done: false },
      ],
    },
  ]);

  const addProject = () => {
    const name = prompt('Project name');
    if (!name) return;
    setProjects(prev => [
      ...prev,
      { id: crypto.randomUUID(), name, tasks: [] },
    ]);
  };

  const toggleTask = (projectId, taskId) => {
    setProjects(prev => prev.map(p => p.id !== projectId ? p : {
      ...p,
      tasks: p.tasks.map(t => t.id !== taskId ? t : { ...t, done: !t.done })
    }));
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Projects</h2>
        <button onClick={addProject} className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50">
          <Plus size={16} /> New
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} toggleTask={toggleTask} />
        ))}
      </div>
    </section>
  );
}
