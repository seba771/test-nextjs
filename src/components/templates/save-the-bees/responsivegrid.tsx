type ReviewCard = {
    name: string;
    review: string;
  }

export type ReviewProps = {
    title: string;
    description: string;
    reviewCard: ReviewCard[];
};

export default function reviewSection({ review }: { review: ReviewProps }) {
    return (
        <section className="w-full h-full md:pb-28">
            <div className="mt-8">
        {review.reviewCard.map((item, index) => (
          <li
            key={index}
            className="md:text-2xl text-xl text-black/50 font-normal"
          >
            {item}
          </li>
        ))}
      </div>
        </section >
    );
}





