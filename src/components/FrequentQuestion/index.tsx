import { useState } from "react";
import "./FrequentQuestion.scss";
import { Questions } from "./Data";
import Plus from "../../assets/icons/plus.svg";
import Minus from "../../assets/icons/minus.svg";
import { motion } from "framer-motion";

const FrequentQuestion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (i: number) => {
    if (openIndex === i) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
    }
  };
  return (
    <div className="frequent-question-container">
      <div className="mx">
        <div className="frequent-question-wrapper">
          <div className="heading">
            <h1>Frequently asked questions.</h1>
            <div className="border"></div>
          </div>
          <div className="questions">
            {Questions.map((f, i) => (
              <div className="content">
                <div className="question" onClick={() => toggleQuestion(i)}>
                  <h3>{f.question}</h3>
                  <motion.img
                    src={openIndex === i ? Minus : Plus}
                    alt=""
                    width={32}
                    height={32}
                    initial={false}
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                  />
                </div>
                <motion.div
                  className="details"
                  initial={{ height: 0 }}
                  animate={{ height: openIndex === i ? "auto" : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    paddingTop:
                      openIndex === i
                        ? window.innerWidth <= 650
                          ? "16px"
                          : "24px"
                        : "0",
                  }}
                >
                  <img src={f.image} alt="" />
                  <div className="description">
                    {f.description.map((f, i) => (
                      <p key={i}>{f}</p>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestion;
