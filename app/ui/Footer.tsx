import Image from "next/image";
import Link from "next/link";
import config from "@/config/config.json";




const Footer = () => {
    return ( 
    <>
      <footer className="footer">
            <div className="footer-info">
                <div className="circle-logotype">
                    <Image src="/layout/white-bull.png" alt="Logotipo" width={100} height={100}  />
                </div>

                <div className="footer-section">
                    <h3>Toros Mx</h3>
                    <ul>
                        <li>
                            <Link href="/catalogo">Catologo</Link>
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
                            <Link href="">torosmx</Link>
                        </li>
                        <li>
                            <Image src="/layout/instagram-icon.png" alt="Instagram" width={22} height={22} />
                            <Link href="">torosmxinsta</Link>
                        </li>
                        <li>
                            <Image src="/layout/whatsapp-icon.png" alt="WhatsApp" width={22} height={22} />
                            <Link href="">{config.contactPhone}</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contáctanos en</h3>
                    <ul>
                        <li>
                            <Image src="/layout/email-icon.png" alt="Email" width={22} height={22} />
                            <p>torosmx@gmail.com</p>
                        </li>
                        <li>
                            <Image src="/layout/phone-icon.png" alt="Teléfono" width={22} height={22} />
                            <p>{config.contactPhone}</p>
                        </li>
                        <li>
                            <Image src="/layout/ubication-icon.png" alt="Ubicación" width={22} height={22} />
                            <p>
                            Mexico.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-developer">
                
                <p>
                    Copyright TorosMx - 2024. Todos los derechos reservados.
                </p>
            
                <p>Contacta al programador: 74431121923</p>
            </div>
        </footer>  
    </> );
}
 
export default Footer;