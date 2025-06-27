import { TrendingUp, Target, Clock, Award } from 'lucide-react'

function Statistics({ tasks }) {
  const completed = tasks.filter(t => t.completed).length
  const total = tasks.length
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0
  const pending = total - completed

  const stats = [
    {
      icon: Target,
      label: 'Completadas',
      value: completed,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: Clock,
      label: 'Pendientes',
      value: pending,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    },
    {
      icon: TrendingUp,
      label: 'Progreso',
      value: `${completionRate}%`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: Award,
      label: 'Total',
      value: total,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        📊 Estadísticas de Productividad
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-105 animate-fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Progreso general</span>
          <span className="text-sm font-semibold text-gray-800 dark:text-white">{completionRate}%</span>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="text-center">
        {completionRate === 100 ? (
          <div className="text-green-600 dark:text-green-400 font-semibold animate-bounce">
            🎉 ¡Increíble! Has completado todas tus tareas
          </div>
        ) : completionRate >= 75 ? (
          <div className="text-blue-600 dark:text-blue-400 font-semibold">
            💪 ¡Casi terminas! Solo un poco más
          </div>
        ) : completionRate >= 50 ? (
          <div className="text-yellow-600 dark:text-yellow-400 font-semibold">
            ⚡ ¡Vas por buen camino! Sigue así
          </div>
        ) : (
          <div className="text-gray-600 dark:text-gray-400 font-semibold">
            🚀 ¡Comienza tu día productivo!
          </div>
        )}
      </div>
    </div>
  )
}

export default Statistics