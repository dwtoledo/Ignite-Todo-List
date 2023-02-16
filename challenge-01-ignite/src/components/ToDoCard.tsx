import { CircleCheckBox } from "./CircleCheckBox"
import { ToDoTask } from "../models/ToDoTask"
import { Trash } from 'phosphor-react'

import styles from './ToDoCard.module.css'

interface ToDoCardProps {
  dataSource: ToDoTask
  onCompleteStatusChange: (toDoTaskId: string) => void
  onDelete: (toDoTaskId: string) => void
}

export function ToDoCard({ dataSource, onCompleteStatusChange, onDelete }: ToDoCardProps) {

  function handleRemoveToDoCard() {
    onDelete(dataSource.id)
  }

  function toogleCheckboxValue() {
    onCompleteStatusChange(dataSource.id)
  }

  return (
    <li
      className={styles.toDoCard}
      key={dataSource.id}
    >

      <CircleCheckBox
        id={dataSource.id}
        isChecked={dataSource.isCompleted}
        onClick={toogleCheckboxValue}
      />

      <p className={
        dataSource.isCompleted ?
          styles.lineThroughText :
          styles.noTextDecoration
      }>
        {dataSource.name}
      </p>

      <div
        className={styles.trashButtonWrapper}
        onClick={handleRemoveToDoCard}
      >
        <Trash size={16} weight="bold" />
      </div>

    </li>
  )
}