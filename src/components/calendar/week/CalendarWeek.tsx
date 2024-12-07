import { useCalendar } from '../../../contexts/CalendarContext'

export default function CalendarWeek() {
  const calendar = useCalendar()

  return <div>{calendar.currentView}</div>
}
