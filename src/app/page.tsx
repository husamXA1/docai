import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10">
      <div className="container mx-auto flex max-md:flex-col justify-between items-center gap-10">
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
          <p className="m-3">A platform to improve healthcare literacy</p>
          <div className="flex buttons justify-center gap-3">
            <button className="rounded-xl px-5 py-2 bg-teal-950 text-teal-100 font-bold border border-teal-950">ChatBot</button>
            <button className="rounded-xl px-5 py-2 text-teal-950 font-bold border border-teal-950">Contact A Doctor</button>
          </div>
        </div>
      </div>
    </main>
  );
}
