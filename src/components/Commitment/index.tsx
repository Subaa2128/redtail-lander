import "./Commitment.scss";
import { CardData } from "./data";
const Commitment = () => {
  return (
    <div className="commitment-container">
      <div className="mx">
        <div className="commitment-wrapper">
          <div className="heading">
            <h1>Completing your financial blueprint</h1>
            <div className="border"></div>
          </div>
          <div className="card-container">
            {CardData.map((f, i) => (
              <div key={i} className="card">
                <img src={f.icon} alt="" />
                <h3>{f.heading}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
