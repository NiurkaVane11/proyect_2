import { Trash2, CheckCircle, Circle } from 'lucide-react'

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4 animate-pulse">📝</div>
        <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-2">No hay tareas</h3>
        <p className="text-gray-500 dark:text-gray-500">¡Agrega tu primera tarea arriba!</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className={`flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md animate-slide-in ${
            task.completed ? 'opacity-75' : ''
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <button
            onClick={() => onToggleTask(task.id)}
            className="flex-shrink-0 transition-all duration-200 hover:scale-110"
          >
            {task.completed ? (
              <CheckCircle className="w-6 h-6 text-green-500 animate-bounce-once" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400 hover:text-blue-500" />
            )}
          </button>
          
          <span
            className={`flex-1 transition-all duration-300 ${
              task.completed 
                ? 'line-through text-gray-500 dark:text-gray-400' 
                : 'text-gray-800 dark:text-gray-200'
            }`}
          >
            {task.text}
          </span>
          
          <button
            onClick={() => onDeleteTask(task.id)}
            className="flex-shrink-0 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 hover:scale-110"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default TaskList