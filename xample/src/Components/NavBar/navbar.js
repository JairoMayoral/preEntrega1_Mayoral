import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/components.css"

const NavBar = () => {
    return (
	<nav>
	     <h3> Venta de Muebles </h3>
	     <div className='components'>
		{/* aca van las categorias clickeables de los productos */}
	     	<button> Sillas </button>
	     	<button> Mesas </button>
	     	<button> Camas </button>
	     </div>
         <CartWidget/>
    </nav>
   )
}

	export default NavBar
