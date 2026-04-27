'use client';

import { MobileShell } from '@/components/layout/mobile-shell';
import { SectionTitle } from '@/components/cards/section-title';
import { ChatWindow } from '@/components/mentor/chat-window';
import { useAppStore } from '@/lib/services/state';

export default function MentorPage() {
  const user = useAppStore((s) => s.user);
  return (
    <MobileShell>
      <SectionTitle title="AI Mentor" subtitle="Strategic pressure + daily execution" />
      <ChatWindow userId={user.id} />
    </MobileShell>
  );
}
