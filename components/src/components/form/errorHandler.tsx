export function validateDate(value: Date) {
  let date: Date;
  if (value !== undefined) {
    date = new Date(value);
    const now = new Date();
    return now.getFullYear() - +date.getFullYear() >= 18;
  }
}
