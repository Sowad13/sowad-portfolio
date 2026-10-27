import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Page from "../components/Page";
import { projects } from "../data";

const filters = ["All", "Automation", "AI", "Data"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const shown = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <Page>
      <div className="wrap">
        <h1>Things I've built</h1>
        <div className="chips">
          {filters.map((f) => (
            <button key={f} className={`chip ${filter === f ? "on" : ""}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>

        <motion.ul className="grid" layout>
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.li key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                <motion.button className="card" layoutId={p.id} onClick={() => setOpen(p)} whileHover={{ y: -6 }} style={{ borderRadius: 22 }}>
                  <h3>{p.title}</h3>
                  <p>{p.sub}</p>
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </motion.button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="overlay" onClick={() => setOpen(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.article className="sheet" layoutId={open.id} style={{ borderRadius: 26 }} onClick={(e) => e.stopPropagation()}>
              <h2>{open.title}</h2>
              <p><b>{open.sub}</b></p>
              <p>{open.body}</p>
              {open.tools.map((t) => <span className="tag" key={t}>{t}</span>)}
              <div style={{ marginTop: 24 }}><button className="btn" onClick={() => setOpen(null)}>Close</button></div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </Page>
  );
}