import React from 'react';

import { TicketsGroup, FilterGroup } from '../../containers';
import './style.css';

const TicketsPage: React.FC = () => (
  <main className={TicketsPage.displayName}>
    <FilterGroup />
    <TicketsGroup />
  </main>
);

TicketsPage.displayName = 'TicketsPage';

export default TicketsPage;
