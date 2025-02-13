import { Link } from "react-router";

export default function Creation() {
  const Projects = [
    {
      title: "AI Selector",
      description: "Geminiが物事を独断と偏見で決めてくれるアプリ",
      tech: "Next.js, TypeScript, Gemini API",
      link: "https://github.com/ogison/gemini-selection",
    },
    {
      title: "ポートフォリオサイト",
      description: "ogisonのポートフォリオサイト",
      tech: "React Router v7, TypeScript",
      link: "https://github.com/ogison/react-router-site",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl mb-8 text-center">作成物</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
          {Projects.map((project) => (
            <Link
              key={project.title}
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-border bg-white p-6  hover:shadow-lg transition-shadow"
            >
              <article className="flex flex-col h-full">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="mb-4 text-sm">{project.description}</p>
                <p className="text-xs mb-4 mt-auto">{project.tech}</p>
                <span className="retro-btn inline-block text-xs mt-auto px-4 max-w-fit">
                  作成物を見る
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
