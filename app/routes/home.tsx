import type { Route } from "./+types/home";
import Hero from "~/layouts/hero";
import SkillList from "~/layouts/skill-list";
import Creation from "~/layouts/creation";
import Blog from "~/layouts/blog";
import { Article, type ArticleJson } from "~/domain/Article";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(`https://qiita.com/api/v2/authenticated_user/items`, {
    headers: {
      Authorization: `Bearer 30e09b3e2b2fc56a91b30df0509577855e101167`,
    },
  });
  const articlesJson: ArticleJson[] = await res.json();
  const articles = articlesJson.map(
    (articleJson) =>
      new Article(
        articleJson.title,
        articleJson.url,
        articleJson.likes_count,
        articleJson.stocks_count,
        articleJson.created_at
      )
  );

  return { articles };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ogisonのポートフォリオ" },
    {
      name: "description",
      content: "Webエンジニア ogisonのポートフォリオサイトです",
    },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;

  return (
    <main id="main-content" className="pt-16">
      <Hero />
      <SkillList />
      <Creation />
      <Blog articles={articles} />
    </main>
  );
}
