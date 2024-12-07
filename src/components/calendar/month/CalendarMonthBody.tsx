import { useState } from 'react'
import { getStartDate, getEndDate, isSameDay } from '../../../util/chrono.util'

export default function CalendarMonthBody() {
  // TODO: Use calendar context to get the current calendar date
  const [date] = useState(new Date(new Date().setHours(0, 0, 0, 0)))
  const [today] = useState(new Date(new Date().setHours(0, 0, 0, 0)))
  const startDate = getStartDate(date)
  const endDate = getEndDate(date)
  const days: Date[] = []
  const firstOfMonthFormatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
  })

  for (let i = new Date(startDate); i <= endDate; i.setDate(i.getDate() + 1)) {
    days.push(new Date(i))
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
            <div className="px-2 py-1 text-center">
              <div
                className={`${
                  isSameDay(today, day) &&
                  'rounded-full bg-zinc-900 text-white dark:bg-zinc-200 dark:text-black'
                } ${
                  today.getMonth() !== day.getMonth() &&
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
