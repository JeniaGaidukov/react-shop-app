export function GoodsItem(props) {
  const {
    id,
    title,
    price,
    description,
    images,
    addToBasket = Function.prototype,
  } = props;
  return (
    <div className="card">
      {id >= 49 ? null : (
        <>
          <div className="card-image">
            <img src={images[0]} alt={title} />
          </div>

          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <button
              className="btn lighten-2"
              onClick={() => addToBasket({ id, title, price })}
            >
              Buy
            </button>
            <span className="right">
              {price} <b>$</b>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
