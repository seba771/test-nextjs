import Link from "next/link";
import { Button } from "@/components/ui/button";

export type NavBarProps = {
    items: string[];
    button: string;
};

export default function NavBar({ bob }: { bob: NavBarProps }) {
    return (
        <section className="fixed w-full z-10 bg-white">
            <div className="md:flex justify-end gap-20 px-24 p-14">
                {bob.items.map((item, index) => (
                    <div key={index}>
                        <Button asChild variant="link" size="lg" className="md:text-xl hover:bg-white text-xl text-black">
                        <Link href="https://savethebees.com/donate"><p>{item}</p></Link> 
                        </Button>
                    </div>
                ))}
                <div className="pl-14">
                    <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="text-xl font-semibold bg-[#FBBA3C] hover:bg-[#FBBA3C] text-black rounded-lg" >
                        <Link href="https://savethebees.com/donate">{bob.button}</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

/**<Link className="md:text-xl text-xl text-black" href="#">
                        <p className="p-1 px-8 bg-[#FBBA3C] rounded-md font-semibold">{bob.button}</p>
                    </Link> */