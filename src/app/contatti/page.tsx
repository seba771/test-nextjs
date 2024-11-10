import Link from "next/link";
import Image from "next/image";
export default function Pag2() {
  return (
    <section className="min-w-full space-y-32 h-full">
      <section className="w-full bg-yellow-400 p-4 fixed top-0 z-10">
        <div className="container flex justify-between">
          <div className="font-bold flex items-center">
            <Link href="/">Homepage</Link>
          </div>
          <div className="">
            <Link href="/contatti">
              {" "}
              <p className="w-fit bg-white hover:brightness-75 duration-100 ease-in-out px-10 py-3 rounded-lg">
                Contatti
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full pt-32">
        <div className="grid grid-cols-2 gap-40">
          <div className="font-bold text-center text-3xl ">
            PROVA SITO chchchchch
          </div>
          <div className="">
            <h1> ciao </h1>
            prova prova prova prova prova prova prova prova prova prova prova
            prova prova prova prova prova prova prova prova prova prova prova
            prova prova
          </div>
        </div>
      </section>

      <section className="w-full pt-10">
        <div className="container mx-auto grid grid-cols-4 gap-10 ">
          <div className="font-sans bg-yellow-300 text-center border-4 border-black">
            elemento 1
          </div>
          <div className="font-serif bg-blue-400 border-4 border-black">
            elemento 2
          </div>
          <div className="font-mono bg-amber-700 border-4 border-black">
            elemento 3{" "}
          </div>
          <div className="font-thin bg-purple-500 text-right border-4 border-black">
            elemento 4
          </div>
        </div>
      </section>

      <section className="w-full h-full">
        <div className="h-fit w-full text-center flex items-center justify-center text-blue-950 text-6xl bg-green-300 hover:cursor-pointer hover:bg-red-300 duration-300 ease-in-out hover:text-lime-200">
          <h1 className="py-10">Prova</h1>
        </div>
      </section>

      <section className="w-full container text-xl">
        <Link
          href="http://localhost:3000/chi-sono"
          className="bg-red-500 hover:bg-red-600 border-2 rounded-md border-black px-10 py-2"
        >
          <span className="font-semibold">bottone</span>
        </Link>
        <div className="mt-6">
          <h1> righe:</h1>
          <div className="flex flex-col gap-3 mt-2">
            <div> el 2 </div>
            <div> el 2 </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full pb-32 flex items-center justify-center relative">
        <Image
          src="/images/image.png"
          alt="Esempio di immagine"
          width={400}
          height={400}
          loading="lazy"
          className="object-contain aspect-auto"
        />
      </section>
    </section>
  );
}

/*
        
       


  /* */
