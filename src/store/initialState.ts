import { ETicketAssessment } from '../constants';

const initialState: IState = {
  stop: false,
  fetched: false,
  searchId: '',
  filters: {
    connections: {
      one: true,
      two: false,
      three: false,
    },
    ticketType: {
      ticketAssessment: ETicketAssessment.CHEAPEST,
    },
  },
  tickets: [],
};

export default initialState;
