export function getStartDate(date: Date) {
  const start = new Date(date)
  start.setDate(1)
  start.setDate(1 - start.getDay())
  return start
}

export function getEndDate(date: Date) {
  const end = new Date(date)
  end.setMonth(end.getMonth() + 1)
  end.setDate(0)
  end.setDate(end.getDate() + (6 - end.getDay()))
  return end
}

export function isSameDay(date: Date, date2: Date) {
  return (
    date.getDate() === date2.getDate() &&
    date.getMonth() === date2.getMonth() &&
    date.getFullYear() === date2.getFullYear()
  )
}
