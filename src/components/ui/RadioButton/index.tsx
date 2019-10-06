import React, { ChangeEvent } from 'react';
import cx from 'classnames';

import './style.css';

export type RadioButtonProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text?: React.ReactNode;
  checked?: boolean;
  name?: string;
  className?: string;
  isGrouped?: boolean;
};

const RadioButton = (props: RadioButtonProps) => {
  const { text, className, checked, isGrouped, ...restProps } = props;
  const baseClassName = cx(className, RadioButton.displayName, {
    '_checked': checked,
    '_is-grouped': isGrouped,
  });

  return (
    <label className={baseClassName}>
      <input
        type="radio"
        checked={checked}
        className={`${RadioButton.displayName}__input`}
        {...restProps}
      />
      {text && (
        <span className={`${RadioButton.displayName}__text`}>
          {text}
        </span>
      )}
    </label>
  );
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
