import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiMoreVertical, FiDownload } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';

import styles from './IconBtn.module.css';

const ICONS = {
  delete: RiDeleteBin2Line,
  more: FiMoreVertical,
  download: FiDownload,
  menu: HiOutlineMenu,
};

function IconBtn({
  icon,
  title,
  onClick,
  classKey,
  extraClass = '',
  disabled = false,
  type = 'button',
  ...rest
}) {
  const Icon = ICONS[icon];
  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.root} ${
        classKey ? styles[classKey] : ''
      } ${extraClass}`}
      {...rest}
    >
      {<Icon />}
    </button>
  );
}

export default IconBtn;
