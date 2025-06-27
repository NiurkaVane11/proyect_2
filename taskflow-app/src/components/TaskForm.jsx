import { useState } from 'react'
import { Plus, Sparkles } from 'lucide-react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      setIsAnimating(true)
      onAddTask(text.trim())
      setText('')
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3 p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="¿Qué necesitas hacer hoy? ✨"
          className="flex-1 px-4 py-4 bg-transparent focus:outline-none text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 text-lg"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className={`px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 ${
            isAnimating ? 'animate-pulse' : ''
          }`}
        >
          {isAnimating ? (
            <Sparkles className="w-6 h-6 animate-spin" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </button>
      </div>
    </form>
  )
}

export default TaskForm