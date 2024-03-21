import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

export default function NotFound() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something when wrong 😢</h1>
      <p>{error.message || error.data}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}
