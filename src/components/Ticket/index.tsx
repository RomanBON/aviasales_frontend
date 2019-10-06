import React from 'react';
import cx from 'classnames';

import uniqueId from '../../utils/uniqueId';
import Segment from '../Segment';
import Price from '../Price';
import './style.css';

interface Props {
  ticket: ITicket;
  className?: string;
}

const Ticket = (props: Props) => {
  const { ticket, className } = props;
  const { segments, price, carrier } = ticket;

  return (
    <div className={cx(className, Ticket.displayName)}>
      <div className={cx(`${Ticket.displayName}__row`, '_header')}>
        <div className={`${Ticket.displayName}__price`}>
          <Price amount={price} />
        </div>
        <img
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt={carrier}
          className={`${Ticket.displayName}__logo`}
        />
      </div>
      {segments.map((segment) => (
        <Segment
          key={uniqueId()}
          segment={segment}
          className={`${Ticket.displayName}__row`}
        />
      ))}
    </div>
  );
};

Ticket.displayName = 'Ticket';

export default Ticket;
