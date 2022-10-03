import styles from './Input.module.css';

const Input = ({ label, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <div>
        <label>{label}</label>
        <p>{props.value}</p>
      </div>
      <input {...props} />
    </div>
  );
};

export default Input;
