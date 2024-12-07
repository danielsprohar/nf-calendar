import {
  CalendarActions,
  CalendarView,
  useCalendar,
  useCalendarDispatch,
} from '../../contexts/CalendarContext'

export default function CalendarViewButtonGroup() {
  const calendar = useCalendar()
  const calendarDispatch = useCalendarDispatch()

  function changeView(view: CalendarView) {
    calendarDispatch({
      type: CalendarActions.setCalendarView,
      payload: view,
    })
  }

  return (
    <div className="flex items-center rounded border border-zinc-200 dark:border-zinc-600 divide-x divide-zinc-200 dark:divide-zinc-600">
      <button
        className={`px-2 py-1 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
          calendar.currentView === 'day' ? 'bg-zinc-200 dark:bg-zinc-800' : ''
        }`}
        aria-label="Change to day view"
        onClick={() => changeView('day')}
      >
        Day
      </button>
      <button
        className={`px-2 py-1 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
          calendar.currentView === 'week' ? 'bg-zinc-200 dark:bg-zinc-800' : ''
        }`}
        aria-label="Change to week view"
        onClick={() => changeView('week')}
      >
        Week
      </button>
      <button
        className={`px-2 py-1 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
          calendar.currentView === 'month' ? 'bg-zinc-200 dark:bg-zinc-800' : ''
        }`}
        aria-label="Change to month view"
        onClick={() => changeView('month')}
      >
        Month
      </button>
      <button
        className={`px-2 py-1 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
          calendar.currentView === 'year' ? 'bg-zinc-200 dark:bg-zinc-800' : ''
        }`}
        aria-label="Change to year view"
        onClick={() => changeView('year')}
      >
        Year
      </button>
    </div>
  )
}
