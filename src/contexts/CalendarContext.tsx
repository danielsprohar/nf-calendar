import React, {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useReducer,
} from 'react'

type CalendarView = 'day' | 'week' | 'month' | 'year'

export interface CalendarState {
  currentDate: Date
  currentView: CalendarView
}

export const CalendarActions = Object.freeze({
  setDate: 'set date',
  setCalendarView: 'set calendar view',
  previousDate: 'previous date',
  nextDate: 'next date',
})

interface Action {
  type: string
}

interface CalendarAction extends Action {
  payload?: any
}

const initialState: CalendarState = {
  currentDate: new Date(),
  currentView: 'month',
}
// Context
export const CalendarContext = createContext<CalendarState>(initialState)
export const CalendarDispatchContext =
  createContext<Dispatch<CalendarAction> | null>(null)

// Reducer
export const calendarReducer: Reducer<CalendarState, CalendarAction> = (
  state,
  action
) => {
  switch (action.type) {
    case CalendarActions.setDate:
      return {
        ...state,
        currentDate: action.payload,
      }
    case CalendarActions.setCalendarView:
      return {
        ...state,
        calendarView: action.payload,
      }
    case CalendarActions.previousDate:
      return {
        ...state,
        currentDate: getPreviousDate(state.currentDate, state.currentView),
      }
    case CalendarActions.nextDate:
      return {
        ...state,
        currentDate: getNextDate(state.currentDate, state.currentView),
      }
    default:
      return state
  }
}

function getPreviousDate(currentDate: Date, currentView: CalendarView): Date {
  switch (currentView) {
    case 'day':
      return new Date(currentDate.setDate(currentDate.getDate() - 1))
    case 'week':
      return new Date(currentDate.setDate(currentDate.getDate() - 7))
    case 'month':
      return new Date(currentDate.setMonth(currentDate.getMonth() - 1))
    case 'year':
      return new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))
  }
}

function getNextDate(currentDate: Date, currentView: CalendarView): Date {
  switch (currentView) {
    case 'day':
      return new Date(currentDate.setDate(currentDate.getDate() - 1))
    case 'week':
      return new Date(currentDate.setDate(currentDate.getDate() - 7))
    case 'month':
      return new Date(currentDate.setMonth(currentDate.getMonth() - 1))
    case 'year':
      return new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))
  }
}

export function CalendarProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [calendarState, dispatch] = useReducer(calendarReducer, initialState)

  return (
    <CalendarContext.Provider value={calendarState}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarContext.Provider>
  )
}

export function useCalendar() {
  const context = useContext(CalendarContext)
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider')
  }

  return context
}

export function useCalendarDispatch() {
  const context = useContext(CalendarDispatchContext)
  if (!context) {
    throw new Error(
      'useCalendarDispatch must be used within a CalendarProvider'
    )
  }

  return context
}