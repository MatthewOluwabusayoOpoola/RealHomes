import "./More.css";
const More = () => (
  <section className="bottomSection" id="more">
    <div className="bottomSectionText">
      <span className="horizontalLine"></span>
      <h1 className="bottomSectionH1">You're in good hands</h1>
      <p className="bottomSectionP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        quibusdam voluptatibus porro quod ab nemo, corporis molestias, dolorum
        cum inventore sapiente nisi exercitationem sint similique quaerat
        asperiores, quidem facilis laboriosam voluptas. Id assumenda porro
        similique eaque pariatur quos, aperiam eius.
      </p>
      <button className="bottomSectionBtn">
        Learn more
        <img src="./images/arrow.png" alt="" />
      </button>
    </div>
    <div className="bottomSectionImg">
      <img src="./images/contentImg2.png" alt="" />
    </div>
  </section>
);
export default More;
