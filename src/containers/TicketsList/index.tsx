import React from 'react';

import { Ticket } from '../../components';
import uniqueId from '../../utils/uniqueId';
import * as selectors from '../../hooks/selectors';
import './style.css';

const MAX_NUMBER_SHOWN_TICKETS = 5;

const TicketsList = () => {
  const tickets = selectors.useStoreSelector<IState, ITicket[]>(
    state => state.tickets
  ).slice(0, MAX_NUMBER_SHOWN_TICKETS);

  return (
    <section className={TicketsList.displayName}>
      {tickets.map((ticket) => (
        <Ticket
          key={uniqueId()}
          ticket={ticket}
          className={`${TicketsList.displayName}__item`}
        />
      ))}
    </section>
  );
};

TicketsList.displayName = 'TicketsList';

export default TicketsList;
