import styles from './IconButton.module.css';
function IconButton({ icon, className = ' ', disabled = false, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={`${styles.btnIcon} ${className}`}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
export default IconButton;
