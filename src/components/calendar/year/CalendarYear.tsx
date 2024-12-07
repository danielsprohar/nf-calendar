import { useCalendar } from '../../../contexts/CalendarContext'
import { isSameDay } from '../../../util/chrono.util'
import CalendarDaysOfWeek from '../CalendarDaysOfWeek'
import CalendarMiniBody from '../mini/CalendarMiniBody'

export default function CalendarYear() {
  const calendar = useCalendar()
  const monthFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  })

  const months: Date[] = []
  const date = new Date(calendar.currentDate)
  for (let month = 0; month < 12; ++month) {
    date.setMonth(month)
    months.push(new Date(date))
  }

  function handleDateSelected(date: Date) {
    // TODO: Dispatch action
    console.log(date)
  }

  const now = new Date()

  return (
    <div className="px-4 flex-1 grid grid-cols-3 grid-rows-4 gap-2 lg:gap-4 lg:grid-cols-4 lg:grid-rows-3">
      {months.map((month, index) => (
        <div
          className="h-full space-y-1 flex flex-col"
          key={index}
        >
          <div className="ml-2 font-semibold text-red-700 dark:text-red-400">
            {monthFormatter.format(month)}
          </div>
          <CalendarDaysOfWeek abbreviated={true} />
          <CalendarMiniBody
            className="text-xl"
            date={date}
            onDateSelected={handleDateSelected}
            showActive={isSameDay(now, month)}
          />
        </div>
      ))}
    </div>
  )
}
