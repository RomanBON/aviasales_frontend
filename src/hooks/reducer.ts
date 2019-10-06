import applyFilters from '../utils/applyFilters';
import applySorting from '../utils/applySorting';
import setAllConnectionsTo from '../utils/setAllConnectionsTo';
import {
  SEARCH_ID__SUCCESS,
  GET_TICKETS,
  GET_TICKETS__SUCCESS,
  SET_FILTER_ASSESSMENT,
  SET_FILTER_CONNECTION,
} from './types';

const reducer = (state: IState, action: IAction): IState => {
  const { payload } = action;

  switch (action.type) {
    case SEARCH_ID__SUCCESS:
      return { ...state, searchId: payload };

    case GET_TICKETS:
      return { ...state, stop: false, fetched: false };

    case GET_TICKETS__SUCCESS:
      const filteredTickets = applyFilters(payload.tickets, state.filters);
      const { stop } = payload;

      return {
        ...state,
        fetched: true,
        tickets: applySorting(state.tickets.concat(filteredTickets), state.filters),
        stop
      };

    case SET_FILTER_ASSESSMENT:
      return {
        ...state,
        filters: { ...state.filters, ticketType: { ticketAssessment: payload } }
      };

    case SET_FILTER_CONNECTION:
      const { key, value } = payload;
      const filteredConnections =
        key === 'all'
          ? setAllConnectionsTo(true)
          : key === 'nothing'
            ? setAllConnectionsTo(false)
            : { ...state.filters.connections, [key]: value }
      ;
      const searchId = state.stop ? '' : state.searchId;
      const tickets = [] as ITicket[];

      return {
        ...state,
        tickets,
        searchId,
        filters: { ...state.filters, connections: filteredConnections }
      };

    default:
      break;
  }

  return state;
};

export default reducer;
