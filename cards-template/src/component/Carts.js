import { useState, useEffect } from 'react'
import Cart from './Cart'

const API_URL = 'https://dummyjson.com/products'

function Carts() {
    const [ cart , setCarts ] = useState([])
    const [ error, setError ] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(API_URL)
        .then((res)=> res.json())
        .then((carts) =>  setCarts(carts))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false))
        
},[])
console.log(cart.products)
if (error) {
    return <h1>Error: {error}</h1>
}
    return(
        <div>
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (
            cart.products.map((cart) => <Cart key={cart.id} {...cart} />)
            )}
            </div>
    )
        }

export default Carts