import NavBar, { NavBarProps } from "@/components/templates/save-the-bees/navbar"


const bob: NavBarProps = {
    items: [
      "Come funziona",
      "Missione",
      "Recensioni",
    
    ],
    button:"INIZIA ORA!",
  }


export default function Homepage() {
    return (
      <section className="w-full h-full ">
        <NavBar bob={bob} />
    </section>
    )
}
/*
bg-[#FFD700]
*/