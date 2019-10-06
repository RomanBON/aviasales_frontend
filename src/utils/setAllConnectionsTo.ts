import initialState from '../store/initialState';

export default function setAllConnectionsTo(value: boolean): IConnections {
  const result = initialState.filters.connections;

  return Object.keys(result).reduce(
    (acc, key) => ({ ...acc, [key]: value }),
    { ...result }
  );
}
