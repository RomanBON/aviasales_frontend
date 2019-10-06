export default function getFiltersHash(filters: IFiltersState): string {
  return (
    Object.values(filters.connections).reduce((acc, value) => {
      return acc + String(value);
    }, '') + filters.ticketType.ticketAssessment
  );
}
