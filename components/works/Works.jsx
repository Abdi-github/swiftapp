import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import data from '../../data/projects';

const Works = () => {
  const [toggle, setToggle] = useState('All');
  const [projects, setProjects] = useState(data);

  useEffect(() => {
    if (toggle === 'All') {
      setProjects(data);
    } else {
      const filteredProjects = data.filter((project) =>
        project.type.includes(toggle)
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
    { name: 'Angular' },
    { name: 'Laravel' },
  ];

  return (
    <div
      className="container  px-4 mt-16  tablet:max-w-2xl laptop:max-w-5xl"
      id="portfolio"
    >
      <div className="text-center mb-6 ">
        <h4 className="text-light text-sm font-semibold tracking-tight mb-2  tablet:text-base tablet:tracking-normal">
          My Recent Works
        </h4>
        <h2 className="text-primary text-xl font-semibold tablet:text-2xl">
          Portfolio
        </h2>
      </div>
      <div className="mb-5 flex justify-start items-center space-x-3 cursor-pointer">
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
      <div className="grid grid-cols-1 largePhone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-backGroundVariant py-4 px-4 tablet:px-4   rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant"
          >
            <div className="relative h-44 group">
              <Image
                src="/assets/nflix.jpg"
                fill
                className="object-cover rounded-3xl "
                alt="project"
              />
              <div className="hidden group-hover:block transition-custom absolute inset-0 rounded-3xl bg-backGroundOpac">
                <div className=" flex h-full justify-center items-center space-x-4">
                  <Link
                    href=""
                    className="px-3 py-1 bg-backGround rounded-2xl text-sm font-semibold transition-custom hover:bg-transparent hover:border hover:border-primary"
                  >
                    Github
                  </Link>
                  <Link
                    href=""
                    className="px-3 py-1 bg-backGround rounded-2xl text-sm font-semibold transition-custom hover:bg-transparent hover:border hover:border-primary"
                  >
                    Website
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
              <p className="mb-4 text-light text-sm">
                BookStore app that allows users to store books and update
                progress
              </p>

              <div className="flex  flex-wrap ">
                {p.type.map((t, i) => (
                  <p key={i} className="text-primary text-sm px-2">
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
