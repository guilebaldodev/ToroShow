import { bullCatalog } from "@/consts";
import Image from "next/image";
import React from "react";
import styles from './css/cart.module.css'

const Cart = ({ onClose }) => {

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', { minimumFractionDigits: 0 });
};

  return (
    <>
      <div className={styles["cart-overlay"]}>
        <div className={`${styles["cart-content"]} ${styles["slide-enter"]}`}>
          <div className={styles["cart-header"]}>
            <h4>Carrito de compras</h4>
            <Image
              src="/layout/x.png"
              width={23}
              height={23}
              alt="Cerrar menú"
              onClick={onClose}
            />
          </div>

          <div className={styles["cart-items"]}>
            {bullCatalog.slice(0, 6).map((product, index) => (
              <div key={index} className={styles["cart-item"]}>
                <div className={styles["cart-item-info"]}>
                  <Image
                    src={`/products/bulls/${product.img}`}
                    width={80}
                    height={80}
                    alt="product"
                  />
                  
                  <div className={styles["cart-item-right"]}>
                    <div className={styles["cart-item-details"]}>
                      <p>Toro Mecanico</p>
                      <h5>{product.titulo}</h5>
                      <span>${formatPrice(product.precio)}</span>
                    </div>

                    <Image
                      className={styles["delete-icon"]}
                      src={"/layout/delete-icon.png"}
                      width={30}
                      height={30}
                      alt="icono de eliminar"
                    />
                  </div>
                </div>

                <div className={styles["cart-item-actions"]}>
                  <div className={styles["cart-item-quantity"]}>
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles["cart-footer"]}>
            <div className={styles["cart-footer-total"]}>
              <span>Total</span>
              <span>$545,750</span>
            </div>

            <p>Serás redirigido a WhatsApp para concluir la compra</p>

            <button>
              <Image
                src={"/layout/whatsapp-icon.png"}
                width={25}
                height={25}
                alt="whatsapp enlace"
              />
              <span>Finalizar Compra</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
