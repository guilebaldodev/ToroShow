import Link from 'next/link';
import styles from './css/productcard.module.css';
import { Product } from '@/consts';
import Image from 'next/image';



const formatPrice = (price:number) => {
    return price.toLocaleString('en-US', { minimumFractionDigits: 0 });
};

type ProductCardsProps={
    product:Product
}

const ProductCard = ({ product }:ProductCardsProps) => {
    return (
        <>
        <div className={styles['product-card']}>
            <Link href="/catalogo/1">
                <div className={styles['product-img-container']}>
                    <Image src={`/products/bulls/${product.img}`} width={300} height={300} style={{width:"100%",height:"auto",minHeight:"100%",objectFit:"cover"}} alt={product.titulo} />
                </div>

                <div className={styles['product-card-info']}>
                    <div className="product-card-details">
                    <h3>{product.titulo}</h3>
                    <p>{product.descripcion}</p>

                    <div className={styles['product-card-prices']}>
                        <p className={styles['discount-price']}>${formatPrice(product.precio)}</p>
                        {product.anterior && (
                            <p className={`${styles['normal-price']} ${styles['discount']}`}>
                                ${formatPrice(product.anterior)}
                            </p>
                        )}
                    </div>

                    </div>

                    <button>Agregar al carrito</button>
                </div>
            </Link>
        </div>

        </>
    );
};

export default ProductCard;