import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending, bookings} = useRecentBookings();
  const { isPending: isPendingStay, stays, confirmedStays} = useRecentStays()

  if(isPending || isPendingStay) return <Spinner />

  console.log(stays)
  return (
    <StyledDashboardLayout>
      <div>layout</div>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
