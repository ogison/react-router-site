type Tag = {
  name: string;
};

type BlogData = {
  title: string;
  url: string;
  tags: Tag[];
  label: string;
  created_at: string;
};

export async function getBlogList() {
  const userName = "ogison";
  const url =
    "https://qiita.com/api/v2/items?page=1&per_page=100&query=user:" + userName;
  const res = await fetch(url);
  const data = await res.json();

  return data.map((post: BlogData) => ({
    title: post.title,
    url: post.url,
    tags: post.tags.map((tag) => tag.name),
    label: "qiita",
    date: post.created_at,
  }));
}
