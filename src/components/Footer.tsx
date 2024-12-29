import Link from "next/link";
import { FaGithub, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-teal-50 pt-5">
      <div className="container mx-auto">
        <Link href={"/"} className="text-teal-500 font-bold text-3xl">
          DocAI
        </Link>
        <div className="md:flex gap-20 py-5 justify-center">
        <nav>
          <ul className="">
            <li>
              <Link
                className="hover:underline"
                href={"/ai"}
              >
                ChatBot
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href={"/articles"}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href={"/contact"}
              >
                Contact a Doctor
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-2">
            <div className="flex gap-3">
                <FaEnvelope size={20} />
                <p>husamxm0@gmail.com</p>
            </div>
            <div className="flex gap-3">
                <FaPhone size={20} />
                <p>+249 11 705 0461</p>
            </div>
            <div className="flex gap-3 justify-center">
                <FaGithub size={20}/>
                <FaFacebook size={20}/>
                <FaWhatsapp size={20}/>
            </div>
        </div>
        </div>
      </div>
      <p className="text-center text-sm">&copy; 2025 DocAI</p>
    </footer>
  );
}
