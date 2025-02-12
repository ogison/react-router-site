import { SiGithub, SiQiita } from "react-icons/si";

export default function Footer() {
  return (
    <footer id="contact" className="py-8 px-4 bg-white border-t-4 border-black">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="https://github.com/ogison"
            className="retro-btn text-xs flex items-center space-x-2"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://qiita.com/ogison"
            className="retro-btn text-xs flex items-center space-x-2"
          >
            <SiQiita size={20} />
          </a>
        </div>
        <p className="text-xs">© 2025 ogison</p>
      </div>
    </footer>
  );
}
