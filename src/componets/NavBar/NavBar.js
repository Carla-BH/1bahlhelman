import CartWidget from "../CartWidget/CartWidget"

function Navbar() {
    return (
        <nav>
            <h2>Tienda | Cosechando Ando</h2>
            <div>
                <button>Semillas</button>
                <button>Sustratos</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar