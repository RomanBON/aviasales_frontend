import { ETicketAssessment } from '../constants';

declare global {
  interface ISegment {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
  }

  interface ITicket {
    price: number;
    carrier: string;
    segments: ISegment[];
  }

  interface IAction {
    type: string;
    payload?: any;
  }

  interface IState {
    stop: boolean;
    searchId: string;
    filters: IFiltersState;
    tickets: ITicket[];
    fetched: boolean;
  }

  interface IConnections {
    one: boolean;
    two: boolean;
    three: boolean;
  }

  interface IConnectionsEntry {
    label: string;
    key: string;
    value: boolean;
  }

  export type TKeyType = keyof IConnections | 'all' | 'nothing';

  interface IConnectionsNameEntry {
    label: string;
    key: TKeyType;
  }

  interface ITicketTypes {
    ticketAssessment: ETicketAssessment;
  }

  interface IFiltersState {
    connections: IConnections;
    ticketType: ITicketTypes;
  }

  interface IFetchTicketsResult {
    tickets: ITicket[];
    stop: boolean;
  }
}
