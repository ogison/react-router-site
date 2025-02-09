
import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "エンジニアポートフォリオ" },
    { name: "description", content: "私のエンジニアポートフォリオサイトへようこそ" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <header className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            山田 太郎
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            フルスタックエンジニア
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-16">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            スキル
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            プロジェクト
          </h2>
          <div className="grid gap-6">
            {[
              {
                title: "ショッピングアプリ",
                description: "React と TypeScript で作成したECサイト",
                tech: "React, TypeScript, Node.js",
              },
              {
                title: "タスク管理ツール",
                description: "シンプルで使いやすいタスク管理アプリ",
                tech: "Python, FastAPI, React",
              },
            ].map((project) => (
              <div key={project.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            連絡先
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Email: example@email.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              GitHub: github.com/username
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
