import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewCard from "./ReviewCard";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", company: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_URL}/api/reviews`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Resize detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % reviews.length),
      5000
    );
    return () => clearInterval(interval);
  }, [reviews]);

  // Submit new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.company || !newReview.content) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (!res.ok) throw new Error("Failed to submit");

      const saved = await res.json();
      setReviews((prev) => [saved, ...prev]);
      setNewReview({ name: "", company: "", content: "" });
      setSuccessMsg("Thank you! Your review has been submitted.");
      setTimeout(() => {
        setSuccessMsg("");
        setModalOpen(false);
      }, 2000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="reviews"
      className="section py-20 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 0% 100%, rgba(14,165,233,0.07) 0%, transparent 55%), linear-gradient(180deg, #18181b 0%, #18181b 100%)",
      }}
    >
      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900/80 to-transparent pointer-events-none" />
      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />

      <div className="container mb-6 relative z-10">
        <h2 className="headline-2 text-white mb-2">Testimonials</h2>
        <p className="text-zinc-400 mb-10 max-w-[60ch]">
          Hear from clients and colleagues about their experience working together.
          Their feedback shows professionalism and quality in every project.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="flex flex-col justify-center items-center overflow-hidden relative z-10 mt-10 gap-6">

        {loading && (
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <span className="material-symbols-rounded animate-spin text-sky-400">progress_activity</span>
            Loading reviews...
          </div>
        )}

        {!loading && error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        {!loading && reviews.length === 0 && !error && (
          <p className="text-zinc-500 text-sm">No reviews yet. Be the first!</p>
        )}

        {!loading && reviews.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className={`flex-shrink-0 w-full ${isMobile ? "max-w-sm" : "max-w-3xl"}`}
            >
              <ReviewCard {...reviews[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Dot indicators */}
        {reviews.length > 1 && (
          <div className="flex gap-2 mt-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-sky-400 w-5" : "bg-zinc-600"
                }`}
              />
            ))}
          </div>
        )}

        {/* Share Experience Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="mt-4 flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
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
            className="relative bg-zinc-900/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-md w-full p-8 mx-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition"
            >
              <span className="material-symbols-rounded">close</span>
            </button>

            <h3 className="text-white text-2xl font-semibold mb-2">
              Share Your Experience
            </h3>
            <p className="text-white/60 mb-6 text-sm">
              Your feedback is appreciated. Share your experience below.
            </p>

            {successMsg ? (
              <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                <span className="material-symbols-rounded text-sky-400 text-5xl">check_circle</span>
                <p className="text-white font-medium">{successMsg}</p>
              </div>
            ) : (
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

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-sky-500/10 border border-sky-400/30 text-sky-300 rounded-xl font-medium hover:bg-sky-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <span className="material-symbols-rounded animate-spin text-sm">progress_activity</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <span className="material-symbols-rounded text-sm">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
