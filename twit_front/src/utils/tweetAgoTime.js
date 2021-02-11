import moment from 'moment';

export const tweetAgoTime = (start, end) => {
  let a = moment(end);
  let b = moment(start);
  let date = b.diff(a, 'minutes');
  if (date >= 60 && date >= 1440) {
    return `${Math.floor(date / 1440)}d ago`;
  } else if (date >= 60) {
    return `${Math.floor(date / 60)}h ago`;
  } else if (date < 1) {
    return 'now';
  } else {
    return `${date}m ago`;
  }
};
