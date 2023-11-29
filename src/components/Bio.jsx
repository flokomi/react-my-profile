import styles from "./Bio.module.css";

function Bio() {
  return (
    <div className={`${styles.bio} container`}>
      <img src="../../public/titel_kleiner_weiß.jpg" alt="profile foto" />
      <p>
        After studying cultural and theater sciences at the University of
        Leipzig, I worked in the Berlin film industry and became a production
        manager. 2023 I am rethinking my career and follow my passion of
        programming. End of March I graduated as
        <strong> Full Stack Web Developer</strong> from the Le Wagon Bootcamp.
        Today I am strengthen my skills continously with coding challenges,
        online courses and own projects.
      </p>
    </div>
  );
}

export default Bio;
