import type { Route } from "./+types/home";
import Hero from "~/layouts/hero";
import SkillList from "~/layouts/skill-list";
import Creation from "~/layouts/creation";
import Blog from "~/layouts/blog";

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
      <Blog />
    </main>
  );
}
