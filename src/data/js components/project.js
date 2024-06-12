import ProBox from "./probox.js";
import project1 from "../media/project1.png";
import project2 from "../media/project2.png";
import project3 from "../media/project3.png";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Rock Paper Scissor Game"
                img={project1}
                description="Built a web-based Rock Paper Scissors game utilizing HTML, CSS, and JavaScript. This project showcases my front-end development skills, including user interaction handling, implementing game logic, and managing UI updates for an engaging user experience."
                code="https://github.com/Khizarali07/Rock-Paper-Scissor"
                demo="https://khizarali07.github.io/Rock-Paper-Scissor"
              />
              <ProBox
                title="Tic Tac Toe Game"
                img={project2}
                description={
                  `This project showcases my front-end development expertise, crafting a seamless user experience. I implemented game logic, handled user interactions, and designed dynamic interfaces for an enjoyable and engaging gameplay experience.` +
                  ` Two Exciting Modes:
                \bChallenge a Friend.
                \bBeat the AI.`
                }
                code="https://github.com/Khizarali07/Tic-Tac-Toe"
                demo="https://khizarali07.github.io/Tic-Tac-Toe"
              />
              <ProBox
                title="Currency Converter"
                img={project3}
                description="Built a dynamic currency converter using HTML, CSS, and JavaScript. It leverages an API to fetch real-time exchange rates, allowing you to effortlessly convert between various currencies. Simply enter the amount and choose your desired currencies, and the converter instantly displays the converted value. This project showcases my front-end development skills, including user interaction handling, API integration, and crafting an intuitive interface for a seamless user experience."
                code="https://github.com/Khizarali07/Currency-Converter"
                demo="https://khizarali07.github.io/Currency-Converter"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
