import styles from './Button.module.css';
function Button({ children, className = ' ', disabled = false, ...props }) {
  return (
    <button
      {...props}
      className={`${styles.button} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
