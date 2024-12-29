import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-teal-50 py-10">
      <div className="container flex max-md:flex-col items-center mx-auto gap-10">
        <div className="w-full">
          <h2 className="font-bold text-3xl">
            What's <span className="text-teal-950">DocAI</span>?
          </h2>
          <p className="my-3 text-lg leading-relaxed">
            DocAI is a healthcare platform that helps you get reliable health
            advice quickly and easily. It features an AI chatbot that answers
            your health questions and provides personalized tips. You can also
            explore a wide range of helpful articles on different health topics.
            If you need more support, you can chat directly with certified
            doctors for expert advice. With DocAI, staying informed and taking
            care of your health is simple and convenient.
          </p>
          <div className="flex buttons gap-3">
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
        <div className="w-full">
          <Image
            src={"/images/doctors.svg"}
            alt="illustration"
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
}
