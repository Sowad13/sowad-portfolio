import { motion } from "framer-motion";
import Page from "../components/Page";
import { profile, skillGroups } from "../data";

export default function About() {
  return (
    <Page>
      <div className="wrap" style={{ maxWidth: 800 }}>
        <h1>About me</h1>
        <p style={{ fontSize: "1.3rem", marginBottom: 40 }}>{profile.summary}</p>

        <div className="skills">
          {skillGroups.map((g) => (
            <div key={g.name}>
              <h3>{g.name}</h3>
              {g.items.map((s) => (
                <motion.span key={s} className="skill" data-hover whileHover={{ y: -4, rotate: -2, backgroundColor: "#ffd1c7" }}>
                  {s}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        <div className="panel">
          <h3>Education</h3>
          <p>B.Sc. in Computer Science and Engineering, Ahsanullah University of Science and Technology (2018–2022)</p>
          <p>A Levels, Academia (2017)</p>
        </div>
        <div className="panel">
          <h3>Publication</h3>
          <p>“Depression Detection through Smartphone Sensing: A Federated Learning Approach” (2022), International Journal of Interactive Mobile Technologies.</p>
          <p><a href="https://doi.org/10.3991/ijim.v17i01.35131" target="_blank" rel="noreferrer">Read the paper</a></p>
        </div>
        <div className="panel">
          <h3>Achievement</h3>
          <p>Unilever Supply Chain Director's Award, for the PLAN DIISH automation project.</p>
        </div>
      </div>
    </Page>
  );
}