import { FaLayerGroup, FaProjectDiagram, FaServer } from 'react-icons/fa';
import {
  SiAngular,
  SiDocker,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si';
import { useTranslation } from 'next-i18next';
import Card from '@/components/ui/Card';

const techBadges = [
  { name: 'React', icon: SiReact },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Angular', icon: SiAngular },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Docker', icon: SiDocker },
  { name: 'Tailwind', icon: SiTailwindcss },
];

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '20+', label: t('home:stats.projects'), icon: FaProjectDiagram },
    { value: '8+', label: t('home:stats.techStacks'), icon: FaLayerGroup },
    { value: '8', label: t('home:stats.demoGroups'), icon: FaServer },
  ];

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 tablet:px-6">
      <div className="grid gap-4 tablet:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label} className="p-6 text-center">
            <s.icon className="mx-auto h-6 w-6 text-primary" />
            <div className="mt-4 text-4xl font-black text-white">{s.value}</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-light">
              {s.label}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {techBadges.map((item) => (
          <span
            key={item.name}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-bold text-light backdrop-blur-xl transition-custom hover:border-primaryVariant hover:text-primary"
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Stats;
