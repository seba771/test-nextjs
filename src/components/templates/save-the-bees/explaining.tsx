export type ExplainingSectionProps = {
  title: string;
  description: string;
};

export default function ExplainingSection({jhonny,}: {jhonny: ExplainingSectionProps;}) {
  return (
    <section className="w-full h-full ">
      <h1 className="md:text-4xl text-3xl text-black font-semibold border border-b-violet-200">
        {jhonny.title}
      </h1>
      <p className="mt-4 md:text-2xl text-xl text-black/50 font-normal">
        {jhonny.description}
      </p>
    </section>
  );
}
