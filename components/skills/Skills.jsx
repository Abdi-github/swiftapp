import React from 'react';
import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { useTranslation } from 'next-i18next';
import Card from '@/components/ui/Card';

const frontendSkills = [
  { name: 'React', icon: SiReact },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Angular', icon: SiAngular },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS/SCSS', icon: SiCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Material UI', icon: SiMui },
  { name: 'Figma', icon: SiFigma },
];

const backendSkills = [
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: '.NET / C#', icon: SiDotnet },
  { name: 'PHP', icon: SiPhp },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
];

const devopsSkills = [
  { name: 'Docker', icon: SiDocker },
  { name: 'Nginx', icon: SiNginx },
  { name: 'Linux / VPS', icon: SiLinux },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'Git', icon: SiGit },
];

const SkillSection = ({ title, skills }) => (
  <Card className="p-6 tablet:p-7">
    <h2 className="text-xl font-black text-white">{title}</h2>
    <div className="mt-6 grid grid-cols-1 gap-3 largePhone:grid-cols-2">
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
          <skill.icon className="h-5 w-5 shrink-0 text-primary" />
          <span className="text-sm font-bold text-light">{skill.name}</span>
        </div>
      ))}
    </div>
  </Card>
);

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="page-shell">
      <div className="max-w-4xl">
        <p className="section-kicker">{t('home:skills.subtitle')}</p>
        <h1 className="section-title">{t('home:skills.title')}</h1>
        <p className="section-copy">
          A practical stack for building interfaces, APIs, databases, deployments, and the glue
          that keeps production systems running.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 laptop:grid-cols-3">
        <SkillSection title={t('home:skills.frontend')} skills={frontendSkills} />
        <SkillSection title={t('home:skills.backend')} skills={backendSkills} />
        <SkillSection title={t('home:skills.devops')} skills={devopsSkills} />
      </div>
    </section>
  );
};

export default Skills;
