const stopsKeys = ['', 'one', 'two', 'three'];

export default function applyFilters(
  tickets: ITicket[],
  filters: IFiltersState
): ITicket[] {
  const [selectedAll, selectedNothing]: [boolean, boolean] = Object.values(
    filters.connections
  ).reduce(
    (acc, current: boolean) => {
      const currentSelectedAll = acc[0] && current;
      const currentSelectedNothing = acc[1] && !current;

      return [currentSelectedAll, currentSelectedNothing];
    },
    [false, false]
  );

  return selectedAll
    ? tickets
    : tickets.filter(ticket => ticket.segments.reduce(
      (acc, current) => {
        const stops = current.stops.length;
        if (selectedNothing && !stops) {
          return true;
        }
        const stopKey = stopsKeys[stops] as keyof IConnections;
        const filtersValue = filters.connections[stopKey];

        return acc && filtersValue;
      },
      true as boolean
    ));
}
