import { useCalendar } from '../../../contexts/CalendarContext'

export default function CalendarYear() {
  const calendar = useCalendar()

  return <div>{calendar.currentView}</div>
}
