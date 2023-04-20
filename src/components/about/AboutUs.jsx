import "./About.css";
const About = () => (
  <section className="topSection" id="about">
    <div className="topSectionImg">
      <img src="./images/contentImg1.png" alt="" />
    </div>
    <div className="topSectionText">
      <span className="horizontalLine"></span>
      <h1 className="topSectionH1">You're in good hands</h1>
      <p className="topSectionP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        quibusdam voluptatibus porro quod ab nemo, corporis molestias, dolorum
        cum inventore sapiente nisi exercitationem sint similique quaerat
        asperiores, quidem facilis laboriosam voluptas. Id assumenda porro
        similique eaque pariatur quos, aperiam eius.
      </p>
      <button className="topSectionBtn">
        <a href="#more">
          Learn more
          <img src="./images/arrow.png" alt="" />
        </a>
      </button>
    </div>
  </section>
);

export default About;
