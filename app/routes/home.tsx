
import { Link } from "react-router";
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main id="main-content" className="pt-16">
        <div className="gradient-bg py-24 px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 animate-[fadeIn_1s_ease-out]">山田 太郎</h1>
            <p className="text-xl opacity-90 animate-[fadeIn_1.2s_ease-out]">フルスタックエンジニア</p>
          </div>
        </div>

        <section id="skills" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl mb-12 text-center">スキル</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
              {[
                { name: "React", level: 90, icon: "⚛️" },
                { name: "TypeScript", level: 85, icon: "📘" },
                { name: "HTML/CSS", level: 95, icon: "🎨" },
                { name: "Node.js", level: 80, icon: "🟢" },
                { name: "Python", level: 85, icon: "🐍" },
                { name: "MySQL", level: 75, icon: "📊" },
                { name: "AWS", level: 70, icon: "☁️" },
                { name: "Docker", level: 75, icon: "🐋" },
                { name: "Git", level: 85, icon: "📦" }
              ].map((skill) => (
                <div key={skill.name} className="card p-4 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{skill.icon}</span>
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
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-8 text-center">プロジェクト</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
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

        <section id="blog" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">ブログ</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "マイクロサービスアーキテクチャの実践",
                  date: "2024.02.15",
                  excerpt: "最近のプロジェクトで学んだマイクロサービスの実装パターンについて解説します。",
                  link: "/blog/microservices"
                },
                {
                  title: "フロントエンドのパフォーマンスチューニング",
                  date: "2024.02.01",
                  excerpt: "Reactアプリケーションの表示速度を改善するためのテクニックをご紹介。",
                  link: "/blog/frontend-performance"
                }
              ].map((post) => (
                <article key={post.title} className="card">
                  <div className="mb-4 text-sm text-gray-500">{post.date}</div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to={post.link} className="btn">
                    続きを読む
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="py-8 px-4 bg-white border-t-4 border-black">
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
