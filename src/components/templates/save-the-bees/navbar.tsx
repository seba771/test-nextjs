import Link from "next/link";

export type NavBarProps = {
    items: string[];
    button: string;
};

export default function NavBar({ bob }: { bob: NavBarProps }) {
    return (
        <section className="fixed w-full">
            <div className="flex justify-end gap-20 p-20">
                {bob.items.map((item, index) => (
                    <div key={index}>
                        <Link className="md:text-xl text-xl text-black" href="#">
                            <p>{item}</p>
                        </Link>
                    </div>
                ))}
                <div className="pl-14">
                    <Link className="md:text-xl text-xl text-black" href="#">
                        <p className="p-1 px-8 bg-[#FBBA3C] rounded-md font-semibold">{bob.button}</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
