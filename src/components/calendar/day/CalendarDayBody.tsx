import { useCalendar } from '../../../contexts/CalendarContext'

export default function CalendarDayBody() {
  const calendar = useCalendar()
  const d = new Date(calendar.currentDate)
  const hourFormatter = new Intl.DateTimeFormat('en-US', {
    hour12: true,
    hour: 'numeric',
  })

  const hours: Date[] = []
  for (let hour = 0; hour < 24; ++hour) {
    hours.push(new Date(d.setHours(hour)))
  }

  return (
    <div className="h-full overflow-y-auto border-t border-zinc-200 dark:border-zinc-800">
      {hours.map((date, index) => (
        <div
          key={index}
          className="h-20 flex"
        >
          <div
            className={`relative w-20 pr-4 flex items-baseline justify-end ${
              index && '-mt-2'
            }`}
          >
            <span className="mr-1 text-sm">
              {hourFormatter.format(date).split(' ')[0]}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              {hourFormatter.format(date).split(' ')[1]}
            </span>
          </div>
          <div
            data-test-id={`${date.getHours()}-HourEvents`}
            aria-label={`Events for ${date.toDateString()} ${date.toTimeString()}`}
            className={`flex-1 flex flex-col ${
              index !== 23 && 'border-b'
            } border-zinc-200 dark:border-zinc-800`}
          ></div>
        </div>
      ))}
    </div>
  )
}
