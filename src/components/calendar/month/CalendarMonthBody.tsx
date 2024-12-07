import { useCalendar } from '../../../contexts/CalendarContext'
import { getEndDate, getStartDate, isSameDay } from '../../../util/chrono.util'

export default function CalendarMonthBody() {
  const calendar = useCalendar()
  const today = new Date(new Date().setHours(0, 0, 0, 0))
  const startDate = getStartDate(calendar.currentDate)
  const endDate = getEndDate(calendar.currentDate)
  const days: Date[] = []
  const firstOfMonthFormatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
  })

  for (
    let currentDate = new Date(startDate);
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    days.push(new Date(currentDate))
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 grid grid-cols-7 grid-rows-5">
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className="w-full h-full border-[0.5px] border-zinc-100 dark:border-zinc-800"
          >
            {/* Header  */}
            <div className="px-2 py-1 text-center text-sm">
              <div
                className={`${
                  isSameDay(today, day) &&
                  'rounded-full bg-zinc-900 text-white dark:bg-zinc-200 dark:text-black'
                } ${
                  calendar.currentDate.getMonth() !== day.getMonth() &&
                  'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {day.getDate() === 1
                  ? firstOfMonthFormatter.format(day)
                  : day.getDate()}
              </div>
            </div>
            {/* Body */}
            <div
              id={day.toISOString()}
              data-test-id={day.toISOString()}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
