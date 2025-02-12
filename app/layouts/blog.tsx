import { Link } from "react-router";
import { Article } from "~/domain/Article";

type Props = {
  articles: Article[];
};

const changeDate = (date: string) => {
  const formattedDate = date.slice(0, 10).replace(/-/g, "/");
  return formattedDate;
};

export default function Blog({ articles }: Props) {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl mb-12 text-center">ブログ</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {articles.slice(0, 4).map((post) => (
            <article
              key={post.title}
              className="card retro-border flex flex-col"
            >
              <div className="mb-4 text-sm text-gray-500">
                {changeDate(post.published_at)}
              </div>
              <h3 className="text-xl font-bold mb-4">{post.title}</h3>
              <Link
                to={post.url}
                className="retro-btn rounded-xl mt-auto px-4 max-w-fit"
              >
                続きを読む
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
