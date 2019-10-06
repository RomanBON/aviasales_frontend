import { useEffect, useRef, Dispatch } from 'react';
import axios from 'axios';

import fetchData from '../utils/fetchData';
import getFiltersHash from '../utils/getFiltersHash';
import * as types from '../hooks/types';

const API_HOST = 'https://front-test.beta.aviasales.ru';
const LIMIT = 3;

export default function useAPI (dispatch: Dispatch<any>, state: IState) {
  const searchId = state.searchId;
  const filtersStateHash = getFiltersHash(state.filters);
  useEffect(() => {
    fetchData(
      async () => {
        const { data } = await axios.get<{ searchId: string }>(
          `${API_HOST}/search`
        );

        return data.searchId;
      },
      dispatch,
      [
        types.SEARCH_ID,
        types.SEARCH_ID__SUCCESS,
        types.SEARCH_ID__FAIL
      ]
    );
  }, [dispatch, filtersStateHash]);

  const storedStopFlag = useRef('');

  let stopFlag = storedStopFlag.current;

  if (state.fetched && !state.stop) {
    stopFlag = storedStopFlag.current + '#';
    storedStopFlag.current = stopFlag;
  }

  useEffect(() => {
    if (!searchId) {
      return;
    }

    fetchData(
      async () => {
        const { data } = await axios.get<IFetchTicketsResult>(
          `${API_HOST}/tickets?searchId=${searchId}`
        );

        return {
          tickets: data.tickets,
          stop: data.stop
        };
      },
      dispatch,
      [
        types.GET_TICKETS,
        types.GET_TICKETS__SUCCESS,
        types.GET_TICKETS__FAIL
      ],
      LIMIT
    );
  }, [stopFlag, filtersStateHash, dispatch, searchId]);
}
