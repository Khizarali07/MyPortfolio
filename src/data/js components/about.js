import AboutImg from "../media/about-img.webp";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                MERN Stack Developer <br /> based in Lahore, Pakistan 📍
              </h4>
              <p>
                I'm Khizar Ali, a MERN stack web developer with a keen interest
                in Artificial Intelligence. I've honed my skills in building web
                applications from the ground up using the MERN stack, which
                allows me to leverage JavaScript's power throughout the entire
                development process.
                <br />
                <br />
                My foundational knowledge in AI further expands my toolkit,
                allowing me to explore exciting possibilities like integrating
                intelligent features, machine learning for data analysis, and
                even building AI-powered recommendations. I'm constantly looking
                for ways to incorporate AI into my web development projects to
                create innovative and interactive experiences for users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
