import { Link } from "lucide-react";

export type BoxProps = {
    title: string;
    description: string;
    description2: string;
};

export default function Box({ boxed }: { boxed: BoxProps }) {
    return (
        <section className="w-full h-full md:pb-28">
            <div className="text-center flex flex-col items-center justify-center border-2 border-black rounded-md p-12">
                <h1 className="md:text-6xl text-4xl font-semibold">{boxed.title}</h1>
                <p className="text-secondary md:text-4xl text-xl pt-4 pb-4">{boxed.description}</p>
                <div className="flex flex-row justify-between">

                    <Link className="text-primary" href="#">
                        <p>{boxed.description2}</p>
                    </Link>



                </div>
            </div>
        </section>
    )
}






/*<a className="text-primary" href="#">
                        <p>{boxed.description2}</p>
                    </a>*/