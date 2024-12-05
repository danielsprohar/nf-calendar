import { useState } from 'react'

function getStartDate(date: Date) {
  const start = new Date(date)
  start.setDate(1)
  start.setDate(1 - start.getDay())
  return start
}

function getEndDate(date: Date) {
  const end = new Date(date)
  end.setMonth(end.getMonth() + 1)
  end.setDate(0)
  end.setDate(end.getDate() + (6 - end.getDay()))
  return end
}

export default function CalendarMiniBody() {
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
    <div className="w-full h-full grid grid-cols-7 grid-rows-5">
      {days.map((day) => (
        <div
          key={day.toISOString()}
          className="w-full h-full border border-zinc-100 dark:border-zinc-800"
        >
          {/* Header  */}
          <div className="px-2 py-1 text-center">
            {day.getDate() === 1
              ? firstOfMonthFormatter.format(day)
              : day.getDate()}
          </div>
          {/* Body */}
          <div
            id={day.toISOString()}
            data-test-id={day.toISOString()}
          ></div>
        </div>
      ))}
    </div>
  )
}
