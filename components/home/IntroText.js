import styles from './introtext.module.css'
function IntroText() {
  return (
    <div className = {styles.introtext}>
      <h1>
        LOHIT
        <br />
        KAMATHAM
      </h1>
      <p>
        University of Michigan, Ann Arbor
        <br />
        Computer Science | Economics
      </p>
    </div>
  );
}

export default IntroText;
