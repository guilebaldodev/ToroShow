import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
    <>
           <div className="navbar-info-container">
                <div className="navbar-info-duo">
                    <Image src="/layout/ubication-icon.png" alt="" width={18} height={18} />
                    <p>Acapulco #2278 Colli Urbano Zapopan Gro.</p>
                </div>
                <div className="navbar-info-left">
                    <div className="navbar-info-duo">
                        <Image src="/layout/phone-icon.png" alt="" width={18} height={18} />
                        <p>7443112193</p>
                    </div>

                    <div className="navbar-info-duo">
                        <Image src="/layout/email-icon.png" alt="" width={18} height={18} />
                        <p>Ventadetorosmecanicos@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="navbar-container">
                <div className="navbar-title">
                    <Link href="/">
                        <Image src="/layout/bull-icon.png" alt="logo" width={32} height={32}></Image>
                        <h3>TORO SHOW</h3>
                    </Link>
                </div>
                <nav className="navbar-options">
                    <Link href="/catalogo">CATALOGO</Link>
                    <Link href="/empresa">EMPRESA</Link>
                    <Link href="/contacto">CONTACTO</Link>
                </nav>
                <div className="navbar-icons">
                    <Link href="/catalogo">
                        <Image src="/layout/search-icon.png" alt="Buscar" width={24} height={24} />
                    </Link>
                    <Link href="/carrito">
                        <Image src="/layout/cart-icon.png" alt="Carrito" width={24} height={24} />
                    </Link>
                </div>
            </div>


    </> );
}
 
export default Header;