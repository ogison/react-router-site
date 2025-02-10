export async function getNavbarContents() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const navbarContents = [
    { id: 1, name: "ホーム", href: "/" },
    { id: 2, name: "スキル", href: "#skills" },
    { id: 3, name: "プロジェクト", href: "#projects" },
    { id: 4, name: "連絡先", href: "#contact" },
  ];
  return navbarContents;
}
