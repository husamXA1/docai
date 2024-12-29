import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex justify-between p-3">
        <div className="text">
          <h1>
            <Link href={"/"}>DocAI</Link>
          </h1>
        </div>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link className="hover:underline" href={"/ai"}>
                ChatBot
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/articles"}>
                Articles
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/contact"}>
                Contact a Doctor
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
