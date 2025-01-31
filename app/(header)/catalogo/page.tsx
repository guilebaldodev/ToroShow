import { bullCatalog } from "@/consts";
import ProductCard from "@/app/ui/Product";
// import Link from "next/link";
import styles from './page.module.css'
import Filters from "@/app/ui/Filters";

const CatalogPage = () => {
    return ( 
    
        <div className={styles["search-container"]}>

        <div className={styles['search-page-container']}>
      

        <div className="search-page-titles">
            <h3>Resultados para : Toro Mecanico</h3>

        </div>

        <div className={styles['search-products']}>



            <Filters></Filters>

            <div className={styles['grid-products']}>
                {bullCatalog.map((product) => (
                    <ProductCard key={product.titulo} product={product} />
                ))}
            </div>


        </div>
    </div>
                </div>
    
    );
}
 
export default CatalogPage;