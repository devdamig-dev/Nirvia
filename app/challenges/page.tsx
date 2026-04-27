'use client';

import { MobileShell } from '@/components/layout/mobile-shell';
import { SectionTitle } from '@/components/cards/section-title';
import { Card } from '@/components/ui/card';
import { ChallengeCard } from '@/components/challenges/challenge-card';
import { useChallenges } from '@/hooks/use-challenges';
import { useAppStore } from '@/lib/services/state';

export default function ChallengesPage() {
  const user = useAppStore((s) => s.user);
  const checklist = useAppStore((s) => s.checklist);
  const toggleChecklistItem = useAppStore((s) => s.toggleChecklistItem);
  const { challenges, userChallenge, bumpProgress } = useChallenges(user.id);

  const activeChallenge = challenges.find((c) => c.id === userChallenge?.challengeId);

  return (
    <MobileShell>
      <SectionTitle title="Challenges" subtitle="Consistency engine" />
      {activeChallenge && userChallenge ? <ChallengeCard challenge={activeChallenge} userChallenge={userChallenge} onAdvance={bumpProgress} /> : null}

      <Card className="space-y-2">
        <SectionTitle title="Daily Checklist" />
        {checklist.map((item) => (
          <button key={item.id} onClick={() => toggleChecklistItem(item.id)} className="flex w-full items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm">
            <span>{item.label}</span>
            <span>{item.done ? '✓' : '○'}</span>
          </button>
        ))}
      </Card>

      <Card className="space-y-2">
        <SectionTitle title="Available Challenges" />
        {challenges.map((challenge) => (
          <div key={challenge.id} className="rounded-xl border border-white/10 p-3">
            <p className="font-medium">{challenge.title}</p>
            <p className="text-sm text-[color:var(--muted)]">{challenge.description}</p>
          </div>
        ))}
      </Card>
    </MobileShell>
  );
}
