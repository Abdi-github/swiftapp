import Link from 'next/link';
import { useState, useEffect } from 'react';
import data from '../../data/projects';
import {
  SiReact, SiVuedotjs, SiAngular, SiNodedotjs, SiLaravel,
  SiDotnet, SiSpringboot, SiPostgresql, SiMongodb, SiDocker
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
  'MongoDB': SiMongodb,
  'Docker': SiDocker,
};

const Works = () => {
  const [toggle, setToggle] = useState('All');
  const [projects, setProjects] = useState(data);

  useEffect(() => {
    if (toggle === 'All') {
      setProjects(data);
    } else {
      const filteredProjects = data.filter((project) =>
        project.type.some((t) => t.toLowerCase().includes(toggle.toLowerCase()))
      );
      setProjects(filteredProjects);
    }
  }, [toggle]);

  const handleClick = (e) => {
    const innerText = e.target.textContent;
    setToggle(innerText);
  };

  const programms = [
    { name: 'All' },
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
      className="container  px-4 mt-16  tablet:max-w-2xl laptop:max-w-5xl"
      id="portfolio"
    >
      <div className="text-center mb-6 ">
        <h4 className="text-light text-sm font-semibold tracking-tight mb-2  tablet:text-base tablet:tracking-normal">
          Live Demo Projects
        </h4>
        <h2 className="text-primary text-xl font-semibold tablet:text-2xl">
          Portfolio
        </h2>
        <p className="text-light text-sm mt-2 max-w-xl mx-auto">
          8 full-stack projects deployed on a single VPS with Docker, Traefik, and CI/CD via GitHub Actions
        </p>
      </div>
      <div className="mb-5 flex justify-start items-center flex-wrap gap-2 cursor-pointer">
        {programms.map((p, i) => (
          <div
            key={i}
            onClick={handleClick}
            className={`px-3 py-1 rounded-full border border-primary  text-sm font-semibold hover:text-primary  ${
              toggle === p.name ? ' bg-backGroundVariant' : 'bg-transparent  '
            }`}
          >
            {p.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 largePhone:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-backGroundVariant py-5 px-5 rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant"
          >
            {/* Tech icon row */}
            <div className="flex items-center gap-3 mb-4">
              {p.type.slice(0, 4).map((t, j) => {
                const Icon = techIcons[t];
                return Icon ? (
                  <Icon key={j} className="h-6 w-6 text-primary opacity-80" title={t} />
                ) : null;
              })}
            </div>

            {/* Project info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="text-xs text-light bg-backGround px-2 py-0.5 rounded-full">
                  {p.repos} repo{p.repos > 1 ? 's' : ''}
                </span>
              </div>
              <p className="mb-4 text-light text-sm leading-relaxed">
                {p.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.type.map((t, j) => (
                  <span key={j} className="text-xs bg-backGround text-primary px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <Link
                  href={p.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-primary text-backGround rounded-2xl text-sm font-semibold transition-custom hover:bg-transparent hover:text-primary hover:border hover:border-primary"
                >
                  Live Demo
                </Link>
                <Link
                  href={p.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-backGround rounded-2xl text-sm font-semibold transition-custom hover:bg-transparent hover:border hover:border-primary"
                >
                  GitHub
                </Link>
              </div>

              {/* Service URLs */}
              {p.services && p.services.length > 1 && (
                <div className="mt-3 pt-3 border-t border-primaryVariant">
                  <p className="text-xs text-light mb-1.5">Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {p.services.map((s, k) => (
                      <Link
                        key={k}
                        href={`https://${s}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        {s.replace('.swiftapp.ch', '')}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
