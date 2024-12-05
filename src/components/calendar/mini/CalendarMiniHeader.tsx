import CalendarDaysOfWeek from '../CalendarDaysOfWeek'

interface CalendarMiniHeaderProps {
  date?: Date
}

export default function CalendarMiniHeader({
  date = new Date(),
}: CalendarMiniHeaderProps) {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div
          className="font-semibold"
          role="heading"
        >
          {dateFormatter.format(date)}
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
