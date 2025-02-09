
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main id="main-content" className="pt-16">
        <header className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">山田 太郎</h1>
            <p className="text-xl">フルスタックエンジニア</p>
          </div>
        </header>

        <section aria-labelledby="skills-heading" className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="skills-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-8">スキル</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-transform hover:scale-105">
                  <span className="block text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="projects-heading" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 id="projects-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-8">プロジェクト</h2>
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
                <article key={project.title} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.tech}</p>
                  <a 
                    href={project.link}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title}のGitHubリポジトリを開く`}
                  >
                    プロジェクトを見る
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHubプロフィール">
                GitHub
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedInプロフィール">
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-gray-400">© 2024 山田 太郎. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
