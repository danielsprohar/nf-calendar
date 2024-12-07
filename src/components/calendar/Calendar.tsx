import { useCalendar } from '../../contexts/CalendarContext'
import CalendarHeader from './CalendarHeader'
import CalendarDay from './day/CalendarDay'
import CalendarMonth from './month/CalendarMonth'
import CalendarWeek from './week/CalendarWeek'
import CalendarYear from './year/CalendarYear'

export default function Calendar() {
  function renderCalendarView() {
    const calendar = useCalendar()
    switch (calendar.currentView) {
      case 'day':
        return <CalendarDay />
      case 'week':
        return <CalendarWeek />
      case 'month':
        return <CalendarMonth />
      case 'year':
        return <CalendarYear />
    }
  }

  return (
    <>
      <CalendarHeader />
      {renderCalendarView()}
    </>
  )
}
