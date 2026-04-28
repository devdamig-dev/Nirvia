'use client';

import { useEffect, useState } from 'react';
import { getMentorMessages, sendMentorMessage } from '@/lib/services/mentor-service';
import { useAppStore } from '@/lib/services/state';
import { MentorMessage } from '@/lib/types';

export function useMentor(userId: string) {
  const storeMessages = useAppStore((s) => s.mentorMessages);
  const [messages, setMessages] = useState<MentorMessage[]>([]);

  useEffect(() => {
    getMentorMessages(userId).then(setMessages);
  }, [userId]);

  useEffect(() => {
    setMessages(storeMessages);
  }, [storeMessages]);

  const sendMessage = async (content: string) => {
    const userMessage: MentorMessage = {
      id: `msg_${crypto.randomUUID()}`,
      userId,
      role: 'user',
      content,
      createdAt: new Date().toISOString(),
    };
    useAppStore.getState().addMentorMessage(userMessage);
    setMessages((prev) => [...prev, userMessage]);
    await sendMentorMessage(userId, content);
  };

  return { messages, sendMessage };
}
