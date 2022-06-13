export const OrderProducts = ({order}) => {
    let orderProducts = order.products
    return (
        <div>
            {orderProducts.map(eachProduct => (
                <div key={eachProduct.id}>
                    {eachProduct.qty} x {eachProduct.product.name}
                </div>
            ))}
        </div>
    )
}