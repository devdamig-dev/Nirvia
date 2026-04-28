'use client';

import { MobileShell } from '@/components/layout/mobile-shell';
import { SectionTitle } from '@/components/cards/section-title';
import { ChatWindow } from '@/components/mentor/chat-window';
import { useAppStore } from '@/lib/services/state';
import { es } from '@/lib/i18n/es';

export default function MentorPage() {
  const user = useAppStore((s) => s.user);
  return (
    <MobileShell>
      <SectionTitle title={es.mentor.title} subtitle={es.mentor.subtitle} />
      <ChatWindow userId={user.id} />
    </MobileShell>
  );
}
