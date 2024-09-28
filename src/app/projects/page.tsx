import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - Wahidyan Kresna Fridayoka (Yoka)",
  description:
    "Showcase of projects by Wahidyan Kresna Fridayoka (Yoka), a Software Engineer and Engineering Manager.",
};

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-green-400 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Projects
        </h1>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">
            Project 1: E-commerce Platform
          </h2>
          <p className="mb-2">
            Led the development of a scalable e-commerce platform using React
            and Node.js.
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Implemented real-time inventory management</li>
            <li>Integrated multiple payment gateways</li>
            <li>Optimized performance for high-traffic periods</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">
            Project 2: AI-powered Chatbot
          </h2>
          <p className="mb-2">
            Developed an AI-powered chatbot for customer service using Python
            and natural language processing.
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Reduced customer service response time by 50%</li>
            <li>Implemented machine learning for continuous improvement</li>
            <li>Integrated with existing CRM systems</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">
            Project 3: Mobile Fitness App
          </h2>
          <p className="mb-2">
            Created a cross-platform mobile fitness app using React Native.
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Implemented real-time workout tracking</li>
            <li>Integrated with wearable devices for data collection</li>
            <li>Developed a social feature for user engagement</li>
          </ul>
        </section>

        <Link href="/" className="text-blue-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
