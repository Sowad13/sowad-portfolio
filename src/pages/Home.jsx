import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import ChatDemo from "../components/ChatDemo";
import Magnetic from "../components/Magnetic";
import CountUp from "../components/CountUp";
import { stats, skillsMarquee } from "../data";
import SkillsSection from "../components/SkillsSection";

const word = "Hi, I'm Sowad.";

export default function Home() {
  const half = Math.ceil(skillsMarquee.length / 2);
const rows = [skillsMarquee.slice(0, half), skillsMarquee.slice(half)];
  return (
    <Page className="">
      <section className="wrap hero">
        <div>
          <motion.h1
            className="hero-title"
            aria-label={word}
            initial="hide"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.7 } } }}
          >
            {[...word].map((c, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                style={{ display: "inline-block" }}
                variants={{
                  hide: { y: 60, opacity: 0, rotate: 8 },
                  show: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 14, stiffness: 140 } },
                }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </motion.h1>
          <p>Customer success, data and AI automation, from Dhaka.</p>
          <div className="row">
            <Magnetic><Link to="/projects" className="btn solid">See my projects</Link></Magnetic>
            <Magnetic><a href="/cv.pdf" className="btn" download>Download CV</a></Magnetic>
          </div>
        </div>
        <ChatDemo />
      </section>

      {/* <div className="skill-strip" aria-hidden="true">
  {rows.map((row, r) => (
    <div className={`strip-row ${r === 1 ? "rev" : ""}`} key={r}>
      {[...row, ...row, ...row, ...row].map((s, i) => (
        <span className="strip-chip" key={i}>{s}</span>
      ))}
    </div>
  ))}
</div> */}

    <SkillsSection />

      <section className="wrap stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <b><CountUp to={s.to} suffix={s.suffix} /></b>
            {s.label}
          </div>
        ))}
      </section>
    </Page>
  );
}