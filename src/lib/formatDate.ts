export function formatDate(date: string) {
  const newDate = new Date(date);

  const newFormatDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  }).format(newDate);

  return newFormatDate;
}
