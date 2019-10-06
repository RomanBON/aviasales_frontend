import { useContext } from 'react';

import StateContext from '../utils/context';
import { ETicketAssessment } from '../constants';

const connectionsListNames: IConnectionsNameEntry[] = [
  { label: 'Все', key: 'all' },
  { label: 'Без пересадок', key: 'nothing' },
  { label: '1 пересадка', key: 'one' },
  { label: '2 пересадки', key: 'two' },
  { label: '3 пересадки', key: 'three' },
];

export function useStoreSelector<StateType, StatePartType>(
  stateSelector: (store: StateType) => StatePartType
): StatePartType {
  const { state } = useContext(StateContext);

  return stateSelector(state as any);
}

export function useConnectionsList(): IConnectionsEntry[] {
  const filtersConnections = useStoreSelector<IState, IConnections>(
    state => state.filters.connections
  );
  const { one, two, three } = filtersConnections;
  const selectedAll = one && two && three;
  const selectedNothing = !(one || two || three);

  return connectionsListNames.map(
    ({ label, key }) => {
      const connection: IConnectionsEntry =
        label === 'Все'
          ? { label, key, value: selectedAll }
          : label === 'Без пересадок'
            ? { label, key, value: selectedNothing }
            : {
              label,
              key,
              value: filtersConnections[key as keyof IConnections]
            }
      ;

      return connection;
    }
  );
}

export function useTicketsAssessmentList() {
  return useStoreSelector<IState, ETicketAssessment>(
    state => state.filters.ticketType.ticketAssessment
  );
}
