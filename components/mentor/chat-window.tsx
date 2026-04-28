'use client';

import { useState } from 'react';
import { SendHorizonal } from 'lucide-react';
import { useMentor } from '@/hooks/use-mentor';
import { Card } from '@/components/ui/card';
import { es } from '@/lib/i18n/es';

export function ChatWindow({ userId }: { userId: string }) {
  const { messages, sendMessage } = useMentor(userId);
  const [input, setInput] = useState('');

  const onSend = async () => {
    if (!input.trim()) return;
    const content = input;
    setInput('');
    await sendMessage(content);
  };

  return (
    <Card className="space-y-3">
      <div className="max-h-[55vh] space-y-2 overflow-y-auto pr-1">
        {messages.map((m) => (
          <div key={m.id} className={`rounded-xl px-3 py-2 text-sm ${m.role === 'assistant' ? 'bg-white/8' : 'bg-violet-500/20 ml-8'}`}>
            {m.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={es.mentor.askPlaceholder}
          className="h-10 flex-1 rounded-xl border border-white/15 bg-[#0b1020] px-3 text-sm outline-none"
        />
        <button onClick={onSend} className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-violet-500 to-sky-500">
          <SendHorizonal size={16} />
        </button>
      </div>
    </Card>
  );
}
