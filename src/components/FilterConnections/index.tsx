import React from 'react';

import { Checkbox } from '../../components/ui';
import './style.css';

type FilterConnectionsProps = {
  connections: IConnectionsEntry[];
  onChange: (key: TKeyType, value: boolean) => void;
};

const FilterConnections = ({ connections, onChange }: FilterConnectionsProps) => (
  <div className={FilterConnections.displayName}>
    <div className={`${FilterConnections.displayName}__title`}>
      Количество пересадок
    </div>
    <div className={`${FilterConnections.displayName}__transfers`}>
      {connections.map(({ key, label, value }) => (
        <Checkbox
          key={label}
          checked={value}
          isBlock
          onChange={() => onChange(key as TKeyType, !value)}
        >
          {label}
        </Checkbox>
      ))}
    </div>
  </div>
);

FilterConnections.displayName = 'FilterConnections';

export default FilterConnections;
