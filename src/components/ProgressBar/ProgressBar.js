import classes from "./styles.module.scss";

const ProgressBar = ({ steps, step, setStep }) => {
  const getWidth = () => {
    if (step === steps - 1) return `100%`;

    const intvl = 100 / (steps - 1);
    const val = Math.ceil(step * intvl + intvl / 2);
    return `${val}%`;
  };

  const clickHandler = (idx) => {
    if (step > idx) {
      setStep(idx);
    }
  };

  return (
    <div className={classes.progressContainer}>
      
      <div className={classes.progressTrack}>
        <div
          className={classes.progressFilled}
          style={{
            width: getWidth()
          }}
        ></div>
        <div className={classes.progressList}>
          {[...Array(steps)].map((_, idx) => (
            <div
              key={idx}
              className={`${classes.progressItem} 
              ${idx <= step ? classes.active : ""}`}
              onClick={() => clickHandler(idx)}
            >
              {idx + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
