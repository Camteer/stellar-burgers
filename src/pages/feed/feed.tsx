import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { fetchGetAllOreders, getOrders } from '../../services/slices/feedSlice';
import { useDispatch, useSelector } from '../../services/store';

export const Feed: FC = () => {
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = useSelector(getOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllOreders());
  }, []);

  if (!orders.length) {
    return <Preloader />;
  } else
    return (
      <FeedUI
        orders={orders}
        handleGetFeeds={() => {
          dispatch(fetchGetAllOreders());
        }}
      />
    );
};
