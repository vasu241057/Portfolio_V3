import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "../components/styles/timeline.module.css";
import Timeline from "./timeline";

const WorkExperience: React.FC = () => {
  return (
    <div className={`${styles["main-div"]} main-div`} id="work">
      <section className={`${styles["div-2"]} ${styles.work} div-2 work`}>
        <div
          style={{ textAlign: "center", fontSize: "35px", fontWeight: "bold" }}
        >
          <Fade direction="left" duration={Number("1700")}>
            <h1>Work Experience</h1>
          </Fade>
        </div>
        <Timeline />
      </section>
    </div>
  );
};

export default WorkExperience;
