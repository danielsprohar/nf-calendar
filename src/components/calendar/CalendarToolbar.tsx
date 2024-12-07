import CalendarSearchInput from './CalendarSearchInput'
import CalendarViewButtonGroup from './CalendarViewButtonGroup'

export default function CalendarToolbar() {
  return (
    <div className="flex items-center justify-between">
      <button
        aria-label="Add calendar"
        title="Add calendar"
        className="btn-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <CalendarViewButtonGroup />
      <CalendarSearchInput />
    </div>
  )
}
