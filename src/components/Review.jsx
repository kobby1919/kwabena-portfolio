import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewCard from "./ReviewCard";

const initialReviews = [
  { content: "Clean architecture, solid backend, and great attention to detail.", name: "Yev Geny", company: "Ghana Atomic Energy Commission" },
  { content: "Dependable, disciplined, and always delivers quality work.", name: "Mr. Barrigah", company: "Links Engineering" },
  { content: "An exceptional developer — focused, humble, and consistent.", name: "Joseph Nyarko", company: "Links Engineering" },
  { content: "Always eager to learn and reliable when it matters.", name: "Jay", company: "Ministry of Health" },
  { content: "One of the most impressive developers I’ve worked with.", name: "Lartey Gabriel", company: "Cyber Hawk" },
  { content: "Strong problem-solving skills with clean, maintainable code.", name: "Randy Aduhene", company: "Cyber Hawk" },
];

export default function Review() {
  const [reviews, setReviews] = useState(initialReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth <= 768);
  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", company: "", content: "" });

  // Resize detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % reviews.length), 5000);
    return () => clearInterval(interval);
  }, [reviews]);

  // Handle modal submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.company || !newReview.content) return;
    setReviews((prev) => [...prev, newReview]);
    setNewReview({ name: "", company: "", content: "" });
    setModalOpen(false);
  };

  return (
    <section id="reviews" className="section py-20 bg-zinc-900">
      <div className="container mb-6">
        <h2 className="headline-2 text-white mb-2">Testimonials</h2>
        {/* Paragraph directly under h2, left-aligned */}
        <p className="text-zinc-400 mb-10 max-w-[60ch]">
          Hear from clients and colleagues about their experience working together. Their feedback shows professionalism and quality in every project.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="flex flex-col justify-center items-center overflow-hidden relative mt-10 gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className={`flex-shrink-0 w-full ${isMobile ? "max-w-sm" : "max-w-3xl"}`}
          >
            <ReviewCard {...reviews[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Share Experience Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="
            mt-6 flex items-center justify-center gap-2 px-6 py-3
            text-white font-semibold rounded-xl
            bg-white/10 backdrop-blur-md border border-white/20
            hover:bg-white/20 hover:border-white/30 transition-all duration-300
          "
        >
          <span className="material-symbols-rounded text-lg">share</span>
          <span>Share Your Experience</span>
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-zinc-900/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-md w-full p-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition"
            >
              <span className="material-symbols-rounded">close</span>
            </button>

            <h3 className="text-white text-2xl font-semibold mb-4">
              Share Your Experience
            </h3>
            <p className="text-white/70 mb-6 text-sm">
              Your feedback helps us improve and grow. Share your experience below.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-xl bg-zinc-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Company"
                className="p-3 rounded-xl bg-zinc-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                value={newReview.company}
                onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
              />
              <textarea
                placeholder="Your Review"
                className="p-3 rounded-xl bg-zinc-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                rows={4}
                value={newReview.content}
                onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-400/30 via-sky-400/20 to-sky-400/10 text-white rounded-xl font-medium hover:from-sky-400/50 hover:to-sky-400/20 transition-all"
              >
                <span>Submit</span>
                <span className="material-symbols-rounded">send</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}