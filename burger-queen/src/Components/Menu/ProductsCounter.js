import mas from '../../img/mas.png'
import menos from '../../img/menos.png'

export const ProductsCounter = ({qty, clientQty}) => {
    const addProduct = () => {
        clientQty(qty +1)
    }
    const removeProduct =() => {
        if(qty <= 0 ){
            clientQty(qty)
        }
        else clientQty(qty-1)
    }
    
    return(
        <div>
            <button onClick={addProduct}>
                <img src={mas} alt='agregar'></img>
            </button>
            <p>{qty}</p>
            <button onClick={removeProduct}>
                <img src={menos} alt='quitar'></img>
            </button>
        </div>
    )
}