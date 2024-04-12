import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function HolaMundo () { 

   return (
      <main className="bg-zinc-900 h-screen">
         <div className="container mx-auto p-10">
            <TaskForm />
            <TaskList />
         </div>
      </main>
   )
}

export default HolaMundo

/*
El concepto de pasar un prop de un componente a otro se le conoce como
props drilling
*/
