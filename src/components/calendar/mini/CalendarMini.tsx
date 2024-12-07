import { useCalendar } from '../../../contexts/CalendarContext'
import CalendarMiniBody from './CalendarMiniBody'
import CalendarMiniHeader from './CalendarMiniHeader'

export default function CalendarMini() {
  const calendar = useCalendar()
  return (
    <div className="flex flex-col">
      <CalendarMiniHeader date={calendar.currentDate} />
      <CalendarMiniBody date={calendar.currentDate} />
    </div>
  )
}
