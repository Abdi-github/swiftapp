import { FaProjectDiagram, FaServer, FaLayerGroup } from 'react-icons/fa';
import {
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiNodedotjs,
  SiLaravel, SiSpringboot, SiDotnet, SiPostgresql, SiMongodb,
  SiMysql, SiDocker, SiTailwindcss
} from 'react-icons/si';
import { useTranslation } from 'next-i18next';

const techBadges = [
  { name: 'React', icon: SiReact },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Angular', icon: SiAngular },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: '.NET / C#', icon: SiDotnet },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Docker', icon: SiDocker },
  { name: 'Tailwind', icon: SiTailwindcss },
];

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '24', label: t('home:stats.projects'), icon: FaProjectDiagram },
    { value: '7', label: t('home:stats.techStacks'), icon: FaLayerGroup },
    { value: '8', label: t('home:stats.demoGroups'), icon: FaServer },
  ];

  return (
    <div className="container px-4 mt-12 mb-16 tablet:max-w-3xl laptop:max-w-6xl">
      {/* Stats cards */}
      <div className="flex justify-center gap-4 tablet:gap-6 flex-wrap">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-backGroundVariant border border-primaryVariant rounded-2xl px-6 py-4 min-w-[140px] text-center transition-custom hover:border-primary"
          >
            <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{s.value}</div>
            <div className="text-xs text-light uppercase tracking-wider mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tech badges row */}
      <div className="flex justify-center flex-wrap gap-2 mt-6">
        {techBadges.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 bg-backGroundVariant border border-primaryVariant rounded-full px-3 py-1 text-xs text-light transition-custom hover:border-primary hover:text-primary"
          >
            <t.icon className="w-3.5 h-3.5" />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Stats;
