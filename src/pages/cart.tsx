import { useState } from 'react';
import {VscError} from 'react-icons/vsc';
const cartItems=[];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 300;
const discount = 40;
const total = subtotal + tax + shippingCharges;



export const Cart = () => {

  const [couponCode , setCouponCode] = useState<string>("");
  const [isValidCouponCode , setsetIsValidCouponCode] = useState<boolean>(false);

  return (
    <div className="cart">
      <main>
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

{couponCode && isValidCouponCode? (
 <span>₹ {discount} off using <code> {couponCode}</code>
  </span> 
  ):  ( <span>
    INVALID!! <VscError/>
  </span>

)}



        </aside>
      </main>


    </div>
  );
};
export default Cart;