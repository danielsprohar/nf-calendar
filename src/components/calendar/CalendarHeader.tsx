import { useCalendar } from '../../contexts/CalendarContext'
import CalendarToolbar from './CalendarToolbar'

export default function CalendarHeader() {
  const dayViewFormatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const yearViewFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  })
  const defaultFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  })

  function renderTitle() {
    const calendar = useCalendar()

    switch (calendar.currentView) {
      case 'day':
        return dayViewFormatter.format(calendar.currentDate)
      case 'year':
        return yearViewFormatter.format(calendar.currentDate)
      default:
        return defaultFormatter.format(calendar.currentDate)
    }
  }

  return (
    <div className="px-4 py-1 flex flex-col gap-y-3">
      <CalendarToolbar />

      <div className="flex items-center justify-between">
        <div
          role="heading"
          className="text-2xl font-bold"
        >
          {renderTitle()}
        </div>

        <div className="flex items-center justify-between gap-x-1">
          <button
            aria-label="Previous date period"
            className="p-1 shadow-md rounded border border-zinc-100 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 hover:dark:bg-zinc-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            aria-label="View today's events"
            className="px-2 py-1 shadow-md rounded border border-zinc-100 dark:border-zinc-800 text-xs hover:bg-zinc-200 hover:dark:bg-zinc-900 dark:bg-zinc-800"
          >
            Today
          </button>
          <button
            aria-label="Next date period"
            className="p-1 shadow-md rounded border border-zinc-100 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 hover:dark:bg-zinc-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
