import React from "react";
import { data } from "./work.tsx";
import { Fade } from "react-awesome-reveal";
import { MdWork } from "react-icons/md";
import styles from "./styles/timeline.module.css";

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <Fade direction="left" duration={Number("1700")}>
            <ul className={styles.timeline}>
              {data.map((item) => {
                return (
                  <li className={`${styles["timeline-item"]}`} key={item.id}>
                    <div
                      className={`${styles["timeline-badge"]} flex items-center justify-center`}
                    >
                      <MdWork />
                    </div>
                    <div className={styles["timeline-panel"]}>
                      <div className={styles["timeline-heading"]}>
                        <div
                          className={`${styles["timeline-heading-div"]} flex items-center `}
                        >
                          <h4
                            className={`${styles["timeline-title"]} font-bold`}
                          >
                            {item.company}
                          </h4>
                          <span> | </span>
                          <p
                            style={{
                              fontSize: "17px",
                              opacity: "0.4",
                              textAlign: "justify",
                            }}
                            className="ml-2"
                          >
                            {item.date}
                          </p>
                        </div>
                        <p className={styles.text}>{item.role}</p>
                      </div>
                      <div
                        className={`${styles["timeline-body"]} font-medium text-base`}
                      >
                        <div className={styles["timeline-body"]}>
                          {Object.values(item.text)
                            .filter(Boolean)
                            .map((text, index) => (
                              <p key={index}>• {text}</p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
