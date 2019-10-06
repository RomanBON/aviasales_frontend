import React from 'react';
import cx from 'classnames';

import getTimeToObject from '../../utils/getTimeToObject';
import getWordWithRightEnding from '../../utils/getWordWithRightEnding';
import './style.css';

interface Props {
  segment: ISegment;
  className?: string;
}

const Segment = (props: Props) => {
  const { segment, className } = props;
  const { origin, destination, date, stops, duration } = segment;

  const departureTime = new Date(date).getTime();
  const arrivalTime = departureTime + duration * 60 * 1000;
  const routePath = `${origin} – ${destination}`;
  const routeTime =
    `${getTimeToObject(departureTime, true)} – ${getTimeToObject(arrivalTime, true)}`;
  const stopsText = `${stops.length} ${getWordWithRightEnding(stops.length,
    [
        'пересадка',
        'пересадки',
        'пересадок',
      ]
    )}`
  ;

  return (
    <div className={cx(className, Segment.displayName)}>
      <div className={`${Segment.displayName}__column`}>
        <div className={`${Segment.displayName}__column-header`}>
          {routePath}
        </div>
        <div className={`${Segment.displayName}__column-body`}>
          {routeTime}
        </div>
      </div>
      <div className={`${Segment.displayName}__column`}>
        <div className={`${Segment.displayName}__column-header`}>
          В пути
        </div>
        <div className={`${Segment.displayName}__column-body`}>
          {`${getTimeToObject(duration * 60000)}`}
        </div>
      </div>
      <div className={`${Segment.displayName}__column`}>
        <div className={`${Segment.displayName}__column-header`}>
          {stopsText}
        </div>
        <div className={`${Segment.displayName}__column-body`}>
          {`${stops.join(', ')}`}
        </div>
      </div>
    </div>
  );
};

Segment.displayName = 'Segment';

export default Segment;
