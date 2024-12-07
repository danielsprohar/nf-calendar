import { useCalendar } from '../../../contexts/CalendarContext'

export default function CalendarDay() {
  const calendar = useCalendar()

  return <div>{calendar.currentView}</div>
}
