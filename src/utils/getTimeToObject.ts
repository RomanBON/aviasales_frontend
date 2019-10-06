export default function getTimeToObject(time: number, isNumeric?: boolean) {
  const date = new Date(time);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  if (isNumeric) {
    return `${date.getHours()}:${minutes}`;
  }

  return `${date.getHours()}ч ${minutes}м`;
}
