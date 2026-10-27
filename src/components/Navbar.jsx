import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  ["/", "Home"], ["/experience", "Experience"], ["/projects", "Projects"],
  ["/about", "About"], ["/contact", "Contact"],
];

export default function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="logo">Sowad</Link>
      <nav>
        <ul>
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end className={({ isActive }) => `link ${isActive ? "active" : ""}`}>
                {({ isActive }) => (
                  <>
                    {isActive && <motion.span layoutId="pill" className="pill" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                    {label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}