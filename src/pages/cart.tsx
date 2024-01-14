import { useEffect, useState } from 'react';
import {VscError} from 'react-icons/vsc';
import CartItem from '../components/cart-item';
import {Link} from 'react-router-dom';
const cartItems = [
   {
    productId: "abcdef",
    photo : "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg",
    name: "macbook",
    price :5678,
    stock: 100,
    quantity: 4,
   },

]
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 300;
const discount = 40;
const total = subtotal + tax + shippingCharges;



export const Cart = () => {

  const [couponCode , setCouponCode] = useState<string>("");
  const [isValidCouponCode , setsetIsValidCouponCode] = useState<boolean>(false);


useEffect(() => {

 const timeOutId = setTimeout(() => {
   if(Math.random() > 0.5) setsetIsValidCouponCode(true);
   else setsetIsValidCouponCode(false);
     
  }, 1000);


  return () => {
    clearTimeout(timeOutId);
    setsetIsValidCouponCode(false);
    };
  } , [couponCode]);

  return (
    <div className="cart">
      <main>

      {cartItems.length > 0 ? cartItems.map((i, idx)=> (
        <CartItem key= {idx} cartItem={i}/>
        )) : <h1>No Items Added</h1>}

        </main>
        <aside>
           <p>Subtotal : ₹ {subtotal}</p>
           <p>Shipping Chargess : ₹ {shippingCharges}</p>
           <p>TAX : ₹ {tax}</p>
           <p>

Discount : <em> ₹ {discount} </em>

           </p>
           <p>
<b>Total : ₹ {total}</b>
           </p>

           <input type = "text" 
           placeholder= "Coupon Code"
           value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)} 
            />

{couponCode && (isValidCouponCode? (
 <span className="green">
  ₹ {discount} off using <code> {couponCode}</code>
  </span> 
  ):  ( 
  <span className="red">
    INVALID!! <VscError/>
  </span>

) )}

{
  cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
}

        </aside>
     


    </div>
  );
};
export default Cart;