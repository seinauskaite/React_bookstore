function Cart({ showCart, setShowCart, cartView }) {
  if (!showCart) return null;

  return (
    <div className="nice-cart">
      <div className="close" onClick={() => setShowCart(false)}>
        X
      </div>
      {cartView.map((b) => (
        <div className="cart-line" key={b.id}>
          <b>{b.title}</b>
          <b>{b.count}</b>
          <b>{b.count * b.price} eur</b>
          {console.log(cartView)}
        </div>
      ))}
    </div>
  );
}

export default Cart;
