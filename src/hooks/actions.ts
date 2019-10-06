import * as types from './types';
import { ETicketAssessment } from '../constants';
import { Dispatch, useContext } from 'react';
import StateContext from '../utils/context';

export function useDispatch(): Dispatch<IAction> {
  const { dispatch } = useContext(StateContext);

  return dispatch;
}

export function useSetConnectionsFilters() {
  const dispatch = useDispatch();

  return function(key: TKeyType, value: boolean): void {
    dispatch({
      type: types.SET_FILTER_CONNECTION,
      payload: {
        key: key === 'all' && !value
          ? 'nothing'
          : key, value
      },
    });
  };
}

export function useSetTicketsAssessment() {
  const dispatch = useDispatch();

  return function(selected: ETicketAssessment): void {
    dispatch({
      type: types.SET_FILTER_ASSESSMENT,
      payload: selected,
    });
  };
}
