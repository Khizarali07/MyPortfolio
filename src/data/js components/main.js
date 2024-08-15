import "../css components/styles.css";
import Waving from "../media/waving.1bae5fcfb51082b5c2b4.png";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=css",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=js",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=react",
    id: 4,
  },
  {
    img: "https://skillicons.dev/icons?i=nodejs",
    id: 5,
  },
  {
    img: "https://skillicons.dev/icons?i=expressjs",
    id: 6,
  },
  {
    img: "https://skillicons.dev/icons?i=mongodb",
    id: 7,
  },
  {
    img: "https://skillicons.dev/icons?i=mysql",
    id: 8,
  },
  {
    img: "https://skillicons.dev/icons?i=cpp",
    id: 9,
  },
  {
    img: "https://skillicons.dev/icons?i=python",
    id: 10,
  },
];

function Main() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>M E R N Stack Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm H. M. Khizar Ali. A passionate MERN Stack Web Developer
                  based in Lahore Pakistan. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/hafiz-m-khizar-ali"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Khizarali07"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/* Tech Stack */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
