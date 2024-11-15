type ReviewCard = {
  name: string;
  review: string;
};

export type ReviewProps = {
  title: string;
  description: string;
  reviewCard: ReviewCard[];
};

export default function ReviewSection({ review }: { review: ReviewProps }) {
  return (
    <section className="w-full h-full md:pb-28">
      <div className="pb-16">
      <h1 className="md:text-4xl text-3xl text-black font-semibold border border-b-violet-200">{review.title}</h1>
        <p className="text-lg text-gray-500">{review.description}</p>
        <div className="mt-4 md:grid md:grid-cols-2 md:gap-16">
          {review.reviewCard.map((item, index) => (
            <div
              key={index} 
              className="mt-4 md:text-2xl text-xl text-black/50 font-normal"
            >
              <p>
                <span className="font-semibold text-black">{item.name}: </span>
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 