import CalendarHeader from './components/calendar/CalendarHeader'
import CalendarMini from './components/calendar/mini/CalendarMini'
import CalendarMonth from './components/calendar/month/CalendarMonth'

function App() {
  return (
    <div className="h-full overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-52 h-screen flex flex-col bg-zinc-100 dark:bg-zinc-900">
        <nav className="flex-1">
          <h1 className="text-2xl text-center">Calendar</h1>
        </nav>
        <CalendarMini />
      </div>
      {/* Main */}
      <main className="flex-1 flex flex-col">
        <CalendarHeader />
        <CalendarMonth />
      </main>
    </div>
  )
}

export default App
