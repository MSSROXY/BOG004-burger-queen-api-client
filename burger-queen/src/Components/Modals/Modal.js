export const Modal = ({children}) => {

return (
    <div>
        <h2>Resumen del pedido</h2>
        {children}
        <h2>¿Confirmar Pedido?</h2>
        <button>SI</button>
        <button>NO</button>

    </div>
)
}



