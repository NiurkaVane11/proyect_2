function FilterButtons({ currentFilter, onFilterChange, taskCounts }) {
  const filters = [
    { key: 'all', label: 'Todas', count: taskCounts.all, emoji: '📋' },
    { key: 'active', label: 'Pendientes', count: taskCounts.active, emoji: '⏳' },
    { key: 'completed', label: 'Completadas', count: taskCounts.completed, emoji: '✅' }
  ]

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-white dark:bg-gray-800 rounded-2xl p-1.5 shadow-lg border border-gray-200 dark:border-gray-700">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              currentFilter === filter.key
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="mr-2">{filter.emoji}</span>
            {filter.label}
            {filter.count > 0 && (
              <span className={`ml-3 px-2.5 py-0.5 rounded-full text-xs font-semibold animate-pulse ${
                currentFilter === filter.key 
                  ? 'bg-white/20 text-white' 
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
              }`}>
                {filter.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterButtons