import React from 'react';

import { FilterConnections } from '../../components';
import * as actions from '../../hooks/actions';
import * as selectors from '../../hooks/selectors';
import './style.css';

const FilterGroup: React.FC = () => {
  const filtersConnections = selectors.useConnectionsList();
  const onChangeFilters = actions.useSetConnectionsFilters();

  return (
    <aside className={FilterGroup.displayName}>
      <FilterConnections
        connections={filtersConnections}
        onChange={onChangeFilters}
      />
    </aside>
  );
};

FilterGroup.displayName = 'FilterGroup';

export default FilterGroup;
