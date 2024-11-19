import Image from "next/image";
export type HeroSectionProps = {
    title: string;
    description: string;
    button: string;
};

export default function HeroSection({ hero }: { hero: HeroSectionProps }) {
    return (
        <section className="w-full pt-80">
            <div className="flex flex-cols-2 justify-center p-20">
                <div className="bg-white rounded-md p-10">
                    <p className="">{hero.title}</p>
                    <p>{hero.description}</p>
                    <p>{hero.button}</p>
                </div>
                <div className="bg-[#FBBA3C] rounded-md p-10">
                    <Image
                        src="/images/Group 219.png"
                        alt="Esempio di immagine"
                        width={500}
                        height={400}
                        priority
                        className="object-cover w-full"
                    />
                </div>
            </div>
        </section>
    );
}

/**<Image
              src="/images/image.png"
              alt="Esempio di immagine"
              width={500}
              height={400}
              loading="lazy"
              className="object-cover w-full"
            /> */