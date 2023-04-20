import "./Client.css";
const Client = () => (
  <section className="clientSection">
    <div className="clientDiv">
      <div className="clientTop">
        <span className="horizontalLine"></span>
        <p className="clientTopP">
          “Certe, inquam, pertinax non existimant oportere exquisitis rationibus
          conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem
          faciunt, ut aut.”
        </p>
      </div>
      <div className="clients ">
        <div className="client hide">
          <img src="./images/client1.png" alt="client" />
          <div className="clientName">
            <h3>Lara Madrigal</h3>
            <p>Client</p>
          </div>
        </div>
        <div className="client black">
          <img src="./images/client1.png" alt="client" />
          <div className="clientName">
            <h3>Lara Madrigal</h3>
            <p>Client</p>
          </div>
        </div>
        <div className="client hide">
          <img src="./images/client1.png" alt="client" />
          <div className="clientName">
            <h3>Lara Madrigal</h3>
            <p>Client</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Client;
