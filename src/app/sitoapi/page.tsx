import Link from "next/link";
import Image from "next/image";
import ExplainingSection, {
  ExplainingSectionProps,
} from "@/components/templates/save-the-bees/explaining";
import ListSection, {
  ListSectionProps,
} from "@/components/templates/save-the-bees/list";
import ProvaProps, { ReviewProps } from "@/components/templates/save-the-bees/responsivegrid";
import Box, { BoxProps } from "@/components/templates/save-the-bees/box";
import Prova from "@/components/templates/save-the-bees/responsivegrid";
import ReviewSection from "@/components/templates/save-the-bees/responsivegrid";

const jhonny: ExplainingSectionProps = {
  title: "L'importanza delle Api",
  description:
    "Le api sono fondamentali per la salute degli ecosistemi e la nostra sicurezza alimentare. " +
    "Attraverso l'impollinazione, aiutano la crescita di piante da cui dipendono frutti, verdure e noci." +
    " Senza di loro, molte specie vegetali non riuscirebbero a riprodursi, influenzando negativamente l’agricoltura " +
    "e mettendo a rischio la biodiversità e la sicurezza alimentare globale.",
};

const jhonny2 = {
  title: "Il problema...",
  description:
    "Le api, fondamentali per l'impollinazione e la biodiversità, stanno affrontando una crisi globale. Negli ultimi decenni, le popolazioni di api sono crollate, minacciando l'equilibrio ecologico. Diversi fattori contribuiscono a questo declino: pesticidi, cambiamenti climatici, perdita di habitat e malattie. L'uso intensivo di pesticidi agricoli, come i neonicotinoidi, ha danneggiato la salute delle api, riducendo la loro capacità di foraggiare e riprodursi. Allo stesso tempo, il cambiamento climatico altera i periodi di fioritura delle piante, influenzando la disponibilità di cibo per le api. La perdita di habitat naturali e la monocultura intensiva riducono la varietà di piante su cui le api si nutrono. Se questo trend non viene invertito, non solo le api, ma anche altre specie dipendenti dalla loro attività, come gli esseri umani, rischiano di subire danni irreversibili. Interventi urgenti sono necessari per proteggere questi impollinatori vitali.",
};

const list1: ListSectionProps = {
  title: "Benefici",
  description:
    "Le api sono essenziali per l'impollinazione, che supporta la crescita di molte colture alimentari e fiori. La loro scomparsa minaccia la biodiversità e la sicurezza alimentare.",
  items: [
    "Impollinano fiori e piante, favorendo la riproduzione delle colture.",
    "Impollinano fiori e piante, favorendo la riproduzione delle colture.",
    "Impollinano fiori e piante, favorendo la riproduzione delle colture.",
  ],
};

const list2: ListSectionProps = {
  title: "Benefici",
  description:
    "Le api sono essenziali per l'impollinazione, che supporta la crescita di molte colture alimentari e fiori. La loro scomparsa minaccia la biodiversità e la sicurezza alimentare.",
  items: [
    "Impollinano fiori e piante, favorendo la riproduzione delle colture.",
    "Impollinano fiori e piante, favorendo la riproduzione delle colture.",
    "Impollinano fiori e piante, favorendo la riproduzione delle colture.",
    "Impollinano fiori e piante, favorendo la riproduzione delle colture.",
  ],
};

const list3: ListSectionProps = {
  title: "Simili ma diversi",
  description: "Le api e le vespe, pur essendo molto simili, si differenziano in vari aspetti. Le api sono impollinatrici vitali per l’ambiente, mentre le vespe sono predatori. Entrambi possiedono il pungiglione, ma le vespe possono pungere più volte senza morire. Ecco alcune differenze principali: ",
  items: [
    "Comportamento: Le api impollinano i fiori, mentre le vespe cacciano altri insetti.",
    "Le api hanno corpi pelosi, le vespe sono lisce.",
    " Ciclo di vita: Le api muoiono dopo aver punto, le vespe no.",
    "  Utilizzo: Le api producono miele, le vespe non sono produttive.",
  ]
}


const list4: ListSectionProps = {
  title: "Cosa fanno",
  description: "",
  items: [
    "Impollinano l'80% delle piante da fiore.",
    "Sostengono la biodiversità.",
  ]
}

const boxed: BoxProps = {
  title: "Ecco come puoi aiutare!",
  description: "Le api stanno soffrendo, abbiamo bisogno del tuo aiuto se vogliamo migliorare la loro situazione",
  buttonText: "Effettua una donazione",
}

const reviewData: ReviewProps = {
  title: "Testimonianze",
  description: "Cosa ne pensa la gente",
  reviewCard: [
    {
      name: "Mario Rosso: Apicoltore",
      review: " Le api sono fondamentali per il mio lavoro. Da quando la loro popolazione è in declino, ho notato un calo nella produttività dei miei frutti. La mancanza di impollinazione sta davvero minacciando la mia attività. Mi preoccupa che il problema venga ignorato. È urgente intervenire per proteggere questi insetti essenziali per l'ecosistema e l'agricoltura",
    }, {
      name: "Silvia Monin: Insegnante scuola elementare",
      review: "Credo che le api siano un ottimo strumento per sensibilizzare i bambini sui temi ecologici e dell'ambiente. Nelle scuole, parliamo spesso di come le api siano fondamentali per la natura e l'alimentazione. Coinvolgere i più bambini in attività pratiche, come la creazione di piccoli giardini o l'osservazione delle api, aiuta a sviluppare un forte senso di responsabilità e consapevolezza. Le api sono una risorsa educativa che ci insegna la cooperazione e la cura dell'ambiente.",

    }, {
      name: "Laura Cechi: Ambientalista",
      review: "Ogni anno, sempre più studi confermano l'importanza delle api per l'equilibrio del nostro ambiente. Il loro declino non è solo un problema per l'agricoltura, ma per la biodiversità globale. Credo che dovremmo sensibilizzare di più la popolazione sulla gravità di questa situazione e fare di più per proteggerle, prima che sia troppo tardi. Ritengo che la gente non si renda conto di quanto sia grave la situazione. Le api sono vitali per la produzione del cibo che mangiamo, ma l'uso eccessivo di pesticidi e la perdita di habitat stanno mettendo a rischio la loro sopravvivenza. Dobbiamo educare i giovani a rispettare questi insetti e promuovere politiche più sostenibili."
    }
  ]
}

export default function Homepage() {
  return (
    <section className="w-full h-full">
      <section className="h-screen bg-gradient-to-tr from-[#ff8c00] to-[#FFD700] text-primary ">
        <div className="text-center flex flex-col items-center justify-center h-screen">
          <h1 className="font-semibold md:text-6xl text-5xl">
            {" "}
            Salviamo le Api
          </h1>
          <p className="md:w-1/3 w-full font-medium md:text-4xl text-2xl pt-6">
            {" "}
            Scopri il mondo delle api, dalla loro importanza al problema che le
            affligge.
          </p>
        </div>
      </section>
      <section className="container md:space-y-28 space-y-12 md:pt-28 pt-12">
        <section className="w-full">
          <div>
            <ExplainingSection jhonny={jhonny} />
          </div>
        </section>

        <ListSection list={list4} />

        <section className="w-full">
          <div>
            <p className="text-primary font-semibold border-b-2 text-4xl">
              Produzione di miele
            </p>
            <div className="flex flex-col gap- text-secondary text-xl font-light pt-4">
              <p>
                Le api producono miele trasformando il nettare dei fiori in una
                riserva di energia per la colonia, ma anche per noi esseri
                umani.
              </p>
              <div className="flex flex-col gap-2 pt-10 pb-10">
                <li>
                  Raccolta del nettare: Le api bottinatrici raccolgono il
                  nettare da fiori e piante.{" "}
                </li>
                <li>
                  Lavorazione: Trasformano il nettare in miele grazie a enzimi e
                  processi chimici.{" "}
                </li>
                <li>
                  Deposito nelle celle: Il miele viene conservato nelle celle
                  dell’alveare.{" "}
                </li>
                <li>
                  Sigillatura con cera: Le api coprono le celle di miele con
                  cera per conservarlo{" "}
                </li>
              </div>
              <p>
                Il processo di produzione del miele è lungo e dispendioso, ci
                vogliono 1152 api per produrre un vasetto di miele.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="pb-32">
            <ExplainingSection jhonny={jhonny2} />
          </div>

          <div className="flex md:w-1/2 w-full h-[400px]">
          <Image
              src="/images/image.png"
              alt="Esempio di immagine"
              width={500}
              height={400}
              loading="lazy"
              className="object-cover w-full"
            />
          </div>
        </section>
        <ListSection list={list1} />
        <ListSection list={list3} />
        <section className="w-full">


        <ReviewSection review={reviewData} />
        
        <Box boxed={boxed} />
        </section>

        <section className="w-full pb-28">
          <ListSection list={list2} />
        </section>



      </section>
    </section>
  );
}
