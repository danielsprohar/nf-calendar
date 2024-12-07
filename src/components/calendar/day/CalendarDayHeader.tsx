import { useCalendar } from '../../../contexts/CalendarContext'

export default function CalendarDayHeader() {
  const calendar = useCalendar()
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  })

  return (
    <div className="px-4 text-xl flex items-center">
      {formatter.format(calendar.currentDate)}
    </div>
  )
}
