import SectionTitle from "../Common/SectionTitle";
import SingleFAQ from "./SingleFAQ";

const faqData = [
  {
    id: 1,
    question: "Are you a manufacturer?",
    answer: "Yes, Shanghai Electrical Steel owns and operates its own manufacturing facility.",
  },
  {
    id: 2,
    question: "Do you offer international shipping?",
    answer: "Yes. We ship globally and work with leading logistics partners for timely deliveries.",
  },
  {
    id: 3,
    question: "Can we visit your factory?",
    answer: "Absolutely. We welcome client visits to tour our facility and inspect production lines.",
  },
  {
    id: 4,
    question: "Do you offer after-sales support?",
    answer: "Yes. We offer 100% product guarantee and are committed to full after-sales assistance.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          paragraph="Here are some common questions about Shanghai Electrical Steel."
          center
          width="665px"
        />

        <div className="mx-auto max-w-4xl">
          {faqData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 