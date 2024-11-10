import  Link  from 'next/link';
import Image from 'next/image';
export default function Pag2() {
    return (
      <section className="w-full container space-y-32 h-[2000px]">

        <section className="w-full bg-yellow-400 p-4 fixed top-0 left-0 z-10">
          <div className="container mx-auto grid grid-cols-2"> 
          <div className="font-bold">Elemento 1</div>
          <div className="">Elemento 2</div>
          </div>
        </section>

        <section className="w-full pt-32">
          <div className="container mx-auto grid grid-cols-2 gap-40"> 
          <div className="font-bold text-center text-3xl ">PROVA SITO chchchchch</div>
          <div className="">
            <h1> ciao </h1>
            prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova</div>
          </div>
        </section>

        <section className="w-full pt-10">
          <div className="container mx-auto grid grid-cols-4 gap-10 "> 
          <div className="font-sans bg-yellow-300 text-center border-4 border-black">elemento 1</div>
          <div className="font-serif bg-blue-400 border-4 border-black">elemento 2</div>
          <div className="font-mono bg-amber-700 border-4 border-black">elemento 3 </div>
          <div className="font-thin bg-purple-500 text-right border-4 border-black">elemento 4</div>
          </div>
        </section>

        <section>
          <div className='text-center top-80 pl-40 text-blue-950 text-6xl bg-green-300 hover:bg-red-300 duration-300 ease-in-out hover:text-lime-200'>prova</div>
        </section>


     
        <section className='w-full '>
         <Link href="http://localhost:3000/chi-sono" className='bg-red-500 border-2 rounded-md border-black'> bottone </Link>
         <div className='mt-5 flex flex-row gap-4'><h1> righe:</h1>  <div> el 1 </div>
         <div> el 2 </div></div>
         <div className='mt-5 flex flex-col gap-4'><h1> righe:</h1>  <div> el 1 </div>
         <div> el 2 </div></div>
        </section>
 
        <section className="w-full h-[250px] relative">
          ciaoo
          <Image
          src="/image.png"
          alt="Esempio di immagine" 
          fill
          loading ="lazy"
          />
        </section>

      </section>
    );
  }

/*
        
       


  /* */



 