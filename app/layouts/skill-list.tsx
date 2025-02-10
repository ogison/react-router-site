import { BiLogoPostgresql } from "react-icons/bi";
import { DiGit } from "react-icons/di";
import { FaReact, FaHtml5, FaAws, FaJava } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiKotlin,
  SiMysql,
  SiPython,
  SiSpring,
  SiTypescript,
} from "react-icons/si";

export default function SkillList() {
  const frontendSkills = [
    { name: "React", level: 70, icon: FaReact },
    { name: "TypeScript", level: 80, icon: SiTypescript },
    { name: "HTML/CSS", level: 80, icon: FaHtml5 },
    { name: "Next.js", level: 80, icon: RiNextjsFill },
  ];

  const backendSkills = [
    { name: "Java", level: 80, icon: FaJava },
    { name: "Spring", level: 85, icon: SiSpring },
    { name: "Kotlin", level: 50, icon: SiKotlin },
    { name: "Python", level: 80, icon: SiPython },
    { name: "MySQL", level: 75, icon: SiMysql },
    { name: "Postgres", level: 80, icon: BiLogoPostgresql },
  ];

  const devOpsSkills = [
    { name: "AWS", level: 70, icon: FaAws },
    { name: "Docker", level: 70, icon: SiDocker },
    { name: "Git", level: 85, icon: DiGit },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl mb-12 text-center">スキル</h2>
        <SkillItem
          domainName="フロントエンド"
          frontendSkills={frontendSkills}
        />
        <SkillItem domainName="バックエンド" frontendSkills={backendSkills} />
        <SkillItem domainName="DevOps" frontendSkills={devOpsSkills} />
      </div>
    </section>
  );
}

type Skill = {
  name: string;
  level: number;
  icon: any;
};

type Props = {
  domainName: string;
  frontendSkills: Skill[];
};

const SkillItem = ({ domainName, frontendSkills }: Props) => {
  return (
    <>
      <h3 className="text-xl mt-7 mb-3 text-left">{domainName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {frontendSkills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="card p-4 hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-4">
                <IconComponent className="text-2xl" />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
