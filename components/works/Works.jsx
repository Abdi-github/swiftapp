import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import data from '../../data/projects';
import { useTranslation } from 'next-i18next';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import {
  SiReact, SiVuedotjs, SiAngular, SiNodedotjs, SiLaravel,
  SiDotnet, SiSpringboot, SiPostgresql, SiMongodb, SiMysql, SiDocker
} from 'react-icons/si';

const techIcons = {
  'React': SiReact,
  'Vue.js': SiVuedotjs,
  'Angular': SiAngular,
  'Node.js': SiNodedotjs,
  'Express': SiNodedotjs,
  'Laravel': SiLaravel,
  '.NET': SiDotnet,
  'Blazor': SiDotnet,
  'Java': SiSpringboot,
  'Spring Boot': SiSpringboot,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'Docker': SiDocker,
};

/* ── Popover card that floats above the button ── */
const LinkPopover = ({ items, label, icon: Icon, isOpen, onToggle, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  // Single item → direct link, no popover
  if (items.length === 1) {
    return (
      <Link
        href={items[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
          Icon === FiGithub
            ? 'bg-backGround hover:bg-transparent hover:border hover:border-primary'
            : 'bg-primary text-backGround hover:bg-transparent hover:text-primary hover:border hover:border-primary'
        }`}
      >
        <Icon className="w-3.5 h-3.5" />
        {label}
      </Link>
    );
  }

  // Multiple items → button + popover
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
          Icon === FiGithub
            ? 'bg-backGround hover:bg-transparent hover:border hover:border-primary'
            : 'bg-primary text-backGround hover:bg-transparent hover:text-primary hover:border hover:border-primary'
        }`}
      >
        <Icon className="w-3.5 h-3.5" />
        {label}
        <span className="text-[10px] opacity-70 bg-white/10 px-1.5 rounded-full">{items.length}</span>
      </button>

      {/* Mobile: fixed bottom sheet · Desktop: absolute dropdown */}
      {isOpen && <div className="fixed inset-0 z-40 largePhone:hidden" onClick={onClose} />}
      <div
        className={`
          fixed bottom-4 left-4 right-4 z-50
          largePhone:absolute largePhone:bottom-auto largePhone:left-auto largePhone:right-0 largePhone:top-full largePhone:mt-2
          largePhone:min-w-[260px] largePhone:max-w-[320px]
          transition-all duration-300
          origin-bottom largePhone:origin-top-right
          ${isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 largePhone:-translate-y-1 pointer-events-none'
          }
        `}
      >
        <div className="bg-[#1a1a3e]/95 border border-primaryVariant rounded-2xl p-3 shadow-2xl shadow-black/50 backdrop-blur-md">
          <p className="text-[11px] text-primary/80 uppercase tracking-widest font-semibold mb-2 px-1">{label}</p>
          <div className="flex flex-col gap-0.5 max-h-[280px] overflow-y-auto scrollbar-thin">
            {items.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all duration-200 hover:bg-primary/10 hover:text-primary group"
              >
                <Icon className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="truncate flex-1">{item.name}</span>
                <FiExternalLink className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

const Works = () => {
  const { t } = useTranslation();
  const allLabel = t('home:portfolio.all');
  const [toggle, setToggle] = useState(allLabel);
  const [projects, setProjects] = useState(data);
  const [openPopover, setOpenPopover] = useState(null); // 'demo-2' or 'github-3'

  useEffect(() => {
    if (toggle === allLabel) {
      setProjects(data);
    } else {
      const filteredProjects = data.filter((project) =>
        project.type.some((typ) => typ.toLowerCase().includes(toggle.toLowerCase()))
      );
      setProjects(filteredProjects);
    }
  }, [toggle, allLabel]);

  const handleClick = (e) => {
    const innerText = e.target.textContent;
    setToggle(innerText);
  };

  const programms = [
    { name: allLabel },
    { name: 'React' },
    { name: 'Vue' },
    { name: 'Angular' },
    { name: 'Node' },
    { name: 'Laravel' },
    { name: '.NET' },
    { name: 'Java' },
  ];

  return (
    <div
      className="container px-4 mt-16 tablet:max-w-3xl laptop:max-w-6xl"
      id="portfolio"
    >
      <div className="text-center mb-6">
        <h4 className="text-light text-sm font-semibold tracking-tight mb-2 tablet:text-base tablet:tracking-normal">
          {t('home:portfolio.subtitle')}
        </h4>
        <h2 className="text-primary text-xl font-semibold tablet:text-2xl">
          {t('home:portfolio.title')}
        </h2>
        <p className="text-light text-sm mt-2 max-w-xl mx-auto">
          {t('home:portfolio.description')}
        </p>
      </div>
      <div className="mb-5 flex justify-start items-center flex-wrap gap-2 cursor-pointer">
        {programms.map((p, i) => (
          <div
            key={i}
            onClick={handleClick}
            className={`px-3 py-1 rounded-full border border-primary text-sm font-semibold hover:text-primary ${
              toggle === p.name ? ' bg-backGroundVariant' : 'bg-transparent'
            }`}
          >
            {p.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 largePhone:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-5">
        {projects.map((p, i) => {
          const projKey = p.key;
          const translatedName = projKey ? t(`home:projects.${projKey}.name`, { defaultValue: p.name }) : p.name;
          const translatedDesc = projKey ? t(`home:projects.${projKey}.description`, { defaultValue: p.description }) : p.description;

          return (
            <div
              key={i}
              className="bg-backGroundVariant py-5 px-5 rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant"
            >
              {/* Logo + Category row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {p.logo && (
                    <div className="w-9 h-9 relative shrink-0 rounded-full bg-white/90 p-1">
                      <Image src={p.logo} alt={translatedName} fill className="object-contain rounded-full" />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    {(() => {
                      const seen = new Set();
                      return p.type.slice(0, 5).reduce((acc, techName) => {
                        const Icon = techIcons[techName];
                        if (!Icon) return acc;
                        const iconKey = Icon.displayName || Icon.name || techName;
                        if (seen.has(iconKey)) return acc;
                        seen.add(iconKey);
                        acc.push(<Icon key={techName} className="h-5 w-5 text-primary opacity-80" title={techName} />);
                        return acc;
                      }, []);
                    })()}
                  </div>
                </div>
                {p.category && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    p.category === 'Enterprise'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {p.category.toUpperCase()}
                  </span>
                )}
              </div>

              {/* Project info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{translatedName}</h3>
                  <span className="text-xs text-light bg-backGround px-2 py-0.5 rounded-full">
                    {p.repos} {p.repos > 1 ? t('home:portfolio.repos') : t('home:portfolio.repo')}
                  </span>
                </div>
                <p className="mb-4 text-white/75 text-sm leading-relaxed">
                  {translatedDesc}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.type.map((techName, j) => (
                    <span key={j} className="text-xs bg-backGround text-primary px-2 py-0.5 rounded-full">
                      {techName}
                    </span>
                  ))}
                </div>

                {/* Action buttons with popovers */}
                <div className="flex items-center gap-3">
                  <LinkPopover
                    items={
                      p.services && p.services.length > 0
                        ? p.services.map(s => ({ name: s.replace('.swiftapp.ch', ''), url: `https://${s}` }))
                        : [{ name: translatedName, url: p.webLink }]
                    }
                    label={t('home:portfolio.liveDemo')}
                    icon={FiExternalLink}
                    isOpen={openPopover === `demo-${i}`}
                    onToggle={() => setOpenPopover(openPopover === `demo-${i}` ? null : `demo-${i}`)}
                    onClose={() => setOpenPopover(null)}
                  />
                  <LinkPopover
                    items={p.githubRepos || [{ name: 'Repository', url: p.githubLink }]}
                    label="GitHub"
                    icon={FiGithub}
                    isOpen={openPopover === `github-${i}`}
                    onToggle={() => setOpenPopover(openPopover === `github-${i}` ? null : `github-${i}`)}
                    onClose={() => setOpenPopover(null)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
