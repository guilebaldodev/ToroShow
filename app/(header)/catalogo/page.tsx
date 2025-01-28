import { bullCatalog } from "@/consts";
import ProductCard from "@/app/ui/Product";
// import Link from "next/link";
import styles from './page.module.css'

const CatalogPage = () => {
    return ( 
    
        
        <div className={styles['search-page-container']}>
      
        <div className={styles['search-products']}>
   
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