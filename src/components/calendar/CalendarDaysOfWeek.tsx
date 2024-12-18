interface CalendarDaysOfWeekProps {
  weekday?: 'short' | 'narrow' | 'long'
  abbreviated?: boolean
}
export default function CalendarDaysOfWeek({
  weekday: weekdayFormat = 'short',
  abbreviated = false,
}: CalendarDaysOfWeekProps) {
  const startDate = new Date()
  startDate.setDate(6 - startDate.getDay())
  const daysOfWeek: Date[] = []

  const dayOfWeekFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: weekdayFormat,
  })

  for (let i = 0; i < 7; i++) {
    daysOfWeek.push(new Date(startDate))
    startDate.setDate(startDate.getDate() + 1)
  }

  return (
    <div className="grid grid-cols-7 grid-rows-1">
      {
        // Days of the week
        daysOfWeek.map((day) => (
          <div
            key={day.getTime()}
            className="px-2 py-1 text-center text-xs text-zinc-600 dark:text-zinc-400"
          >
            {abbreviated
              ? dayOfWeekFormatter.format(day).charAt(0)
              : dayOfWeekFormatter.format(day)}
          </div>
        ))
      }
    </div>
  )
}
