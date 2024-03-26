import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQtyById } from './cartSlice';

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const getCurrentQty = useSelector(getCurrentQtyById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQty={getCurrentQty} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
