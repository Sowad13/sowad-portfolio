import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Page from "../components/Page";
import Magnetic from "../components/Magnetic";
import { profile } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Page>
      <div className="wrap">
        <h1>Let's talk</h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "36ch", marginBottom: 32 }}>
          I'm looking for customer success and account management roles. Send me a message.
        </p>
        <div className="row">
          <Magnetic>
            <button className="btn solid" onClick={copy} style={{ minWidth: 220 }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={copied ? "c" : "e"} style={{ display: "inline-block" }}
                  initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -14, opacity: 0 }} transition={{ duration: 0.15 }}>
                  {copied ? "Email copied" : "Copy my email"}
                </motion.span>
              </AnimatePresence>
            </button>
          </Magnetic>
          <Magnetic><a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></Magnetic>
          <Magnetic><a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></Magnetic>
        </div>
      </div>
    </Page>
  );
}