import { useState } from 'react';
import { CalendarCheck2, Clock } from 'lucide-react';

export default function Attendance() {
  const [status, setStatus] = useState('Out');
  const [logs, setLogs] = useState([]);

  const toggle = () => {
    const next = status === 'In' ? 'Out' : 'In';
    setStatus(next);
    setLogs((prev) => [{
      id: crypto.randomUUID(),
      type: next === 'In' ? 'Check-in' : 'Check-out',
      time: new Date().toLocaleString(),
    }, ...prev]);
  };

  return (
    <section className="bg-white rounded-xl border p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarCheck2 className="text-indigo-600" size={18} />
          <h2 className="font-semibold text-gray-900">Attendance</h2>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full border ${status === 'In' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>
          {status}
        </span>
      </div>

      <button onClick={toggle} className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
        <Clock size={16} />
        {status === 'In' ? 'Check out' : 'Check in'}
      </button>

      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-2">Recent activity</p>
        <ul className="space-y-2 max-h-48 overflow-auto pr-1">
          {logs.length === 0 && (
            <li className="text-sm text-gray-500">No records yet. Use the button to check in/out.</li>
          )}
          {logs.map((log) => (
            <li key={log.id} className="text-sm flex items-center justify-between">
              <span className="text-gray-700">{log.type}</span>
              <span className="text-gray-500">{log.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
