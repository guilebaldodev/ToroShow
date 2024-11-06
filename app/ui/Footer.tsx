import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
    <>
      <footer className="footer">
            <div className="footer-info">
                <div className="circle-logotype">
                    <Image src="/layout/bull-icon.png" alt="Logotipo" width={100} height={100}  />
                </div>

                <div className="footer-section">
                    <h3>Toro Show</h3>
                    <ul>
                        <li>
                            <Link href="/productos">Productos</Link>
                        </li>
                        <li>
                            <Link href="/terminos">Términos y condiciones</Link>
                        </li>
                        <li>
                            <Link href="/devoluciones">Política de devoluciones</Link>
                        </li>
                        <li>
                            <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Redes sociales</h3>
                    <ul>
                        <li>
                            <Image src="/layout/facebook-icon.png" alt="Facebook" width={22} height={22} />
                            <Link href="">toroshow</Link>
                        </li>
                        <li>
                            <Image src="/layout/instagram-icon.png" alt="Instagram" width={22} height={22} />
                            <Link href="">toroshowinsta</Link>
                        </li>
                        <li>
                            <Image src="/layout/whatsapp-icon.png" alt="WhatsApp" width={22} height={22} />
                            <Link href="">337874654564</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contáctanos en</h3>
                    <ul>
                        <li>
                            <Image src="/layout/email-icon.png" alt="Email" width={22} height={22} />
                            <Link href="">Ventadetorosmecanicos@gmail.com</Link>
                        </li>
                        <li>
                            <Image src="/layout/phone-icon.png" alt="Teléfono" width={22} height={22} />
                            <Link href="">7443112196</Link>
                        </li>
                        <li>
                            <Image src="/layout/ubication-icon.png" alt="Ubicación" width={22} height={22} />
                            <Link href="">Volcan Fuego #2278 Colli Urbano Zapopan Jal.</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-developer">
                Copyright ToroShow - 2024. Todos los derechos reservados.
            </div>
        </footer>  
    </> );
}
 
export default Footer;