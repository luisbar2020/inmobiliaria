import { Link } from "react-router-dom";

const NavBarComponent = ()  => {
      return(
            <nav>
                  <ul>
                        <li><Link to ="/PropiedadPage">PROPIEDADES</Link></li>
                        <li><Link to ="/TipoPropiedadPage">TIPOS DE PROPIEDAD</Link></li>
                        <li><Link to ="/ReservaPage">RESERVAS</Link></li>
                  </ul>
            </nav>
      );
}
export default NavBarComponent;