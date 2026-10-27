import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const threads = [
  { q: "Is the 500g pack back in stock?", a: "Yes, it's back. Want me to hold 20 cartons for Saturday's delivery?" },
  { q: "My order hasn't arrived yet.", a: "Sorry about that. I've flagged it with the depot and will update you within the hour." },
  { q: "Can I change my delivery address?", a: "Of course. Send me the new address and I'll update it before dispatch." },
];

export default function ChatDemo() {
  const [i, setI] = useState(0);
  const [stage, setStage] = useState(0); // 0 question, 1 typing, 2 answer

  useEffect(() => {
    setStage(0);
    const t1 = setTimeout(() => setStage(1), 900);
    const t2 = setTimeout(() => setStage(2), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [i]);

  const pop = { initial: { opacity: 0, scale: 0.85, y: 12 }, animate: { opacity: 1, scale: 1, y: 0 } };

  return (
    <div className="chat" aria-label="Sample auto-reply conversation">
      <div className="chat-head"><span>Sample customer chat</span><span className="live">● auto-reply on</span></div>
      <motion.div key={`q${i}`} className="bubble them" {...pop}>{threads[i].q}</motion.div>
      {stage === 1 && (
        <motion.div className="bubble bot dots" {...pop}>
          {[0, 1, 2].map((d) => (
            <motion.span key={d} animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.7, delay: d * 0.12 }} />
          ))}
        </motion.div>
      )}
      {stage === 2 && <motion.div key={`a${i}`} className="bubble bot" {...pop}>{threads[i].a}</motion.div>}
      <button onClick={() => setI((i + 1) % threads.length)}>Try another message</button>
    </div>
  );
}