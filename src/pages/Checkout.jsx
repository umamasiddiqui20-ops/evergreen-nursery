function Checkout(){

return(

<>

 

<div className="checkout">

<h1>Checkout</h1>

<form>

<input
type="text"
placeholder="Full Name"
/>

<input
type="email"
placeholder="Email Address"
/>

<input
type="tel"
placeholder="Phone Number"
/>

<input
type="text"
placeholder="City"
/>

<input
type="text"
placeholder="Postal Code"
/>

<textarea
placeholder="Complete Delivery Address"
/>

<button>

Confirm Order

</button>

</form>

</div>

 

</>

)

}

export default Checkout;