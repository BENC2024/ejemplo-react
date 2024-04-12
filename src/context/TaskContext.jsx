import { createContext, useState, useEffect } from "react"
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext() //Esta es un funcion que retorna un onj
//Almacena los datos
//El provider es el elemento que engloba al resto de componentes

export function TaskContextProvider(props){
	let x = 20

	const [tasks, setTasks] = useState([])

	useEffect(() => {
      setTasks(data)
	}, [])


	function createTask(task) {
      //setTasks([...tasks,task]) los tres puntos es para copiar los elementos y llevarlos a un nuevo arreglo
      setTasks([...tasks,{
         title: task.title,
         id: tasks.length,
         description: task.description
      }])
   	}

   	function deleteTask(taskId){
      setTasks( tasks.filter(task => task.id !== taskId) )
      //filter devuelve el valor basado en la condicion especificada
      // console.log(tasks)
      // console.log(taskId)
   	}

	return (
		<>
			<TaskContext.Provider value={{
				tasks,
				deleteTask,
				createTask: createTask
			}}>
				{/* <h1>Provider</h1> */}
				{props.children}
			</TaskContext.Provider>
		</>
	)
	//Devuelve en este caso el valor
}

/*
	La propiedad children permite mostrar elemento dentro
	de un componente mas grande
*/