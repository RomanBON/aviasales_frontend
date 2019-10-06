import React from 'react';
import cx from 'classnames';

import RadioButton, { RadioButtonProps } from '../RadioButton';

interface Props {
  name: string;
  radioOptions: RadioButtonProps[];
  className?: string;
}

const RadioGroup = (props: Props) => {
  const { name, radioOptions, className } = props;

  return (
    <div className={cx(className, RadioGroup.displayName)}>
      {radioOptions.map((radio, index) => (
        <RadioButton
          key={index}
          name={name}
          isGrouped
          {...radio}
        />
      ))}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
