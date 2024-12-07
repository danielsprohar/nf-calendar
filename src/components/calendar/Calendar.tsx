import { useCalendar } from '../../contexts/CalendarContext'
import CalendarHeader from './CalendarHeader'
import CalendarDay from './day/CalendarDay'
import CalendarMonth from './month/CalendarMonth'

export default function Calendar() {
  function renderCalendarView() {
    const calendar = useCalendar()
    switch (calendar.currentView) {
      case 'day':
        return <CalendarDay />
      case 'week':
        return ''
      case 'month':
        return <CalendarMonth />
      case 'year':
        return ''
    }
  }

  return (
    <>
      <CalendarHeader />
      {renderCalendarView()}
    </>
  )
}
