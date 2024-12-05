import CalendarMonthBody from './CalendarMonthBody'
import CalendarMonthHeader from './CalendarMonthHeader'

export default function CalendarMini() {
  return (
    <div className="flex-1 flex flex-col">
      <CalendarMonthHeader />
      <CalendarMonthBody />
    </div>
  )
}
