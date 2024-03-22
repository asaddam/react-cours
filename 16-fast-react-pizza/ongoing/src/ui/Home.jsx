import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

export default function Home() {
  const username = useSelector(state => state.user.username);

  return (
    <div className="my-10 text-center font-semibold sm:my-16">
      <h1 className="mb-8 text-center text-xl">
        The best pizza
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, Straight to you
        </span>
      </h1>

      {username === '' ? <CreateUser /> : <Button type="primary" to="/menu" >Continue ordering, {username}</Button>}
      
    </div>
  );
}
