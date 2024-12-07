import { getEndDate, getStartDate, isSameDay } from '../../../util/chrono.util'

interface Props {
  date: Date
  showActive?: boolean
  className?: string
  onDateSelected: (date: Date) => void
}

export default function CalendarMiniBody({
  date,
  onDateSelected: onDateSelect,
  className = '',
  showActive = true,
}: Props) {
  const today = new Date(new Date().setHours(0, 0, 0, 0))
  const startDate = getStartDate(date)
  const endDate = getEndDate(date)
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
    <div className={`flex-1 grid grid-cols-7 grid-rows-5 ${className}`}>
      {days.map((day) => {
        const isToday = isSameDay(today, day)
        const isCurrentDate = isSameDay(date, day)
        const active =
          'rounded-full bg-red-600 text-white dark:bg-red-500 dark:text-black'

        let styles = ''
        if (showActive) {
          if (isToday && isCurrentDate) {
            styles = active
          } else if (isToday && !isCurrentDate) {
            styles = 'text-red-500 dark:text-red-400'
          } else if (isCurrentDate) {
            styles = active
          }
        }

        if (date.getMonth() !== day.getMonth()) {
          styles += ' text-zinc-600 dark:text-zinc-400'
        }

        return (
          <button
            aria-label={day.toDateString()}
            className={`px-2 py-1 text-center ${styles}`}
            key={day.toISOString()}
            onClick={() => onDateSelect(day)}
          >
            {day.getDate() === 1
              ? firstOfMonthFormatter.format(day)
              : day.getDate()}
          </button>
        )
      })}
    </div>
  )
}
