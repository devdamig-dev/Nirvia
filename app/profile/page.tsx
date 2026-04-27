'use client';

import Image from 'next/image';
import { MobileShell } from '@/components/layout/mobile-shell';
import { SectionTitle } from '@/components/cards/section-title';
import { Card } from '@/components/ui/card';
import { useAppStore } from '@/lib/services/state';
import { useWeeklyScore } from '@/hooks/use-weekly-score';

export default function ProfilePage() {
  const user = useAppStore((s) => s.user);
  const { weeklyScore } = useWeeklyScore(user.id);

  return (
    <MobileShell>
      <SectionTitle title="Profile" subtitle="Founder account" />
      <Card className="space-y-3">
        <div className="flex items-center gap-3">
          <Image src={user.avatarUrl} alt={user.name} width={56} height={56} className="rounded-full" />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-[color:var(--muted)]">{user.email}</p>
          </div>
        </div>
        <p className="inline-block rounded-full border border-white/15 px-2 py-1 text-xs uppercase tracking-wide">{user.plan} plan</p>
      </Card>

      <Card className="space-y-2">
        <SectionTitle title="Weekly Performance" />
        <p>Total score: {weeklyScore?.totalScore}</p>
        <p className="text-sm text-[color:var(--muted)]">Execution score: {weeklyScore?.executionScore}</p>
      </Card>

      <Card className="grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl border border-white/10 p-3">
          <p className="text-2xl font-semibold">2</p>
          <p className="text-xs text-[color:var(--muted)]">Active Projects</p>
        </div>
        <div className="rounded-xl border border-white/10 p-3">
          <p className="text-2xl font-semibold">21</p>
          <p className="text-xs text-[color:var(--muted)]">Focused Days</p>
        </div>
      </Card>
    </MobileShell>
  );
}
