import Link from "next/link";
import Image from "next/image";
export default function Homepage() {
    return (
        <section className="w-full space-y-28 h-full">
            <section className="w-full bg-gradient-to-tr from-[#ff8c00] to-[#FFD700]  text-primary">
                <div className="text-center p-96">
                    <h1 className="font-semibold text-6xl"> Salviamo le Api</h1>
                    <p className="font-medium text-3xl "> Scopri il mondo delle api, dalla loro importanza al problema che le affligge.</p>
                </div>
            </section>

            <section className="w-full px-14">
                <div>
                    <p className="text-primary font-semibold border-b-2 text-3xl">L'importanza delle Api</p>
                    <p className="text-secondary text-2xl font-light pt-4">Le api sono fondamentali per la salute degli ecosistemi e la nostra sicurezza alimentare. Attraverso l'impollinazione, aiutano la crescita di piante da cui dipendono frutti, verdure e noci. Senza di loro, molte specie vegetali non riuscirebbero a riprodursi, influenzando negativamente l’agricoltura e mettendo a rischio la biodiversità e la sicurezza alimentare globale.</p>
                </div>
            </section>

            <section className="w-full px-14">
                <div>
                    <p className="text-primary font-semibold border-b-2 text-3xl">Cosa fanno</p>
                    <div className="flex flex-col gap-2 text-secondary text-2xl font-light pt-4">
                        <li >Impollinano l'80% delle piante da fiore.</li>
                        <li>Sostengono la biodiversità.</li>
                    </div>
                </div>
            </section>

            <section className="w-full px-14">
                <div>
                    <p className="text-primary font-semibold border-b-2 text-3xl">Produzione di miele</p>
                    <div className="flex flex-col gap- text-secondary text-2xl font-light pt-4">
                        <p>Le api producono miele trasformando il nettare dei fiori in una riserva di energia per la colonia, ma anche per noi esseri umani.</p>
                        <div className="flex flex-col gap-2 pt-10 pb-10">
                            <li >Raccolta del nettare: Le api bottinatrici raccolgono il nettare da fiori e piante. </li>
                            <li >Lavorazione: Trasformano il nettare in miele grazie a enzimi e processi chimici. </li>
                            <li >Deposito nelle celle: Il miele viene conservato nelle celle dell’alveare. </li>
                            <li>Sigillatura con cera: Le api coprono le celle di miele con cera per conservarlo </li>
                        </div>
                        <p>
                            Il processo di produzione del miele è lungo e dispendioso, ci vogliono 1152 api per produrre un vasetto di miele.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full px-14">
                <div className="pb-32">
                    <p className="text-primary font-semibold border-b-2 text-3xl"> Il problema...</p>
                    <p className="text-secondary text-2xl font-light pt-4"> Le api, fondamentali per l'impollinazione e la biodiversità, stanno affrontando una crisi globale. Negli ultimi decenni, le popolazioni di api sono crollate, minacciando l'equilibrio ecologico. Diversi fattori contribuiscono a questo declino: pesticidi, cambiamenti climatici, perdita di habitat e malattie. L'uso intensivo di pesticidi agricoli, come i neonicotinoidi, ha danneggiato la salute delle api, riducendo la loro capacità di foraggiare e riprodursi.
                        Allo stesso tempo, il cambiamento climatico altera i periodi di fioritura delle piante, influenzando la disponibilità di cibo per le api. La perdita di habitat naturali e la monocultura intensiva riducono la varietà di piante su cui le api si nutrono. Se questo trend non viene invertito, non solo le api, ma anche altre specie dipendenti dalla loro attività, come gli esseri umani, rischiano di subire danni irreversibili. Interventi urgenti sono necessari per proteggere questi impollinatori vitali.</p>
                </div>

                <Image
                    src="/images/image 30.png"
                    alt="Esempio di immagine"
                    width={1200}
                    height={410}
                    loading="lazy"
                    className="object-contain aspect-auto"
                />
            </section>

            <section className="w-full px-14">
                <div >
                    <p className="text-primary font-semibold border-b-2 text-3xl">Benefici</p>
                    <div className="text-secondary text-2xl font-light pt-4">
                        <p>
                            Le api sono essenziali per l'impollinazione, che supporta la crescita di molte colture alimentari e fiori. La loro scomparsa minaccia la biodiversità e la sicurezza alimentare.</p>
                        <div className="flex flex-col gap-2 pt-6">
                            <li > Impollinano fiori e piante, favorendo la riproduzione delle colture. </li>
                            <li > Sostengono l'equilibrio ecologico, mantenendo la biodiversità.</li>
                            <li> Ci offrono un cibo delizioso.</li>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-14">
                <div>
                    <p className="text-primary font-semibold border-b-2 text-3xl">Simili ma diversi</p>
                </div>
                <div className="text-secondary text-2xl font-light pt-4">
                    <p>
                        Le api e le vespe, pur essendo molto simili, si differenziano in vari aspetti. Le api sono impollinatrici vitali per l’ambiente, mentre le vespe sono predatori. Entrambi possiedono il pungiglione, ma le vespe possono pungere più volte senza morire. Ecco alcune differenze principali:
                    </p>
                    <div className="flex flex-col gap-2 pt-6">
                        <li>Comportamento: Le api impollinano i fiori, mentre le vespe cacciano altri insetti.</li>
                        <li>Aspetto: Le api hanno corpi pelosi, le vespe sono lisce.</li>
                        <li>Ciclo di vita: Le api muoiono dopo aver punto, le vespe no.</li>
                        <li>Utilizzo: Le api producono miele, le vespe non sono produttive.</li>
                    </div>
                </div>
            </section>
        </section>
    );
}

/*
      */
