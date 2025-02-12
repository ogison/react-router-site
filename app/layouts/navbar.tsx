import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarContents = [
    { id: "1", name: "ホーム", href: "/" },
    { id: "2", name: "スキル", href: "#skills" },
    { id: "3", name: "プロジェクト", href: "#projects" },
    { id: "4", name: "連絡先", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navbarContents.map((contact) => (
              <NavLink
                key={contact.id}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                to={contact.href}
              >
                {contact.name ? <>{contact.name}</> : <i>No Name</i>}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-expanded={isOpen}
            aria-label="メニューを開く"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden pb-4`}>
          <div className="flex flex-col space-y-4">
            {navbarContents.map((contact) => (
              <NavLink
                key={contact.id}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                to={contact.href}
              >
                {contact.name ? <>{contact.name}</> : <i>No Name</i>}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
