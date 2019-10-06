import React from 'react';

import { TicketTypes } from '../../components';
import TicketsList from '../TicketsList';
import * as actions from '../../hooks/actions';
import * as selectors from '../../hooks/selectors';
import './style.css';

const TicketsGroup: React.FC = () => {
  const filtersAssessment = selectors.useTicketsAssessmentList();
  const onChangeAssessment = actions.useSetTicketsAssessment();

  return (
    <section className={TicketsGroup.displayName}>
      <div className={`${TicketsGroup.displayName}__types`}>
        <TicketTypes
          selectedKind={filtersAssessment}
          onChange={onChangeAssessment}
        />
      </div>
      <div className={`${TicketsGroup.displayName}__list`}>
        <TicketsList />
      </div>
    </section>
  );
};

TicketsGroup.displayName = 'TicketsGroup';

export default TicketsGroup;
