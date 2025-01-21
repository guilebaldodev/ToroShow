import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    // <>
    //        <div className="navbar-info-container">
    //             <div className="navbar-info-duo">
    //                 <Image src="/layout/ubication-icon.png" alt="" width={18} height={18} />
    //                 <p>Acapulco #2278 Colli Urbano Zapopan Gro.</p>
    //             </div>
    //             <div className="navbar-info-left">
    //                 <div className="navbar-info-duo">
    //                     <Image src="/layout/phone-icon.png" alt="" width={18} height={18} />
    //                     <p>7443112193</p>
    //                 </div>

    //                 <div className="navbar-info-duo">
    //                     <Image src="/layout/email-icon.png" alt="" width={18} height={18} />
    //                     <p>Ventadetorosmecanicos@gmail.com</p>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="navbar-container">
    //             <div className="navbar-title">
    //                 <Link href="/">
    //                     <Image src="/layout/bull-icon.png" alt="logo" width={32} height={32}></Image>
    //                     <h3>TORO SHOW</h3>
    //                 </Link>
    //             </div>
    //             <nav className="navbar-options">
    //                 <Link href="/catalogo">CATALOGO</Link>
    //                 <Link href="/empresa">EMPRESA</Link>
    //                 <Link href="/contacto">CONTACTO</Link>
    //             </nav>
    //             <div className="navbar-icons">
    //                 <Link href="/catalogo">
    //                     <Image src="/layout/search-icon.png" alt="Buscar" width={24} height={24} />
    //                 </Link>
    //                 <Link href="/carrito">
    //                     <Image src="/layout/cart-icon.png" alt="Carrito" width={24} height={24} />
    //                 </Link>
    //             </div>
    //         </div>

    // </>
    <>
      <div className="header">
        <div className="header-title">
          <Image src={"/icon.png"} width={45} height={45} alt="logo"></Image>
          <h3>TOROS MX</h3>
        </div>

        <div className="header-input">
          <input placeholder="Buscar productos..." type="text" />
          <button>
            <Image
              alt="Icono de buscar"
              src={"/home/search-icon.png"}
              width={20}
              height={20}
            ></Image>
          </button>
        </div>

        <div className="header-icons">
          <div className="header-icon">
            <Image
              src={"/layout/user-icon.png"}
              width={32}
              height={32}
              alt="Carrito de compras"
            ></Image>
          </div>
          <div className="header-icon">
            <Image
              src={"/layout/cart.png"}
              width={30}
              height={30}
              alt="Carrito de compras"
            ></Image>
            <div className="cart-number">
              <p>5</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li>Catalogo de productos</li>
          <li>Empresa</li>
          <li>Contacto</li>
        </ul>

        <div className="nav-info">
          <div className="nav-info-item">
            <Image src={"/layout/support.png"} width={32} height={32} alt="Soporte"></Image>
            <div>
                <h4>Soporte 24/7</h4>
                <p>Contactanos</p>
            </div>
          </div>

          <div className="nav-info-item">
            <Image src={"/layout/mexico.png"} width={35} height={35} alt="Soporte"></Image>
            <div>
                <h4>Envios</h4>
                <p>A todo Mèxico</p>
            </div>
          </div>


        </div>
      </nav>
    </>
  );
};

export default Header;
