import Attendance from './Attendance';
import Projects from './Projects';
import Chat from './Chat';

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-6xl w-full p-6 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Attendance />
        <Projects />
      </div>
      <div className="lg:col-span-1">
        <Chat />
      </div>
    </main>
  );
}
