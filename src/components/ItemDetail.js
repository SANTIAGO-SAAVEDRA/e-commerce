import { NavLink } from "react-router-dom";

const ItemDetail = ({ item: {title, price, imagenUrl, descr} }) => {
    
    const [count, setCounter] = useState();
    const addItem = eventCount => {

        return (

        <>
            <article className="item">
                <img src={item.imagen} alt="thumbnail" />
                <h3>{item.nombre} - ${item.precio}</h3>
                <p>{item.descr}</p>
            </article>
            {count >=1 (
            <>
                <span>CANTIDAD: {count}</span>
                <NavLink to="/cart">
                    {/* <button>CONFIRMAR LA COMPRA</button> */}
                </NavLink>
            </>
            )} : (
                <ItemCount stock={10} initial={1} onAdd={addItem} className="contador"></ItemCount>
            )
        </>
        );
    }
}

export default ItemDetail;