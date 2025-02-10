import { Link } from "react-router";
import type { Route } from "./+types/home";
import Hero from "~/layouts/hero";
import SkillList from "~/layouts/skill-list";
import Creation from "~/layouts/creation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ogisonのポートフォリオ" },
    {
      name: "description",
      content: "Webエンジニア ogisonのポートフォリオサイトです",
    },
  ];
}

export default function Home() {
  return (
    <main id="main-content" className="pt-16">
      <Hero />
      <SkillList />
      <Creation />
      <section id="blog" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">ブログ</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "マイクロサービスアーキテクチャの実践",
                date: "2024.02.15",
                excerpt:
                  "最近のプロジェクトで学んだマイクロサービスの実装パターンについて解説します。",
                link: "/blog/microservices",
              },
              {
                title: "フロントエンドのパフォーマンスチューニング",
                date: "2024.02.01",
                excerpt:
                  "Reactアプリケーションの表示速度を改善するためのテクニックをご紹介。",
                link: "/blog/frontend-performance",
              },
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

      <footer
        id="contact"
        className="py-8 px-4 bg-white border-t-4 border-black"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="https://github.com/username" className="retro-btn text-xs">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/username"
              className="retro-btn text-xs"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-xs">© 2024 山田 太郎</p>
        </div>
      </footer>
    </main>
  );
}
