import { bullCatalog } from "@/consts";
import ProductCard from "../ui/Product";
import Link from "next/link";
import styles from './page.module.css'
import Image from "next/image";

const CatalogPage = () => {
    return ( 
    
        
        <div className={styles['search-page-container']}>
        <div className={styles['search-container']}>
            <input
                placeholder="Busca tus productos...."
                type="text"
            />
            <div className={styles['search-img-container']}>
                <Image src="/layout/search-grey-icon.png" width={25} height={25} alt="search icon" />
            </div>
         </div>

        <div className={styles['search-products']}>
            <div className={styles['search-filters']}>
                <div className={styles['search-section']}>
                    <h3>Categorias</h3>
                    <Link href="/categorias/toros-mecanicos">Toros Mecánicos</Link>
                    <Link href="/categorias/inflables">Inflables</Link>
                    <Link href="/categorias/refacciones">Refacciones</Link>
                    <Link href="/categorias/maquinitas">Maquinitas</Link>
                    <Link href="/categorias/ofertas">Paquetes y Ofertas</Link>
                </div>

                <div className={styles['search-section']}>
                    <h3>Colores</h3>
                    {[
                        { color: 'Rojo', bgColor: 'red' },
                        { color: 'Cafe', bgColor: 'brown' },
                        { color: 'Negro', bgColor: 'black' },
                        { color: 'Blanco', bgColor: 'white' },
                        { color: 'Multicolor', bgColor: 'multicolor' }
                    ].map(({ color, bgColor }) => (
                        <div key={color} className={styles['search-color-duo']}>
                            {color}
                            <span style={{ backgroundColor: bgColor }}></span>
                        </div>
                    ))}
                </div>

                <div className={styles['search-section']}>
                    <h3>Rango de precios</h3>
                    <div className={styles['search-inputs-price']}>
                        <div className={styles['search-input-duo']}>
                            <label>Desde</label>
                            <input
                                min="0"
                                type="number"
                            />
                        </div>
                        <div className={styles['search-input-duo']}>
                            <label>Hasta</label>
                            <input
                                min="0"
                                type="number"
                            />
                        </div>
                        <button>Aplicar</button>
                    </div>
                </div>
            </div>

            <div className={styles['grid-products']}>
                {bullCatalog.map((product) => (
                    <ProductCard key={product.titulo} product={product} />
                ))}
            </div>
        </div>
    </div>
    
    );
}
 
export default CatalogPage;