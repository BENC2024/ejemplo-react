import TaskCard from './TasksCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext'

// console.log(data)

function TaskList() {

   const { tasks, deleteTask } = useContext(TaskContext)

   if(tasks.length === 0){
      return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aún</h1>
   }

   return (
      <div className="grid grid-cols-4 gap-2">
         {tasks.map((task) => {
            return (
               <TaskCard key={task.id} task={task} />
            )
         })}
      </div>
   );
}

export default TaskList
//Nunca olvidar las claves en el map