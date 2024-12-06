import CalendarMonthBody from './CalendarMonthBody'
import CalendarMonthHeader from './CalendarMonthHeader'

export default function CalendarMonth() {
  return (
    <div className="h-full w-full flex-1 flex flex-col">
      <CalendarMonthHeader />
      <CalendarMonthBody />
    </div>
  )
}
