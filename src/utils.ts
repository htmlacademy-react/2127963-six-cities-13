import dayjs from 'dayjs';

const DateFormat = {
  YYYYMMMM: 'YYYY MMMM',
};

const humanizeDate = (date: string) => date ? dayjs(date).format(DateFormat.YYYYMMMM) : '';


export { humanizeDate };
