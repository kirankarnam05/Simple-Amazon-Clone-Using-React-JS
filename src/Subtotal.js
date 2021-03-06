import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './Reducer';

function Subtotal() {

    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 

            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket.length} items) : <strong>{`total`}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order Contains a Gift
                </small>
                </>
            ) }

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayTrue={"text"}
            thousandSeperator={true}
            prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
