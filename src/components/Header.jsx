import { User, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-blue-500" />
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Workplace</h1>
          <p className="text-xs text-gray-500">All-in-one team hub</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 transition">
          <Settings size={16} />
          Settings
        </button>
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="text-gray-600" size={18} />
        </div>
      </div>
    </header>
  );
}
