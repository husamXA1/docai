import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container py-10 mx-auto flex max-md:flex-col justify-between items-center gap-10">
      <div className="image w-full">
        <Image
          className="w-full"
          src={"/images/medicine.svg"}
          alt="illustration"
          width={1024}
          height={1024}
        />
      </div>
      <div className="text-center w-full">
        <h1 className="text-teal-950 font-bold text-3xl">DocAI</h1>
        <p className="m-3 text-lg">A platform to improve healthcare literacy</p>
        <div className="flex buttons justify-center gap-3">
          <Link
            href={"/ai"}
            className="rounded-xl px-5 py-2 bg-teal-950 text-teal-100 font-bold border border-teal-950"
          >
            ChatBot
          </Link>
          <Link
            href={"/contact"}
            className="rounded-xl px-5 py-2 text-teal-950 font-bold border border-teal-950"
          >
            Contact A Doctor
          </Link>
        </div>
      </div>
    </section>
  );
}
