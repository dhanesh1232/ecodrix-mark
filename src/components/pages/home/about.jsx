import Link from "next/link";

export function About() {
  const message = encodeURIComponent(
    "Hi! I'm interested in joining the ECOD team. I'd love to learn more about current opportunities and how I can contribute to your innovative solutions. Could you please share details about open positions and the application process?"
  );
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About ECOD</h2>
        <p className="max-w-2xl mx-auto text-slate-300 mb-8">
          We built ECOD SaaS to help businesses automate customer engagement,
          streamline workflows, and scale globally with AI. Our mission is to
          make advanced conversational AI accessible to businesses of all sizes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`https://wa.me/918790063821?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition"
          >
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
