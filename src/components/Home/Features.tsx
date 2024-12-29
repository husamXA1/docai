import Image from "next/image";

export default function Features() {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-wrap justify-center gap-10">
        <div className="w-[280px]">
          <Image
            className="w-full h-[280px]"
            src={"/images/robot.svg"}
            alt="illustration"
            width={1024}
            height={1024}
          />
          <h2 className="text-xl font-semibold mb-1 text-teal-950">Chatbot</h2>
          <p>
            The DocAI chatbot is your instant health assistant, available 24/7
            to answer your questions and provide personalized health tips. It
            uses advanced AI to give clear, helpful advice so you can make
            informed decisions about your health anytime.
          </p>
        </div>
        <div className="w-[280px]">
          <Image
            className="w-full h-[280px]"
            src={"/images/article.svg"}
            alt="illustration"
            width={1024}
            height={1024}
          />
          <h2 className="text-xl font-semibold mb-1 text-teal-950">Articles</h2>
          <p>
            DocAI offers a library of easy-to-read articles covering a wide
            range of health topics. From tips for everyday wellness to managing
            specific conditions, our articles are written and reviewed by
            experts to keep you informed and confident about your health.
          </p>
        </div>
        <div className="w-[280px]">
          <Image
            className="w-full h-[280px]"
            src={"/images/doctor.svg"}
            alt="illustration"
            width={1024}
            height={1024}
          />
          <h2 className="text-xl font-semibold mb-1 text-teal-950">Live Chat</h2>
          <p>
            Connect directly with certified doctors through our live chat
            feature. Whether you need professional advice, a second opinion, or
            answers to specific health concerns, our doctors are here to provide
            trusted guidance tailored to you.
          </p>
        </div>
      </div>
    </section>
  );
}
