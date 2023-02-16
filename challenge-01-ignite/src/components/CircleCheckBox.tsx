import styles from './CircleCheckBox.module.css'

interface CircleCheckBoxProps {
  id: string
  isChecked: boolean
  onClick: () => void
}

export function CircleCheckBox({ id, isChecked, onClick }: CircleCheckBoxProps) {

  function handleCheckBoxClick() {
    onClick()
  }

  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input
          type="checkbox"
          checked={isChecked}
          id={id}
          onChange={handleCheckBoxClick}
        />
        <label htmlFor={id}></label>
      </div>
    </div>
  )
}