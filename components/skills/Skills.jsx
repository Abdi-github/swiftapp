import React from 'react';
import {
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiHtml5, SiCss3,
  SiTailwindcss, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiLaravel, SiPhp, SiSpringboot,
  SiDotnet, SiPostgresql, SiMongodb, SiMysql,
  SiDocker, SiNginx, SiGit, SiGithubactions, SiLinux
} from 'react-icons/si';
import { useTranslation } from 'next-i18next';

const frontendSkills = [
  { name: 'React', icon: SiReact },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Angular', icon: SiAngular },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'HTML / CSS', icon: SiHtml5 },
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
  <div className="bg-backGroundVariant py-8 px-4 tablet:px-6 rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant">
    <h3 className="text-center text-lg font-semibold text-primary mb-6">
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-x-4 gap-y-5 px-2">
      {skills.map((s, i) => (
        <div key={i} className="flex items-center gap-3">
          <s.icon className="h-5 w-5 shrink-0 text-primary" />
          <span className="font-semibold text-sm tablet:text-base">{s.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="container px-4 mt-12 tablet:max-w-3xl laptop:max-w-6xl" id="skills">
      <div className="text-center">
        <h4 className="text-light text-sm font-semibold tracking-tight mb-2 tablet:text-base tablet:tracking-normal">
          {t('home:skills.subtitle')}
        </h4>
        <h2 className="text-primary text-xl font-semibold">{t('home:skills.title')}</h2>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mt-7">
        <SkillSection title={t('home:skills.frontend')} skills={frontendSkills} />
        <SkillSection title={t('home:skills.backend')} skills={backendSkills} />
        <SkillSection title={t('home:skills.devops')} skills={devopsSkills} />
      </div>
    </div>
  );
};

export default Skills;
