import {
  CalendarActions,
  useCalendar,
  useCalendarDispatch,
} from '../../../contexts/CalendarContext'
import { getEndDate, getStartDate, isSameDay } from '../../../util/chrono.util'

export default function CalendarMiniBody() {
  const calendar = useCalendar()
  const dispatch = useCalendarDispatch()
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

  function handleSelectedDate(date: Date) {
    dispatch({
      type: CalendarActions.selectDate,
      payload: date,
    })
  }

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 text-xs">
      {days.map((day) => {
        const isToday = isSameDay(today, day)
        const isCurrentDate = isSameDay(calendar.currentDate, day)
        const active = 'bg-zinc-900 text-white dark:bg-zinc-200 dark:text-black'

        let styles = ''
        if (isToday && !isCurrentDate) {
          styles = 'text-red-500 dark:text-red-400'
        } else {
          if ((isCurrentDate && isToday) || isCurrentDate) {
            styles = active
          }
        }

        return (
          <button
            aria-label={day.toDateString()}
            className="px-2 py-1 text-center"
            key={day.toISOString()}
            onClick={() => handleSelectedDate(day)}
          >
            <div
              className={`-ml-1 w-6 h-full rounded-full ${styles} ${
                calendar.currentDate.getMonth() !== day.getMonth() &&
                'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {day.getDate() === 1
                ? firstOfMonthFormatter.format(day)
                : day.getDate()}
            </div>
          </button>
        )
      })}
    </div>
  )
}
