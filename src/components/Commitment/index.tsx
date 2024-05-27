import { useState } from "react";
import "./Commitment.scss";
import { CardData } from "./data";
const Commitment = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="commitment-container">
      <div className="mx">
        <div className="commitment-wrapper">
          <div className="heading">
            <h1>Completing your financial blueprint</h1>
            <div className="border"></div>
          </div>
          <div
            className="card-container"
            style={{ alignItems: expandedIndex ? "flex-start" : "stretch" }}
          >
            {CardData.map((f, i) => (
              <div key={i} className="card">
                <img src={f.icon} alt="" />
                <h5>{f.header}</h5>
                <div className="header">
                  <h3>{f.heading}</h3>
                  <div className="border"></div>
                </div>
                <div
                  className={`content ${
                    expandedIndex === i ? "expanded" : "collapsed"
                  }`}
                >
                  {expandedIndex === i ? (
                    f.description.map((s) => <p>{s}</p>)
                  ) : (
                    <p>{f.description.join(" ").slice(0, 200) + "..."}</p>
                  )}
                </div>

                <span
                  onClick={() => toggleReadMore(i)}
                  style={{ cursor: "pointer" }}
                >
                  {expandedIndex === i ? " Read Less" : " Read More"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
