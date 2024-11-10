import Link from "next/link";

export default function Home() {
  return (
    <section className="container w-full h-full">
      <div className="flex items-center justify-center text-7xl font-bold mt-32">
        Homepage
      </div>
      <div className="flex flex-col gap-y-10 text-black mt-20 text-3xl">
        I miei Link:
        <Link
          href="/chi-sono"
          className="underline hover:font-semibold duration-100 ease-in-out"
        >
          Chi sono
        </Link>
        <Link
          href="/contatti"
          className="underline hover:font-semibold duration-100 ease-in-out"
        >
          Contatti
        </Link>
      </div>
    </section>
  );
}
