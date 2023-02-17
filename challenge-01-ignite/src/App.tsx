import { EmptyToDoList } from './components/EmptyToDoList'
import { Header } from './components/Header'
import { ToDoCard } from './components/ToDoCard'
import { ToDoForm } from './components/ToDoForm'
import { ToDoTask } from './models/ToDoTask'
import { useState } from 'react'

import './reset.css'
import './global.css'
import styles from './App.module.css'
import { ToDoCounter } from './components/ToDoCounter'

export function App() {

  const [toDoList, setToDoList] = useState([] as Array<ToDoTask>)

  function addNewToDoTaskIntoToDoList(newToDoTask: ToDoTask) {
    const toDoListWithTheNewOne = toDoList.concat(newToDoTask)
    setToDoList(toDoListWithTheNewOne)
  }

  function removeToDoTaskFromToDoList(toDoTaskId: string) {
    const toDoListWithoutTheRemovedOne = toDoList.filter((toDoTask) => {
      return toDoTask.id !== toDoTaskId
    })
    setToDoList(toDoListWithoutTheRemovedOne)
  }

  function countCompletedToDoTasksIntoToDoList(): number {
    return toDoList.filter((toDoTask) => {
      return toDoTask.isCompleted === true;
    }).length
  }

  function toogleToDoTaskCompleteStatus(toDoTaskId: string) {
    const updatedToDoList = toDoList.map((toDoTask) => {
      if (toDoTask.id === toDoTaskId) {
        toDoTask.isCompleted = !toDoTask.isCompleted
      }
      return toDoTask
    })
    setToDoList(updatedToDoList)
  }

  return (
    <div>
      <Header />
      <div className={styles.mainContent}>

        <ToDoForm onAddNewToDoTask={addNewToDoTaskIntoToDoList} />

        <ToDoCounter
          totalItems={toDoList.length}
          completedItems={countCompletedToDoTasksIntoToDoList()}
        />

        {toDoList.length ?
        
          <ul className={styles.toDoList}>
            {
              toDoList.map((toDoTask) => {
                return (
                  <ToDoCard
                    key={toDoTask.id}
                    dataSource={toDoTask}
                    onCompleteStatusChange={toogleToDoTaskCompleteStatus}
                    onDelete={removeToDoTaskFromToDoList}
                  />
                )
              })
            }
          </ul>

          : <EmptyToDoList />
        }

      </div>
    </div>
  )
}
