import { useState } from "react";
import "./faq.css";

const faqs = [
    {
    question: "- Are the courses suitable if I'm a complete beginner with no prior language experience?",
    answer: "Yes, absolutely! At Vamos Language Academy, we offer courses for all levels, from complete beginner to advanced.Before you begin, you'll take a free online placement test to determine your true level and ensure you start from the right place, without pressure or feeling behind others."
    },
    {
    question: "- What's the difference between Group Classes and Private Sessions? Which one is best for me?",
    answer: "Group Classes (5-8 students): Suitable if you enjoy interaction, group practice, and building confidence in speaking within a group setting.Private One-to-One Sessions: Suitable if you want to progress faster, need complete focus, or have a specific goal such as work, travel, or an exam.The choice depends on your time, your goal, and your learning style… and we'll help you choose what's best for you."
    },
    {
    question: "Is the focus solely on grammar, or will I actually be able to speak?",
    answer: "work on all skills: (Speaking - Listening - Reading - Writing) With a special focus on correct pronunciation and building confidence in speaking, so you can use the language at work and in everyday life, not just memorize rules."
    },
    {
    question: "Since the teachers are Egyptian, will the language and pronunciation level be strong?",
    answer: "Yes, absolutely. All our teachers are academically qualified and have years of teaching experience. They speak the language at a native speaker level, which guarantees you correct pronunciation, natural language use, and a professional learning experience from day one."
    },
    {
    question: "Are the online courses effective? And how is the interaction?",
    answer: "Our courses are 100% online, but very interactive.\n\nThey include:\nContinuous conversation practice\nLive feedback from the instructor\nPractical exercises\nReal progress tracking\nThe experience is designed to encourage you to participate and speak, not just listen."
    },
    {
    question: "Are the courses suitable for children?",
    answer: "Yes, we have courses suitable for children from the age of 6, using a simple and interactive approach that suits their age and helps them love the language and speak confidently.",
    },
    {
    question: "Is there a certificate upon completion of the course?",
    answer: "Yes, after completing the course, we provide a certificate that proves the level you have reached in the language.",
    },
    {
    question: "Are the times fixed or flexible?",
    answer: "Our times are very flexible and we set them for you. Before the group starts, we hold a vote among the registered students to determine the most suitable times for most people.\n\nThis way:\n\nEvery student has a say\n\nThe times are convenient for the whole group\n\nAnd commitment is higher throughout the course\n\nFor private sessions, the times are according to your availability and your agreement with the instructor.",
    },
    {
    question: "Is there a physical location or is it online?",
    answer: "No, Vamos is entirely online.\n\nThis gives you the advantage of:\n\n- Learning from anywhere\n- No commuting\n- At a time that suits you.",
    },
    {
    question: "Can I pay for the course in installments?",
    answer: "Yes, installment plans are available for some courses.\n\nDetails vary depending on the language and level, and will be displayed during registration.",
    },
    {
    question: "Cancellation and Refund Policy",
    answer: "Once your registration is confirmed and payment is complete, you cannot cancel or receive a refund.\n\nIn case of unforeseen circumstances, you can postpone your registration to the next available group, provided you notify us at least 10 days before the course starts.\n\nNo cancellation requests will be accepted after payment is completed.\n\nTherefore, please double-check your selection before completing the registration process to protect the rights of all parties.",
    },
    {
    question: "Is installment payment available?",
    answer: "Yes, installment payment is available for the entire level, not individual modules.\n\nPayment is made in two installments:\nThe first installment is due upon booking, and the second installment is due within 15 days.\n\nThis system ensures:\nBooking commitment and course continuity without interruption.\nThe same system applies to private sessions.",
    }
];

export default function FAQ() {
const [openIndex, setOpenIndex] = useState(null);

const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
};

return (
    <>
        <div className="faq-container">
        <h2 className="faq-title">FAQ</h2>

        {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
            
            <div className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <span className="icon">⌄</span>
            </div>

            <div className="faq-answer">
                {faq.answer}
            </div>

            </div>
        ))}
        </div>
    </>
    );
}