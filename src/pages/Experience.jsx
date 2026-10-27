import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Page from "../components/Page";
import { experience } from "../data";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <Page>
      <div className="wrap">
        <h1>Where I've worked</h1>
        <div className="timeline" ref={ref}>
          <div className="track"><motion.div className="fill" style={{ scaleY }} /></div>
          {experience.map((j) => (
            <motion.article
              className="job"
              key={j.role + j.when}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h3>{j.role}</h3>
              <p className="meta">{j.org} · {j.when}</p>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </Page>
  );
}