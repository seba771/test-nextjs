import Link from "next/link";
import Image from "next/image";

export type BoxProps = {
    title: string;
    description: string;
    buttonText: string;
};

export default function Box({ boxed }: { boxed: BoxProps }) {
    return (
        <section className="w-full h-full md:pb-28 pb-12">
            <div className="text-center flex flex-col items-center justify-center border-2 border-black rounded-md p-12">
                <h1 className="md:text-6xl text-4xl font-semibold">{boxed.title}</h1>
                <p className="text-secondary md:text-4xl text-xl pt-4 pb-4">{boxed.description}</p>
                <div className="flex flex-row justify-between border-2 border-black rounded-full p-2">
               
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                />
              </svg>{" "}

                    <Link className="text-primary md:text-3xl text-xl font-semibold px-6" href="#">
                        <p>{boxed.buttonText}</p>
                    </Link>
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                />
              </svg>{" "}
                </div>
            </div>
        </section>
    )
}






/*<a className="text-primary" href="#">
                        <p>{boxed.description2}</p>
                    </a>*/