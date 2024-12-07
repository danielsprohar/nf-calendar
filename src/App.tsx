import Calendar from './components/calendar/Calendar'
import CalendarMini from './components/calendar/mini/CalendarMini'
import { CalendarProvider } from './contexts/CalendarContext'

function App() {
  return (
    <CalendarProvider>
      <div className="flex h-screen overflow-y-hidden">
        {/* Sidebar */}
        <div className="w-52 h-screen flex flex-col bg-zinc-100 dark:bg-zinc-900">
          <nav className="flex-1">
            <h1 className="text-2xl text-center">Calendar</h1>
          </nav>
          <CalendarMini />
        </div>
        {/* Main */}
        <main className="flex-1 flex flex-col overflow-y-hidden">
          <Calendar />
        </main>
      </div>
    </CalendarProvider>
  )
}

export default App
