import Image from 'next/image'
import styles from './product.module.css'

const ProductDetailPage = () => {
 
  return (
    <>

      <div className={styles['product-detail-container']}>
        <div className={styles['product-detail']}>
          <div className={styles['product-detail-img']}>
            <Image
              src="/products/bulls/product-1.webp"
              alt="Imagen del producto"
              width={300}
              height={300}
              style={{width:"100%",borderRadius:"5px",maxWidth:"500px",height:"auto"}}
            />
          </div>

          <div className={styles['product-detail-info']}>
            <h2>Toro Mecanico Deluxe</h2>

            <div className={styles['product-prices-info']}>
              <div className={styles['product-main-prices']}>
                <p className={styles['price-discount']}>$70,000</p>
                <p className={styles['p-discount']}>$85,000</p>
              </div>

              <div className={styles['div-discount']}>Ahorras 15,000 (%17)</div>
            </div>

            <div className={styles['product-detail-buttons']}>
              <div className={`${styles['product-detail-button']}`}>
                <div className={`${styles['product-button-content']}`}>
                <p>Añadir al carrito</p>
                </div>
              </div>

              <div className={`${styles['product-button-whatsapp']} ${styles['product-detail-button']}`}>
                <div className={styles['product-button-content']}>
                  <p>Ordenar ahora</p>
                </div>
              </div>
            </div>

            <div className={styles['product-details-detail']}>
              <div className={styles['product-detail-property']}>
                <h4>Medidas</h4>
                <p>4X4 mts</p>
              </div>

              <div className={styles['product-detail-property']}>
                <h4>Material</h4>
                <p>
                  Hilo tipo americano reforzado y encerado con certificación especial para el uso en inflables.
                </p>
              </div>

              <div className={styles['product-detail-description']}>
                <h4>Descripción</h4>
                <p>
                  El toro mecánico es una atracción divertida y desafiante que simula la experiencia de montar un
                  toro real. Ofrece diferentes niveles de velocidad y movimiento, adaptándose tanto a principiantes
                  como a expertos. Es ideal para eventos, fiestas y negocios de entretenimiento, brindando una
                  experiencia segura y emocionante para todas las edades.
                </p>
              </div>

              <div className={styles['product-detail-include']}>
                <h4>Este producto incluye</h4>
                <ul>
                  <li>Toro mecánico</li>
                  <li>Colchón de 3x3</li>
                  <li>Motor de 2 caballos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['product-detail-suggestions']}></div>
      </div>

    </>
  )
}

export default ProductDetailPage
