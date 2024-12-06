import CalendarMiniBody from './CalendarMiniBody'
import CalendarMiniHeader from './CalendarMiniHeader'

export default function CalendarMini() {
  return (
    <div className="flex flex-col">
      <CalendarMiniHeader />
      <CalendarMiniBody />
    </div>
  )
}
