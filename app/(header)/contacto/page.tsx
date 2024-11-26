import Image from "next/image";
import styles from './page.module.css'

const ContactPage = () => {
    return ( 
        <div className={styles['contact-container']}>
        <div className={styles['contact-banner']}>
          <h3>Contacto</h3>
        </div>
  
        <div className={styles['contact-info']}>
          <form className={styles['contact-form']}>
            <h3 className={styles['contact-subtitle']}>Estamos a tus órdenes</h3>
  
            <div className={styles['contact-buttons']}>
              <button className={styles['green']}>
                <Image src="/layout/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} />
                33 4544 4579
              </button>
              <button className={styles['red']}>
                <Image src="/layout/phone-icon2.png" alt="Teléfono" width={32} height={32} />
                33 4544 4579
              </button>
            </div>
  
            <div className={styles['contact-us']}>
              <p>Cuentanos tus dudas o solicita información personalizada por nuestros diferentes medios de contacto</p>
            </div>
  
            <h3 className={styles['contact-title']}>Formulario de contacto:</h3>
            <div className={styles['contact-form-inputs']}>
              <div className={styles['contact-form-input']}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" />
              </div>
              <div className={styles['contact-form-input']}>
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" id="apellidos" />
              </div>
  
              <div className={styles['contact-form-input']}>
                <label htmlFor="correo">Correo electrónico</label>
                <input type="email" id="correo" />
              </div>
  
              <div className={styles['contact-form-input']}>
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" />
              </div>
  
              <div className={`${styles['contact-form-input']} ${styles['g-100']}`}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje"></textarea>
              </div>
            </div>
  
            <button className={styles['contact-send-button']}>Solicitar informes</button>
          </form>
  
          <div className={styles['contact-ubication']}>
            <Image src="/layout/maps-example.jpg" 
            alt="Ubicación" width={300} height={200} 
            
            style={{width:"100%",height:"auto"}}
            />
            <p>
              <strong>
              Dirección:
              </strong>
              <br />
              Av. 18 de marzo 1584 Col. Las Águilas Zapopan Jalisco, México
              <br />
              <br />
              <strong>
              Correo de contacto:
              </strong>
              <br />
              toroshow@gmail.com
            </p>
          </div>
        </div>
      </div>
     );
}
 
export default ContactPage;