import { Dispatch } from 'react';

const LIMIT = 1;
const DELAY = 500;

export default function fetchData(
  fetchFunction: () => Promise<any>,
  dispatch: Dispatch<IAction>,
  asyncActionsTypes: any[],
  limit = LIMIT,
  delay = DELAY
): Promise<any> {
  const [requestAction, successAction, failAction] = asyncActionsTypes;
  dispatch({ type: requestAction });

  const fetchResult = async() => {
    try {
      const result = await fetchFunction();
      dispatch({ type: successAction, payload: result });

      return result;
    } catch (error) {
      if (limit - 1) {
        setTimeout(
          () =>
            fetchData(fetchFunction, dispatch, asyncActionsTypes, limit - 1),
          delay
        );
      } else {
        dispatch({ type: failAction, payload: error });
      }

      throw error;
    }
  };

  return fetchResult();
}
