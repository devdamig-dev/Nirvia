import { useAppStore } from '@/lib/services/state';
import { MentorMessage } from '@/lib/types';

export async function getMentorMessages(userId: string): Promise<MentorMessage[]> {
  // TODO: Replace with Supabase message history query.
  return useAppStore.getState().mentorMessages.filter((msg) => msg.userId === userId);
}

export async function sendMentorMessage(userId: string, message: string): Promise<MentorMessage> {
  // TODO: Replace with Supabase Edge Function + OpenAI API call.
  const mentorMessage: MentorMessage = {
    id: `msg_${crypto.randomUUID()}`,
    userId,
    role: 'assistant',
    content: `Strong move. For today, execute this in a 45-minute sprint: ${message.toLowerCase()}. Reply with what gets shipped.`,
    createdAt: new Date().toISOString(),
  };
  useAppStore.getState().addMentorMessage(mentorMessage);
  return mentorMessage;
}
