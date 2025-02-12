import { Link, useLoaderData } from "react-router";
import type { Route } from "../+types/root";
import { getBlogList } from "~/data";

export async function loader({ params }: Route.ClientLoaderArgs) {
  const blogListPromise = getBlogList();
  console.log(blogListPromise);
  return { blogList: blogListPromise };
}

export default function Blog() {
  const blogList = useLoaderData();

  return (
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
  );
}
