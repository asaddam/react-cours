import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import Stat from './Stat';
import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. length of bookings
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  // num check in nights / all available nights (num days * num cabins)
  const occupation = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights / (numDays * cabinCount),
    0
  );

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100)+'%'}
      />
    </>
  );
}

export default Stats;

