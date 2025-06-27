import { useState, useEffect } from 'react'
import { Moon, Sun, BarChart3 } from 'lucide-react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'
import Statistics from './components/Statistics'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'
  const [darkMode, setDarkMode] = useState(false)
  const [showStats, setShowStats] = useState(false)

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true // 'all'
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <button
                  onClick={() => setShowStats(!showStats)}
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </button>
              </div>
              <div></div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-2 animate-fade-in">
              TaskFlow
            </h1>
            <p className="text-gray-600 dark:text-gray-400 animate-fade-in-delay">
              Organiza tu día con estilo ✨
            </p>
          </div>

          {/* Statistics */}
          {showStats && tasks.length > 0 && (
            <div className="mb-8 animate-slide-down">
              <Statistics tasks={tasks} />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Task Form */}
              <TaskForm onAddTask={addTask} />

              {/* Filter Buttons */}
              <FilterButtons 
                currentFilter={filter} 
                onFilterChange={setFilter}
                taskCounts={{
                  all: tasks.length,
                  active: tasks.filter(t => !t.completed).length,
                  completed: tasks.filter(t => t.completed).length
                }}
              />

              {/* Task List */}
              <TaskList 
                tasks={filteredTasks}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
              />
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              {tasks.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 animate-fade-in">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    📊 Resumen
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{tasks.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Pendientes</span>
                      <span className="font-semibold text-orange-600">{tasks.filter(t => !t.completed).length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Completadas</span>
                      <span className="font-semibold text-green-600">{tasks.filter(t => t.completed).length}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Progreso</span>
                        <span className="font-semibold text-blue-600">
                          {tasks.length > 0 ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) : 0}%
                        </span>
                      </div>
                      <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${tasks.length > 0 ? (tasks.filter(t => t.completed).length / tasks.length) * 100 : 0}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Motivational Quote */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white animate-fade-in-delay">
                <h3 className="font-semibold mb-2">💪 Motivación</h3>
                <p className="text-sm opacity-90">
                  "El éxito es la suma de pequeños esfuerzos repetidos día tras día."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App