'use client';

import { Card } from '@/components/ui/card';
import { Challenge, UserChallenge } from '@/lib/types';
import { es } from '@/lib/i18n/es';

export function ChallengeCard({ challenge, userChallenge, onAdvance }: { challenge: Challenge; userChallenge: UserChallenge; onAdvance: () => void }) {
  return (
    <Card className="space-y-3">
      <p className="text-lg font-semibold">{challenge.title}</p>
      <p className="text-sm text-[color:var(--muted)]">{challenge.description}</p>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full bg-gradient-to-r from-violet-500 to-sky-500" style={{ width: `${userChallenge.progress}%` }} />
      </div>
      <div className="flex items-center justify-between text-sm">
        <span>{es.challenges.day} {userChallenge.currentDay}</span>
        <span>{es.challenges.completePercent(userChallenge.progress)}</span>
      </div>
      <button onClick={onAdvance} className="w-full rounded-xl border border-white/15 py-2 text-sm">
        {es.challenges.completeTodayStep}
      </button>
    </Card>
  );
}
