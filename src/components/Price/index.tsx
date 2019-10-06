import React from 'react';
import cx from 'classnames';

import currencyFormat from '../../utils/currencyFormat';
import './style.css';

interface Props {
  amount: number;
  currency?: 'rub';
}

const Price = (props: Props) => {
  const { amount, currency = 'rub' } = props;

  return (
    <span className={cx(Price.displayName, `_${currency}`)}>
      {currencyFormat(amount)}
    </span>
  );
};

Price.displayName = 'Price';

export default Price;
