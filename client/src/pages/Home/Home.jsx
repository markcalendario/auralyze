import { LinkButton } from "@/components/Buttons/Buttons.jsx";
import Navbar from "@/components/Navbar/Navbar.jsx";
import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Home.module.scss";

export default function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.texts}>
            <h1>From Audio to Insight</h1>
            <p>Turn spoken audio into smart, concise summaries using AI.</p>
          </div>
          <LinkButton to="/start">
            Summarize Audio
            <FaArrowRight />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
