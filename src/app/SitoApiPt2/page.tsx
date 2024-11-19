import HeroSection, { HeroSectionProps } from "@/components/templates/save-the-bees/herosection"
import NavBar, { NavBarProps } from "@/components/templates/save-the-bees/navbar"


const bob: NavBarProps = {
    items: [
      "Come funziona",
      "Missione",
      "Recensioni",
    
    ],
    button:"INIZIA ORA!",
  }

  const hero: HeroSectionProps={
    title:"Aiutaci a salvare le api",
    description:"Le api sono essenziali per la produzione del miele che tanto ami",
    button:"Fai un acquisto",
  }


export default function Homepage() {
    return (
      <section className="w-full h-full bg-[#FFD700]">
        <NavBar bob={bob} />
        <HeroSection hero={hero}/>
    </section>
    )
}
/*
bg-[#FFD700]
*/