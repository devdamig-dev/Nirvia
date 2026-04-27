'use client';

import Link from 'next/link';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/cards/section-title';
import { useAppStore, staticData } from '@/lib/services/state';
import { useDailyFocus } from '@/hooks/use-daily-focus';
import { useProjects } from '@/hooks/use-projects';
import { useWeeklyScore } from '@/hooks/use-weekly-score';

export default function DashboardPage() {
  const user = useAppStore((s) => s.user);
  const reflection = useAppStore((s) => s.reflection);
  const setReflectionAnswer = useAppStore((s) => s.setReflectionAnswer);
  const { dailyFocus, toggleComplete } = useDailyFocus(user.id);
  const { projects } = useProjects(user.id);
  const { weeklyScore } = useWeeklyScore(user.id);

  return (
    <MobileShell>
      <SectionTitle title={`Welcome back, ${user.name.split(' ')[0]}`} subtitle="Founder Execution System" />

      <Card className="space-y-3">
        <SectionTitle title="Daily Focus" subtitle={dailyFocus?.focusTitle} />
        <p className="text-sm">{dailyFocus?.action}</p>
        <button onClick={toggleComplete} className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 py-2 text-sm font-medium">
          {dailyFocus?.completed ? 'Marked complete ✓' : 'Mark as complete'}
        </button>
      </Card>

      <Card>
        <SectionTitle title="AI Mentor" subtitle="Your execution coach is live" />
        <Link href="/mentor" className="mt-3 inline-block rounded-xl border border-white/15 px-3 py-2 text-sm">
          Continue conversation
        </Link>
      </Card>

      <Card className="space-y-3">
        <SectionTitle title="Active Challenge" subtitle="Stay in motion" />
        <p className="text-sm">{staticData.challenges[0].title}</p>
        <p className="text-sm text-[color:var(--muted)]">Progress: {useAppStore.getState().userChallenge.progress}%</p>
      </Card>

      <Card className="space-y-3">
        <SectionTitle title="Projects" subtitle="Momentum board" />
        <div className="flex snap-x gap-3 overflow-x-auto pb-1">
          {projects.map((project) => (
            <div key={project.id} className="min-w-[250px] snap-start rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="font-medium">{project.name}</p>
              <p className="text-sm text-[color:var(--muted)]">{project.metricName}: {project.metricValue}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="space-y-2">
        <SectionTitle title="Content Drop" subtitle={staticData.contentItem.category} />
        <p>{staticData.contentItem.title}</p>
        <a href={staticData.contentItem.url} className="text-sm text-sky-300">
          Open content
        </a>
      </Card>

      <Card>
        <SectionTitle title="Weekly Score" subtitle={`Total ${weeklyScore?.totalScore ?? '--'}`} />
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-[color:var(--muted)]">
          <p>Execution: {weeklyScore?.executionScore}</p>
          <p>Focus: {weeklyScore?.focusScore}</p>
          <p>Sales: {weeklyScore?.salesScore}</p>
          <p>Learning: {weeklyScore?.learningScore}</p>
        </div>
      </Card>

      <Card className="space-y-2">
        <SectionTitle title="Reflection" subtitle={reflection.question} />
        <textarea
          value={reflection.answer}
          onChange={(e) => setReflectionAnswer(e.target.value)}
          placeholder="Write your founder reflection..."
          className="min-h-24 w-full rounded-xl border border-white/15 bg-[#0b1020] p-3 text-sm outline-none"
        />
      </Card>
    </MobileShell>
  );
}
