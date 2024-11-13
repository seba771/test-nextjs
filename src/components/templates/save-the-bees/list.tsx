import ExplainingSection from "./explaining";

export type ListSectionProps = {
  title: string;
  description: string;
  items: string[];
};

export default function ListSection({ list }: { list: ListSectionProps }) {
  return (
    <section className="w-full h-full">
      <ExplainingSection
        jhonny={{ title: list.title, description: list.description }}
      />

      <div className="mt-8">
        {list.items.map((item, index) => (
          <li
            key={index}
            className="md:text-2xl text-xl text-black/50 font-normal"
          >
            {item}
          </li>
        ))}
      </div>
    </section>
  );
}
