"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Feather, X } from "lucide-react";

/**
 * Rasmlar: public/images papkasiga o‘zingizning rasmlaringizni qo‘ying
 * (eski maktub, atirgul, sham, mum muhr uslubida) va shu yerda nomini almashtiring.
 */
const IMG = {
  hero: "/images/letter-1.jpg",
  small: "/images/letter-2.jpg",
  letterBg: "/images/letter-2.jpg",
  final: "/images/letter-1.jpg",
};

const reasons = [
  {
    title: "Sen men uchun qadrlisan",
    text: "Sen men uchun oddiy inson emassan. Hislaring, tabassuming va ko‘ngling men uchun muhim.",
  },
  {
    title: "Gaplarim uchun afsusdaman",
    text: "Aytgan gaplarim seni og‘ritganini tushunyapman. Buni oqlamoqchi emasman — chin dildan afsusdaman.",
  },
  {
    title: "Seni tinglashga tayyorman",
    text: "Ishonchingni qayta qozonish uchun faqat so‘z bilan emas, harakatlarim bilan ham intilmoqchiman.",
  },
];

function Photo({ src, alt = "", className = "" }: { src: string; alt?: string; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <div className={`photo ${className}`}><img src={src} alt={alt} loading="lazy" /></div>;
}

export default function Home() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [petals, setPetals] = useState(false);
  const reduced = useReducedMotion();

  const fade = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7, delay },
        };

  const goLetter = () => {
    setLetterOpen(true);
    document.getElementById("maktub")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  const hug = () => {
    setModalOpen(true);
    setPetals(true);
    window.setTimeout(() => setPetals(false), 3200);
  };

  return (
    <main className="page">
      <div className="wrap">
        <header className="top">
          <a className="logo" href="#bosh">Meni kechir</a>
          <nav className="menu" aria-label="Asosiy navigatsiya">
            <a href="#uzr">Uzrim</a>
            <a href="#xotira">Xotiralar</a>
            <a href="#maktub">Maktub</a>
          </nav>
        </header>

        <section className="hero" id="bosh">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="kicker">Yurakdan yozilgan maktub</div>
            <h1>
              Kechir meni
              <small>— senga aytmoqchi bo‘lgan so‘zlarim bor.</small>
            </h1>
            <p className="lead">
              Aytgan gaplarim seni xafa qilganini tushunyapman. Bu niyatim emas edi,
              lekin og‘ritganim uchun chin dildan afsusdaman.
            </p>
            <div className="actions">
              <button className="btn" onClick={goLetter}><Feather size={15} /> Maktubni o‘qish</button>
              <a className="btn ghost" href="#uzr">Uzrim <ArrowDown size={14} /></a>
            </div>
          </motion.div>

          <motion.div
            className="hero-photos"
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <Photo className="arch" src={IMG.hero} alt="Atirgul va qo‘lyozma maktub" />
            <Photo className="small" src={IMG.small} alt="“My Dearest” maktubi" />
            <div className="tag">My Dearest…</div>
          </motion.div>
        </section>
      </div>

      <section className="sec" id="uzr">
        <div className="wrap">
          <motion.div className="sec-head" {...fade()}>
            <div className="orn">❦</div>
            <h2>Bu uzrim shunchaki <em>so‘z emas</em></h2>
            <p>Seni xafa qilganimni o‘zgartira olmayman. Ammo xatomni tan olib, undan saboq olishim mumkin.</p>
          </motion.div>
          <div className="list">
            {reasons.map((r, i) => (
              <motion.div className="item" key={r.title} {...fade(i * 0.08)}>
                <span className="no">{i + 1}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="xotira" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <motion.div className="sec-head" {...fade()}>
            <div className="kicker" style={{ justifyContent: "center" }}>Kichik eslatmalar</div>
            <h2>Yodingda tut — <em> sen men uchun qadrlisan</em></h2>
          </motion.div>
        </div>
      </section>

      <section className="sec dark" id="maktub" style={{ marginTop: 60 }}>
        <div className="bgphoto"><Photo src={IMG.letterBg} /></div>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <motion.div className="sec-head" {...fade()} style={{ marginBottom: 30 }}>
            <div className="kicker" style={{ justifyContent: "center", color: "#d9b27a" }}>Faqat senga atalgan</div>
            <h2>Yuragimdagi gaplar <em>bor…</em></h2>
            <p>Ba’zi narsalarni yuzma-yuz aytish qiyin. Shuning uchun hislarimni shu maktubga joyladim.</p>
          </motion.div>

          <div className="stage">
            <AnimatePresence mode="wait">
              {!letterOpen ? (
                <motion.button
                  key="closed" className="seal-btn" onClick={() => setLetterOpen(true)}
                  aria-label="Maktubni ochish"
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -10 }}
                >
                  <div className="envelope-card">
                    <div className="to">Senga, azizim…</div>
                    <div className="wax">♥</div>
                    <div className="hint">Muhrni bosib oching</div>
                  </div>
                </motion.button>
              ) : (
                <motion.article
                  key="open" className="paper-letter"
                  initial={reduced ? false : { opacity: 0, y: 26, rotateX: -8 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.55 }}
                >
                  <h3>Azizim…</h3>
                  <p>{`Seni xafa qilgan gaplarim uchun meni kechir.\n\nO‘sha paytda nima deganimdan qat’i nazar, hislaringni og‘ritganimni oqlay olmayman. Sen bunday munosabatga loyiq emassan. Aytgan so‘zlarim haqida o‘yladim va bundan chin dildan afsusdaman.\n\nSeni darrov kechirishga majburlamoqchi emasman. Agar vaqt kerak bo‘lsa, buni tushunaman. Faqat bilishingni istayman: sen men uchun qadrlisan, hislaring men uchun muhim. Men yaxshiroq tinglashni, o‘ylab gapirishni va buni amalda ko‘rsatishni xohlayman.\n\nKo‘nglingni og‘ritganim uchun kechir. Umid qilamanki, bir kun kelib yana tabassumingni ko‘rishga sababchi bo‘la olaman.`}</p>
                  <div className="sign">Samimiyat bilan, seni qadrlaydigan inson</div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
          {letterOpen && (
            <button className="close-link" onClick={() => setLetterOpen(false)}>Maktubni yopish</button>
          )}
        </div>
      </section>

      <section className="final">
        <Photo src={IMG.final} />
        <div className="shade" />
        <motion.div className="inner wrap" {...fade()}>
          <h2>Iltimos, kechir…</h2>
          <p>
            Javob berishga shoshilma. Sening hislaring va qaroringni hurmat qilaman.
            Men faqat chin dildan uzr so‘rayotganimni bilishingni istadim.
          </p>
          <button className="btn light" onClick={hug}>Senga bir quchoq mehr</button>
        </motion.div>
      </section>

      <footer className="foot">Chin yurakdan, senga atalgan</footer>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="modal-bg" role="presentation"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"
              initial={reduced ? false : { opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-x" onClick={() => setModalOpen(false)} aria-label="Yopish"><X size={18} /></button>
              <div className="wax" style={{ width: 60, height: 60, fontSize: 28, margin: "0 auto" }}>♥</div>
              <h2 id="modal-title">Senga mehr va xotirjamlik tilayman</h2>
              <p>Bu tugma seni kechirishga majbur qilmaydi. Shunchaki, ko‘nglingga ozgina iliqlik olib kirsa, men xursand bo‘laman.</p>
              <button className="btn ghost" onClick={() => setModalOpen(false)}>Tushundim</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {petals && !reduced && (
        <div aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 90, overflow: "hidden" }}>
          {Array.from({ length: 26 }, (_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: "-8vh", x: `${(i * 37) % 100}vw`, rotate: 0 }}
              animate={{ opacity: [0, 1, 1, 0], y: "108vh", x: `${((i * 37) % 100) + (i % 2 ? 9 : -9)}vw`, rotate: i % 2 ? 260 : -260 }}
              transition={{ duration: 3 + (i % 5) * 0.35, delay: i * 0.06, ease: "easeIn" }}
              style={{
                position: "absolute", width: 12 + (i % 3) * 5, height: 16 + (i % 3) * 6,
                borderRadius: "80% 0 80% 0", background: i % 3 ? "#8b1e2d" : "#b8323f",
              }}
            />
          ))}
        </div>
      )}
    </main>
  );
}
