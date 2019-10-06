import React from 'react';

import { RadioGroup } from '../../components/ui';
import { ETicketAssessment } from '../../constants';
import './style.css';

type TicketTypesProps = {
  selectedKind: ETicketAssessment;
  onChange: (selectedType: ETicketAssessment) => void;
};

const TicketTypes = ({ selectedKind, onChange }: TicketTypesProps) => (
  <div className={TicketTypes.displayName}>
    <RadioGroup
      className={`${TicketTypes.displayName}__radio-group`}
      name={'ticket-types'}
      radioOptions={[
        {
          onChange: () => onChange(ETicketAssessment.CHEAPEST),
          checked: selectedKind === ETicketAssessment.CHEAPEST,
          className: `${TicketTypes.displayName}__radio`,
          text: 'Самый дешевый',
        },
        {
          onChange: () => onChange(ETicketAssessment.FASTEST),
          checked: selectedKind === ETicketAssessment.FASTEST,
          className: `${TicketTypes.displayName}__radio`,
          text: 'Самый быстрый',
        },
      ]}
    />
  </div>
);

TicketTypes.displayName = 'TicketTypes';

export default TicketTypes;
