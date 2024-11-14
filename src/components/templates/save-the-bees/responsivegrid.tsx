export type ProvaProps = {
    title: string;
    subtitle: string;
    subtitle2: string;
    subtitle3: string;
    description: string;
    description1: string;
    description2: string;
    description3: string;

};

export default function Prova({ pablo }: { pablo: ProvaProps }) {
    return (
        <section className="w-full h-full md:pb-28">
            <h1 className="md:text-4xl text-3xl text-black font-semibold border border-b-violet-200">
                {pablo.title}
            </h1>
            <div className="mt-4 md:text-2xl text-xl text-black/50 font-normal">
                <p>{pablo.description}</p>

                <div className="md:grid md:grid-cols-2 md:gap-10 pt-12">
                    <div><p className="text-primary font-semibold">{pablo.subtitle}</p>
                        <p className="md:pb-0 pb-12">{pablo.description1}</p></div>

                    <div><p className="text-primary font-semibold">{pablo.subtitle3}</p>
                        <p>{pablo.description3}</p></div>
                    <div className="md:flex md:flex-col gap-24">
                        <div className="pt-12 md:pt-0 pb-24">
                            <p className="text-primary font-semibold">{pablo.subtitle2}</p>
                            <p className="md:pb-0 pb-12">{pablo.description2}</p></div>
                    </div>
                </div>

            </div>


        </section >
    );
}





