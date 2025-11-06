import { useEffect, useRef, useState } from 'react';
import { SendHorizonal } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 'm1', user: 'Alex', text: 'Welcome to the team chat 👋' },
    { id: 'm2', user: 'Pat', text: 'Let’s sync on the sprint later today.' },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages.length]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { id: crypto.randomUUID(), user: 'You', text }]);
    setInput('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <section className="bg-white rounded-xl border shadow-sm flex flex-col h-full min-h-[340px]">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-gray-900">Team Chat</h2>
        <p className="text-xs text-gray-500">Message teammates in real-time</p>
      </div>
      <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map(m => (
          <div key={m.id} className="max-w-[80%]">
            <p className="text-[11px] text-gray-500 mb-0.5">{m.user}</p>
            <div className={`px-3 py-2 rounded-lg text-sm ${m.user === 'You' ? 'bg-indigo-600 text-white ml-auto' : 'bg-gray-100 text-gray-800'}`}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t">
        <div className="flex items-center gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder="Type a message"
            className="flex-1 resize-none rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button onClick={send} className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-3 py-2 rounded-md">
            <SendHorizonal size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
