'use client';

import Link from 'next/link';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/cards/section-title';
import { useAppStore, staticData } from '@/lib/services/state';
import { useDailyFocus } from '@/hooks/use-daily-focus';
import { useProjects } from '@/hooks/use-projects';
import { useWeeklyScore } from '@/hooks/use-weekly-score';
import { es } from '@/lib/i18n/es';

export default function DashboardPage() {
  const user = useAppStore((s) => s.user);
  const reflection = useAppStore((s) => s.reflection);
  const setReflectionAnswer = useAppStore((s) => s.setReflectionAnswer);
  const { dailyFocus, toggleComplete } = useDailyFocus(user.id);
  const { projects } = useProjects(user.id);
  const { weeklyScore } = useWeeklyScore(user.id);

  return (
    <MobileShell>
      <SectionTitle title={es.dashboard.welcomeBack(user.name.split(' ')[0])} subtitle={es.dashboard.subtitle} />

      <Card className="space-y-3">
        <SectionTitle title={es.dashboard.dailyFocus} subtitle={dailyFocus?.focusTitle} />
        <p className="text-sm">{dailyFocus?.action}</p>
        <button onClick={toggleComplete} className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 py-2 text-sm font-medium">
          {dailyFocus?.completed ? es.dashboard.markedComplete : es.dashboard.markAsComplete}
        </button>
      </Card>

      <Card>
        <SectionTitle title={es.dashboard.mentor} subtitle={es.dashboard.mentorSubtitle} />
        <Link href="/mentor" className="mt-3 inline-block rounded-xl border border-white/15 px-3 py-2 text-sm">
          {es.dashboard.continueConversation}
        </Link>
      </Card>

      <Card className="space-y-3">
        <SectionTitle title={es.dashboard.activeChallenge} subtitle={es.dashboard.activeChallengeSubtitle} />
        <p className="text-sm">{staticData.challenges[0].title}</p>
        <p className="text-sm text-[color:var(--muted)]">{es.dashboard.progress}: {useAppStore.getState().userChallenge.progress}%</p>
      </Card>

      <Card className="space-y-3">
        <SectionTitle title={es.dashboard.projects} subtitle={es.dashboard.projectsSubtitle} />
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
        <SectionTitle title={es.dashboard.contentDrop} subtitle={staticData.contentItem.category} />
        <p>{staticData.contentItem.title}</p>
        <a href={staticData.contentItem.url} className="text-sm text-sky-300">
          {es.dashboard.openContent}
        </a>
      </Card>

      <Card>
        <SectionTitle title={es.dashboard.weeklyScore} subtitle={es.dashboard.total(weeklyScore?.totalScore ?? '--')} />
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-[color:var(--muted)]">
          <p>{es.dashboard.execution}: {weeklyScore?.executionScore}</p>
          <p>{es.dashboard.focus}: {weeklyScore?.focusScore}</p>
          <p>{es.dashboard.sales}: {weeklyScore?.salesScore}</p>
          <p>{es.dashboard.learning}: {weeklyScore?.learningScore}</p>
        </div>
      </Card>

      <Card className="space-y-2">
        <SectionTitle title={es.dashboard.reflection} subtitle={reflection.question} />
        <textarea
          value={reflection.answer}
          onChange={(e) => setReflectionAnswer(e.target.value)}
          placeholder={es.dashboard.reflectionPlaceholder}
          className="min-h-24 w-full rounded-xl border border-white/15 bg-[#0b1020] p-3 text-sm outline-none"
        />
      </Card>
    </MobileShell>
  );
}
