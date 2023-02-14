import ToDoLogo from '../assets/images/todoLogo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={ToDoLogo} alt="ToDo Logo" />
    </div>
  )
}