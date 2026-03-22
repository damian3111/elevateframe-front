import { motion } from "framer-motion";
import { Check, Star, Sparkles, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OfferSection() {
  const navigate = useNavigate();

  return (
    <section className="relative ">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black/80 to-purple-900/10 pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
            <Sparkles size={16} />
            Limited Time Offer
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Turn Your Photo Into{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 bg-clip-text text-transparent">
              Art Worth Hanging
            </span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Not just edits. We create cinematic, high-status visuals that
            make people stop, stare, and remember you.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-purple-400/20 blur-3xl opacity-40 rounded-3xl pointer-events-none" />

          <div className="relative bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="px-5 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-500 font-semibold rounded-full shadow-lg text-white">
                MOST POPULAR
              </div>
            </div>

            {/* Title + Stars */}
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Premium AI Transformation Pack
              </h3>

              <div className="flex items-center justify-center gap-2 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Price */}
              <div className="flex items-end justify-center gap-3">
                <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  €49
                </span>
                <span className="text-white/40 line-through text-xl md:text-2xl">
                  €79
                </span>
              </div>

              <p className="text-white/50 mt-2">One-time payment. No subscriptions.</p>
            </div>

            {/* Value Stack */}
            <div className="space-y-4 mb-10">
              {[
                "Custom AI-generated portrait (any high-status style you want)",
                "Unlimited revisions until it looks perfect",
                "High-resolution files ready for print",
                "Premium poster-ready composition (wall art quality)",
                "Fast first proof in 1–3 days + production/shipping to your door",
                "Direct communication with creator for custom tweaks",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <Check className="text-green-400 mt-1" size={20} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Bonuses */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-10">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-white">
                <Sparkles size={18} />
                Free Bonuses (Today Only)
              </h4>

              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>+ Extra style variations</span>
                  <span className="text-white/40 line-through">€19</span>
                </div>
                <div className="flex justify-between">
                  <span>+ Social media optimized versions</span>
                  <span className="text-white/40 line-through">€14</span>
                </div>
                <div className="flex justify-between">
                  <span>+ Priority processing</span>
                  <span className="text-white/40 line-through">€12</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 30px 100px rgba(168,85,247,.7)" }}
                whileTap={{ scale: 0.96 }}
                className="w-full md:w-auto px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:scale-[1.02] transition-transform duration-300"
               onClick={() => navigate("/checkout")}
              >
                Get My Transformation
              </motion.button>

              <p className="text-white/50 text-sm mt-4">
                Secure checkout • Instant access
              </p>
            </div>

            {/* Guarantee */}
            <div className="mt-10 flex items-center gap-4 bg-green-500/10 border border-green-500/20 rounded-xl p-5">
              <ShieldCheck className="text-green-400" size={28} />
              <div>
                <p className="font-semibold text-white">
                  100% Satisfaction Guarantee
                </p>
                <p className="text-white/60 text-sm">
                  If you don’t love your result, we redo it or refund you. No questions asked.
                </p>
              </div>
            </div>

            {/* Scarcity */}
            <p className="text-center text-sm text-white/40 mt-8">
              Limited spots available due to high demand.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}