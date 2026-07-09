import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import data from '../../data/projects';
import { useTranslation } from 'next-i18next';
import { FiChevronDown, FiGithub, FiLink, FiX } from 'react-icons/fi';
import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiVuedotjs,
} from 'react-icons/si';
import Card from '@/components/ui/Card';

const techIcons = {
  React: SiReact,
  'Vue.js': SiVuedotjs,
  Angular: SiAngular,
  'Node.js': SiNodedotjs,
  Express: SiNodedotjs,
  Laravel: SiLaravel,
  '.NET': SiDotnet,
  Blazor: SiDotnet,
  Java: SiSpringboot,
  'Spring Boot': SiSpringboot,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
};

const getServiceItems = (project, fallbackName) => {
  if (project.services && project.services.length > 0) {
    return project.services.map((service) =>
      typeof service === 'object'
        ? service
        : { name: service.replace('.swiftapp.ch', ''), url: `https://${service}` }
    );
  }

  return [{ name: fallbackName, url: project.webLink }];
};

const LinkPopover = ({ items, label, icon: Icon, isOpen, onToggle, onClose, compact = false }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  const buttonClass = compact
    ? `inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm shadow-lg shadow-black/30 backdrop-blur-xl transition-custom ${
        Icon === FiGithub
          ? 'border-white/15 bg-backGround/70 text-white hover:border-primaryVariant hover:bg-primary/15 hover:text-primary'
          : 'border-primary/50 bg-primary text-backGround hover:border-white hover:bg-white'
      }`
    : Icon === FiGithub
      ? 'ghost-button px-4 py-2'
      : 'primary-button px-4 py-2';

  if (items.length === 1) {
    return (
      <Link
        href={items[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label={label}
        title={label}
      >
        <Icon className="h-4 w-4" />
        {!compact && label}
      </Link>
    );
  }

  if (compact) {
    return (
      <button type="button" onClick={onToggle} className={buttonClass} aria-label={label} title={label}>
        <Icon className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={onToggle} className={buttonClass} aria-label={label} title={label}>
        <Icon className="h-4 w-4" />
        {!compact && label}
        {/* <span className="rounded-full bg-white/15 px-2 text-[10px]">{items.length}</span> */}
      </button>

      {isOpen && <div className="fixed inset-0 z-40 largePhone:hidden" onClick={onClose} />}
      <div
        className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 largePhone:absolute largePhone:bottom-auto largePhone:left-auto largePhone:right-0 largePhone:top-full largePhone:mt-2 largePhone:min-w-[280px] ${
          isOpen
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-2 scale-95 opacity-0'
        }`}
      >
        <div className="glass-card p-3">
          <p className="px-2 pb-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
            {label}
          </p>
          <div className="flex max-h-[280px] flex-col gap-1 overflow-y-auto">
            {items.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-light transition-custom hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="min-w-0 flex-1 truncate">{item.name}</span>
                <FiLink className="h-3.5 w-3.5 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectActionPanel = ({ items, label, icon: Icon, isOpen, onClose }) => (
  <div
    className={`absolute inset-0 z-40 overflow-hidden transition-opacity duration-300 ${
      isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
    }`}
  >
    <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" onClick={onClose} />
    <div
      className={`absolute inset-y-0 right-0 flex h-full w-full flex-col border-l border-primary/30 bg-backGround/96 p-5 shadow-2xl shadow-black/70 backdrop-blur-2xl transition-transform duration-500 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-primary/12 via-transparent to-transparent" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">
            Project links
          </p>
          <h3 className="mt-2 flex items-center gap-2 text-xl font-black text-white">
            <Icon className="h-5 w-5 text-primary" />
            {label}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-light transition-custom hover:border-primaryVariant hover:text-primary"
          aria-label={`Close ${label}`}
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>

      <div className="relative z-10 mt-6 min-h-0 flex-1 overflow-y-auto rounded-2xl border border-white/12 bg-black/45 p-3 shadow-2xl shadow-black/40">
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-sm font-bold text-light shadow-lg shadow-black/20 transition-custom hover:border-primary/50 hover:bg-primary/12 hover:text-white"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1 break-words leading-5">{item.name}</span>
              <FiLink className="h-4 w-4 shrink-0 text-primary opacity-80 transition-custom group-hover/link:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Works = () => {
  const { t } = useTranslation();
  const allLabel = t('home:portfolio.all');
  const [toggle, setToggle] = useState(allLabel);
  const [projects, setProjects] = useState(data);
  const [openPopover, setOpenPopover] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    if (toggle === allLabel) {
      setProjects(data);
      return;
    }

    setProjects(
      data.filter((project) =>
        project.type.some((type) => type.toLowerCase().includes(toggle.toLowerCase()))
      )
    );
  }, [toggle, allLabel]);

  const filters = [
    allLabel,
    'React',
    'Vue',
    'Angular',
    'Node',
    'Laravel',
    '.NET',
    'Java',
  ];

  return (
    <section className="page-shell">
      <div className="max-w-4xl">
        <p className="section-kicker">{t('home:portfolio.subtitle')}</p>
        <h1 className="section-title">{t('home:portfolio.title')}</h1>
        <p className="section-copy">{t('home:portfolio.description')}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setToggle(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-extrabold transition-custom ${
              toggle === filter
                ? 'border-primary bg-primary text-backGround'
                : 'border-white/10 bg-white/[0.055] text-light hover:border-primaryVariant hover:text-primary'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3">
        {projects.map((project, i) => {
          const translatedName = project.key
            ? t(`home:projects.${project.key}.name`, { defaultValue: project.name })
            : project.name;
          const translatedDesc = project.key
            ? t(`home:projects.${project.key}.description`, { defaultValue: project.description })
            : project.description;
          const projectId = project.key || project.name;
          const isExpanded = expandedProject === projectId;
          const serviceItems = getServiceItems(project, translatedName);
          const githubItems = project.githubRepos || [{ name: 'Repository', url: project.githubLink }];
          const isActionPanelOpen = openPopover === `demo-${i}` || openPopover === `github-${i}`;

          return (
            <Card
              key={projectId}
              className="group relative isolate flex min-h-[430px] flex-col overflow-hidden p-0"
            >
              <div className="relative z-10 min-h-[285px]">
                {project.photo && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.photo}
                      alt=""
                      fill
                      className="object-cover opacity-80 saturate-[0.95] transition-custom group-hover:scale-105 group-hover:opacity-95"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-backGround/20 via-backGround/25 to-backGround/70" />
                    <div className="absolute inset-0 bg-gradient-to-r from-backGround/45 via-transparent to-backGround/35" />
                  </div>
                )}

                <div className="relative z-10 px-[3px] pt-[2px]">
                  <div className="w-full rounded-2xl border border-white/15 bg-backGround/75 px-4 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
                    <h2 className="truncate text-base font-extrabold text-white drop-shadow">{translatedName}</h2>
                  </div>
                </div>

                <div className="absolute right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-2">
                  <LinkPopover
                    items={serviceItems}
                    label={t('home:portfolio.liveDemo')}
                    icon={FiLink}
                    isOpen={openPopover === `demo-${i}`}
                    onToggle={() => setOpenPopover(openPopover === `demo-${i}` ? null : `demo-${i}`)}
                    onClose={() => setOpenPopover(null)}
                    compact
                  />
                  <LinkPopover
                    items={githubItems}
                    label="GitHub"
                    icon={FiGithub}
                    isOpen={openPopover === `github-${i}`}
                    onToggle={() => setOpenPopover(openPopover === `github-${i}` ? null : `github-${i}`)}
                    onClose={() => setOpenPopover(null)}
                    compact
                  />
                </div>
              </div>

              <ProjectActionPanel
                items={serviceItems}
                label={t('home:portfolio.liveDemo')}
                icon={FiLink}
                isOpen={openPopover === `demo-${i}` && serviceItems.length > 1}
                onClose={() => setOpenPopover(null)}
              />
              <ProjectActionPanel
                items={githubItems}
                label="GitHub"
                icon={FiGithub}
                isOpen={openPopover === `github-${i}` && githubItems.length > 1}
                onClose={() => setOpenPopover(null)}
              />

              <div
                className={`relative z-10 mt-auto rounded-t-[1.75rem] border-t border-white/15 bg-backGround/82 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-300 ${
                  isActionPanelOpen
                    ? 'pointer-events-none translate-y-4 opacity-0'
                    : 'translate-y-0 opacity-100'
                }`}
              >
                <div className="flex flex-wrap gap-2">
                  {project.type.slice(0, 6).map((techName) => {
                    const Icon = techIcons[techName];

                    return (
                      <span
                        key={techName}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1 text-xs font-bold text-light shadow-sm shadow-black/20"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5 text-primary" />}
                        {techName}
                      </span>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpenPopover(null);
                    setExpandedProject(isExpanded ? null : projectId);
                  }}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-black text-light shadow-lg shadow-black/20 transition-custom hover:border-primaryVariant hover:bg-primary/10 hover:text-primary"
                  aria-expanded={isExpanded}
                >
                  Details
                  <FiChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <div
                className={`absolute inset-0 z-30 flex overflow-hidden transition-all duration-500 ease-out ${
                  isExpanded ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
                }`}
              >
                <div className="relative flex h-full w-full flex-col border border-primaryVariant bg-backGround/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 to-transparent" />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                        Project overview
                      </p>
                      <h3 className="mt-2 truncate text-xl font-black text-white">{translatedName}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setExpandedProject(null)}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-light transition-custom hover:border-primaryVariant hover:text-primary"
                      aria-label="Close project details"
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="relative z-10 mt-6 flex-1 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-xl shadow-black/30 backdrop-blur-xl">
                    <p className="text-sm font-semibold leading-8 text-light">
                      {translatedDesc}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
