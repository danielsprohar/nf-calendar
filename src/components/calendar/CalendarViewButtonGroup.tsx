export default function CalendarViewButtonGroup() {
  function changeView() {
    // TODO: Use calendar context to change the view
    console.log('change view')
  }

  return (
    <div className="flex items-center rounded border border-zinc-200 dark:border-zinc-800 divide-x divide-zinc-200 dark:divide-zinc-800">
      <button
        className="px-2 py-1 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800"
        aria-label="Change to day view"
        onClick={changeView}
      >
        Day
      </button>
      <button
        className="px-2 py-1 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800"
        aria-label="Change to week view"
        onClick={changeView}
      >
        Week
      </button>
      <button
        className="px-2 py-1 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800"
        aria-label="Change to month view"
        onClick={changeView}
      >
        Month
      </button>
      <button
        className="px-2 py-1 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-800"
        aria-label="Change to year view"
        onClick={changeView}
      >
        Year
      </button>
    </div>
  )
}
