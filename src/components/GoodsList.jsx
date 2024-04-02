import { GoodsItem } from './GoodsItem';

export function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;
  if (!goods.length) {
    return <h4>Nothing here to buy</h4>;
  }
  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
