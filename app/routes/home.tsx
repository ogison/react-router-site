
import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "山田太郎のポートフォリオ" },
    { name: "description", content: "フルスタックエンジニア 山田太郎のポートフォリオサイトです" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" className="pt-16">
        <header className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl mb-4 leading-relaxed">山田 太郎</h1>
            <p className="text-lg">フルスタックエンジニア</p>
          </div>
        </header>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-8 text-center">スキル</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                <div key={skill} className="retro-border bg-white p-4 text-center text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-8 text-center">プロジェクト</h2>
            <div className="grid gap-8">
              {[
                {
                  title: "ショッピングアプリ",
                  description: "React と TypeScript で作成したECサイト",
                  tech: "React, TypeScript, Node.js",
                  link: "https://github.com/username/shopping-app"
                },
                {
                  title: "タスク管理ツール",
                  description: "シンプルで使いやすいタスク管理アプリ",
                  tech: "Python, FastAPI, React",
                  link: "https://github.com/username/task-manager"
                }
              ].map((project) => (
                <article key={project.title} className="retro-border bg-white p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <p className="text-xs mb-4">{project.tech}</p>
                  <a 
                    href={project.link}
                    className="retro-btn inline-block text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    プロジェクトを見る
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 bg-white border-t-4 border-black">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center space-x-8 mb-4">
              <a href="https://github.com/username" className="retro-btn text-xs">GitHub</a>
              <a href="https://linkedin.com/in/username" className="retro-btn text-xs">LinkedIn</a>
            </div>
            <p className="text-xs">© 2024 山田 太郎</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
