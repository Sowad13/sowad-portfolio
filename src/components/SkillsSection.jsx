import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillTabs, skillDetails } from "../data";

export default function SkillsSection() {
  const area = useRef(null);
  const [tab, setTab] = useState("all");
  const [sel, setSel] = useState(skillDetails[0]);
  const [round, setRound] = useState(0);

  const glow = (e) => {
    const r = area.current.getBoundingClientRect();
    area.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    area.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const groupLabel = skillTabs.find((t) => t.id === sel.g)?.label;

  return (
    <section className="wrap skills-sec">
      <h2>What I work with</h2>
      <p className="skills-hint">Drag the skills around. Tap one to see where I've used it.</p>

      <div className="chips">
        {[{ id: "all", label: "All" }, ...skillTabs].map((t) => (
          <button key={t.id} className={`chip ${tab === t.id ? "on" : ""}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
        <button className="chip" onClick={() => setRound((r) => r + 1)}>Reset board</button>
      </div>

      <div className="skills-layout">
        <div key={round} className="board" ref={area} onMouseMove={glow}>
          {skillDetails.map((s) => {
            const on = tab === "all" || tab === s.g;
            return (
              <motion.button
                key={s.name}
                className="sk"
                data-g={s.g}
                aria-pressed={sel.name === s.name}
                drag
                dragConstraints={area}
                dragElastic={0.25}
                dragMomentum
                animate={{ opacity: on ? 1 : 0.25, scale: on ? 1 : 0.92 }}
                whileHover={{ scale: 1.08 }}
                whileDrag={{ scale: 1.15, zIndex: 5, cursor: "grabbing" }}
                onTap={() => setSel(s)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSel(s);
                  }
                }}
              >
                {s.name}
              </motion.button>
            );
          })}
        </div>

        <aside className="detail" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={sel.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <span className="tag" data-g={sel.g}>{groupLabel}</span>
              <h3>{sel.name}</h3>
              <p>{sel.proof}</p>
            </motion.div>
          </AnimatePresence>
        </aside>
      </div>
    </section>
  );
}