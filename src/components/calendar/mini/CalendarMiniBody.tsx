import { useCalendar } from '../../../contexts/CalendarContext'
import { getEndDate, getStartDate, isSameDay } from '../../../util/chrono.util'

export default function CalendarMiniBody() {
  const calendar = useCalendar()
  const today = new Date(new Date().setHours(0, 0, 0, 0))
  const startDate = getStartDate(calendar.currentDate)
  const endDate = getEndDate(calendar.currentDate)
  const days: Date[] = []

  const firstOfMonthFormatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
  })

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    days.push(new Date(date))
  }

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 text-sm">
      {days.map((day) => (
        <button
          aria-label={day.toDateString()}
          className="px-2 py-1 text-center"
          key={day.toISOString()}
        >
          <div
            className={`${
              isSameDay(today, day)
                ? '-ml-1 w-6 h-full rounded-full bg-zinc-900 text-white dark:bg-zinc-200 dark:text-black'
                : ''
            } ${
              today.getMonth() !== day.getMonth() &&
              'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            {day.getDate() === 1
              ? firstOfMonthFormatter.format(day)
              : day.getDate()}
          </div>
        </button>
      ))}
    </div>
  )
}
