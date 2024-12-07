import {
  CalendarActions,
  useCalendar,
  useCalendarDispatch,
} from '../../../contexts/CalendarContext'
import CalendarDaysOfWeek from '../CalendarDaysOfWeek'

export default function CalendarMiniHeader() {
  const calendar = useCalendar()
  const dispatch = useCalendarDispatch()

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  })

  function handlePreviousMonth() {
    console.log('previous month')
    dispatch({ type: CalendarActions.previousMonth })
  }

  function handleNextMonth() {
    console.log('next month')
    dispatch({ type: CalendarActions.nextMonth })
  }

  return (
    <div className="flex flex-col text-xs">
      <div className="px-2 flex items-center justify-between">
        <button
          aria-label="Previous month"
          data-test-id="MiniCalendarPrevMonth"
          onClick={handlePreviousMonth}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div
          className="font-semibold"
          role="heading"
        >
          {dateFormatter.format(calendar.currentDate)}
        </div>
        <button
          aria-label="Next month"
          data-test-id="MiniCalendarNextMonth"
          onClick={handleNextMonth}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <CalendarDaysOfWeek
        weekday="short"
        abbreviated={true}
      />
    </div>
  )
}
