import ProBox from "./probox.js";
import project1 from "../media/project1.png";
import project2 from "../media/project2.png";
import project3 from "../media/project3.png";
import project4 from "../media/project4.png";
import project5 from "../media/project5.png";
import project6 from "../media/project6.png";
import "../css components/projectcarousal.css";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active color_ch" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="color_ch" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="color_ch" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="color_ch" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" class="color_ch" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" class="color_ch" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <ProBox
                title="Rock Paper Scissor Game"
                img={project1}
                description="Built a web-based Rock Paper Scissors game utilizing HTML, CSS, and JavaScript. This project showcases my front-end development skills, including user interaction handling, implementing game logic, and managing UI updates for an engaging user experience."
                code="https://github.com/Khizarali07/Rock-Paper-Scissor"
                demo="https://khizarali07.github.io/Rock-Paper-Scissor"
              />
    </div>

    <div class="carousel-item">
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
    </div>

    <div class="carousel-item">
    <ProBox
                title="Currency Converter"
                img={project3}
                description="Built a dynamic currency converter using HTML, CSS, and JavaScript. It leverages an API to fetch real-time exchange rates, allowing you to effortlessly convert between various currencies. Simply enter the amount and choose your desired currencies, and the converter instantly displays the converted value."
                code="https://github.com/Khizarali07/Currency-Converter"
                demo="https://khizarali07.github.io/Currency-Converter"
              />
    </div>

    <div class="carousel-item">
    <ProBox
                title="Calculator"
                img={project4}
                description="This project entails the development of a functional calculator web application using HTML, CSS, and JavaScript. The calculator will perform basic arithmetic operations such as addition, subtraction, multiplication, and division e.t.c."
                code="https://github.com/Khizarali07/Calculator"
                demo="https://khizarali07.github.io/Calculator"
              />
    </div>

    <div class="carousel-item">
    <ProBox
                title="Text-Utils"
                img={project5}
                description="This React-based application provides a suite of text manipulation tools to enhance user productivity. By leveraging the power of React, the Text Utils app offers a dynamic and interactive interface for users to process text efficiently."
                code="https://github.com/Khizarali07/Text-Tools"
                demo="https://khizarali07.github.io/Text-Tools"
              />
    </div>
    <div class="carousel-item">
    <ProBox
                title="Todos"
                img={project6}
                description="This React-based application provides a suite of text manipulation tools to enhance user productivity. By leveraging the power of React, the Text Utils app offers a dynamic and interactive interface for users to process text efficientlyA MERN stack TODO web application is a task management tool built using the MongoDB database, Express.js server, React.js frontend, and Node.js runtime environment. It provides a user-friendly interface for creating, Marking and deleting tasks."
                code="https://github.com/Khizarali07/Todos"
                demo={window.location.origin}
              />
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
   
  </button>
</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
