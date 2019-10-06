import React, { ChangeEvent } from 'react';
import cx from 'classnames';

import './style.css';

type Props = {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  className?: string;
  isBlock?: boolean;
};

const Checkbox = (props: Props) => {
  const { checked, children, className, isBlock, ...restProps } = props;
  const baseClassName = cx(className, Checkbox.displayName, {
    '_checked': checked,
    '_is-block': isBlock,
  });

  return (
    <label className={baseClassName}>
      <span className={`${Checkbox.displayName}__box`}>
        <input
          type="checkbox"
          checked={checked}
          className={`${Checkbox.displayName}__input`}
          {...restProps}
        />
        <span className={`${Checkbox.displayName}__inner-box`} />
      </span>
      {children && (
        <span className={`${Checkbox.displayName}__text`}>
          {children}
        </span>
      )}
    </label>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
