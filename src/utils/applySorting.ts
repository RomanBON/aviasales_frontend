import { ETicketAssessment } from '../constants';

export default function applySorting(tickets: ITicket[], filters: IFiltersState): ITicket[] {
  const sortFunction =
    filters.ticketType.ticketAssessment === ETicketAssessment.CHEAPEST
      ? (a: ITicket, b: ITicket) => a.price - b.price
      : (a: ITicket, b: ITicket) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
  ;

  return tickets.sort(sortFunction);
}
