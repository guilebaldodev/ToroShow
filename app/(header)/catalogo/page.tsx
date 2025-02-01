import { bullCatalog } from "@/consts";
import ProductCard from "@/app/ui/Product";
// import Link from "next/link";
import styles from './page.module.css'
import Filters from "@/app/ui/Filters";
import Select from "react-select/base";
import Image from "next/image";

const CatalogPage = () => {


    return ( 
    
        <div className={styles["search-container"]}>
        <div className={styles['search-page-container']}>
            <div className={styles['search-products']}>
                <Filters></Filters>
                <div className={styles["search-products-container"]}>
                    <div className={styles["search-page-title"]}>
                        <h3>Resultados para : Toro Mecanico deluxe</h3>
                        <div className={styles["search-page-utils"]}>
                            <button>
                                <Image src={"/layout/white-filter.png"} width={23} height={23} alt="icono de filtros"></Image>
                                <span>Filtros</span>
                            </button>
                            <select name="" id="">
                                <option value="ss">Ordenar por</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles['grid-products']}>
                        {bullCatalog.map((product) => (
                            <ProductCard key={product.titulo} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}
 
export default CatalogPage;