"use client";

import { motion, easeInOut } from "framer-motion";
import { Wand2, Sparkles } from "lucide-react";
import { socialLinks } from "@/constants/social-links";
import { useEffect, useState } from "react";

const floatVariant = {
  float: {
    y: [-8, 8, -8],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

const sparkleVariant = (delay = 1) => ({
  animate: {
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    rotate: 180,
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    delay,
  },
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen section-padding bg-gradient-light overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
            <Wand2 className="w-20 h-20 text-primary-pink mx-auto animate-bounce-gentle mb-8" />
            <h1 className="text-3xl lg:text-5xl font-bold gradient-text leading-tight mb-6">
              Coming Soon
            </h1>
            <p className="text-lg lg:text-xl text-text-gray leading-relaxed font-light max-w-2xl mx-auto">
              Cooking something fun — check back in a bit ✨
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="relative min-h-screen section-padding bg-gradient-light dark:bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary-pink/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ x: [0, -120, 0], y: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-16 w-44 h-44 bg-secondary-teal/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent-blue/10 rounded-full blur-xl"
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b9d' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto min-h-screen flex flex-col justify-center"
        >
          <motion.div
            variants={floatVariant}
            animate="float"
            className="absolute top-1/3 right-1/6 pointer-events-none"
          >
            <Sparkles className="w-6 h-6 text-primary-pink/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
              type: "spring",
              bounce: 0.4,
            }}
            className="mb-10"
          >
            <motion.div
              variants={floatVariant}
              animate="float"
              className="relative"
            >
              <Wand2 className="w-20 h-20 text-primary-pink mx-auto drop-shadow-lg" />
              <motion.div
                {...sparkleVariant(1)}
                className="absolute -top-1 -right-1 w-3 h-3 bg-accent-blue rounded-full"
              />
              <motion.div
                {...sparkleVariant(2)}
                className="absolute -bottom-1 -left-2 w-2.5 h-2.5 bg-secondary-teal rounded-full"
              />
              <motion.div
                {...sparkleVariant(0.5)}
                className="absolute top-1/2 -right-3 w-2 h-2 bg-primary-pink rounded-full"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl lg:text-5xl font-bold gradient-text text-shadow mb-6"
          >
            Lusa.digital is not live — but the system already works.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base lg:text-lg text-text-gray dark:text-gray-300 font-light max-w-xl mx-auto mb-8"
          >
            Tampilkan bisnis Anda lebih meyakinkan & profesional. Sistem ini
            bekerja otomatis dan aktif dalam 24 jam — tanpa ribet, tanpa perlu
            paham teknologi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 glass rounded-full px-6 py-3 border border-pink-100 dark:border-pink-500/20 shadow-soft text-sm text-center">
              <div className="animate-pulse">✨</div>
              <span className="text-text-gray/80 dark:text-gray-400 font-medium">
                Akses publik belum dibuka. <br className="sm:hidden" />
                Versi private sudah bisa Anda pakai hari ini.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-base lg:text-lg font-semibold gradient-text mb-4">
              Ingin jadi salah satu bisnis pertama yang pakai sistem ini?
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 1.8 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-12 h-12 rounded-xl bg-white dark:bg-navy-800 border border-pink-100 dark:border-pink-500/20 shadow-soft hover:shadow-pink dark:hover:shadow-teal transition-all duration-300 flex items-center justify-center text-primary-pink hover:text-white overflow-hidden"
                  aria-label={label}
                  title={label}
                >
                  <motion.div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 rounded-xl" />
                  <Icon className="relative z-10 h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-xs text-text-gray/60 dark:text-gray-500 font-light"
          >
            Bukan sekadar tampilan. Kami bangun sistem reputasi, operasional,
            dan konversi — dalam satu paket otomatis.
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
