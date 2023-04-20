import "./Display.css";
const Display = () => {
  return (
    <main className="displayMainSection">
      <div className="displayMainDiv">
        <div className="rightSection">
          <section className="showSection">
            <div className="showdiv">
              <div className="showMainView">
                <img src="images/house1.png" alt="house dispay" />
              </div>
              <div className="showImgs">
                <div className="showImg">
                  <img src="images/house2.png" alt="house " />
                </div>
                <div className="showImg">
                  <img src="images/house3.png" alt="house " />
                </div>
                <div className="showImg">
                  <img src="images/house4.png" alt="house " />
                </div>
                <div className="showImg">
                  <img src="images/house5.png" alt="house " />
                </div>
                <div className="showImg">
                  <img src="images/house6.png" alt="house " />
                </div>
                <div className="showImg">
                  <img src="images/house7.png" alt="house " />
                </div>
                <div className="showImg" style={{ marginLeft: "0" }}>
                  <img src="images/house8.png" alt="house " />
                </div>
              </div>
            </div>
          </section>

          <section className="detailsSection">
            <div className="detailsDiv">
              <div className="details">
                <h3>Details</h3>
              </div>
              <div className="icons">
                <div className="icon">
                  <img src="./images/icon-room.png" alt="number of rooms" /> 4
                </div>
                <div className="icon">
                  <img
                    src="./images/icon-bathroom.png"
                    alt="number of bathrooms"
                  />
                  4
                </div>
                <div className="icon">
                  <img src="./images/icon-rating.png" alt="rating" /> 4
                </div>
                <div className="icon">
                  <img src="./images/icon-house.png" alt="number of houses" /> 4
                </div>
                <div className="icon" style={{ border: "none" }}>
                  <img src="./images/icon-house.png" alt="Year built" />
                  2009
                </div>
              </div>
            </div>
          </section>

          <section className="descSection">
            <div className="descDiv">
              <div className="descTitle">
                <h3>Description</h3>
              </div>
              <div className="desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  odio laboriosam dolorum aut quam commodi earum iste sunt,
                  corrupti nihil! <br />
                  <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  quaerat id tenetur. Nam hic ipsa asperiores exercitationem
                  quia soluta aspernatur fuga corrupti placeat id, tempore porro
                  cumque, officia, ipsum minima!
                  <br />
                  <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                  veniam voluptas autem quasi! Ratione neque ipsam illo
                  perferendis culpa laudantium dolores quam saepe? Voluptas
                  ratione asperiores eos totam amet sunt.
                </p>
              </div>
            </div>
          </section>

          <section className="featuresSection">
            <div className="featuresDiv">
              <div className="featuresHead">
                <h3>Features</h3>
              </div>
              <div className="features">
                <div className="featuresLists">
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                </div>
                <div className="featuresLists">
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                </div>
                <div className="featuresLists">
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="list">
                    <img
                      src="./images/icon-check.png"
                      alt="number of bathrooms"
                    />
                    <p>Air Conditioning</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="leftSection">
          <div className="leftDiv">
            <div className="lClientDiv">
              <img src="images/client1.png" alt="client" />
              <div className="clientNameDiv">
                <h4>Matthew Opoola</h4>
                <button className="profilebtn">View profile</button>
              </div>
            </div>
            <div className="formDiv">
              <form action="#">
                <div className="input">
                  <input
                    type="text"
                    className="ClientName"
                    id="clientName"
                    name="clientName"
                    placeholder="Name"
                  />
                </div>
                <div className="input">
                  <input
                    type="tel"
                    className="ClientTel"
                    id="clientTel"
                    name="clientTel"
                    placeholder="Phone"
                  />
                </div>
                <div className="input">
                  <input
                    type="email"
                    className="ClientEmail"
                    id="clientEmail"
                    name="clientEmail"
                    placeholder="Email"
                  />
                </div>
                <div className="input long">
                  <textarea
                    type="text"
                    className="ClientEmail"
                    id="clientEmail"
                    name="clientEmail"
                    placeholder="Hello, I am interested in...."
                  ></textarea>
                </div>
                <button className="formBtn" type="submit">
                  Learn more <img src="images/arrow.png" alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Display;
