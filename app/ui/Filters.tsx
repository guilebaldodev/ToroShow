'use client'
import Image from "next/image";
import { useState } from "react";

const Filters = () => {

    const [openCategory, setOpenCategory] = useState(false);
    const [openColor, setOpenColor] = useState(false);
    const [openPrice, setopenPrice] = useState(false);


    return ( 
    <>
        <div className="filters-container">
            <div className="filters-title">
                <h4>Filtros</h4>
            </div>

            <div className="category-filters">
     
            <div className="category-filter">
                    <div className="category-title" onClick={() => setOpenCategory(!openCategory)}>
                        <h5>Categorías</h5>
                        <Image 
                            src="/layout/down-arrow.png" 
                            width={22} 
                            height={22} 
                            alt="icono de flecha"
                        />
                    </div>
                    <div className={`content ${openCategory ? "show" : ""}`}>
                        <ul>
                            <li>Toros Mecánicos</li>
                            <li>Inflables</li>
                            <li>Refacciones</li>
                        </ul>
                    </div>
                </div>

                {/* Filtro de Color */}
                <div className="category-filter">
                    <div className="category-title" onClick={() => setOpenColor(!openColor)}>
                        <h5>Color</h5>
                        <Image 
                            src="/layout/down-arrow.png" 
                            width={22} 
                            height={22} 
                            alt="icono de flecha"
                        />
                    </div>
                    <div className={`content ${openColor ? "show" : ""}`}>
                        <ul className="ul-color">
                            <li> 
                                <div className="circle red"></div>
                                <span>Rojo</span>
                            </li>

                            <li> 
                                <div className="circle green"></div>
                                <span>Verde</span>
                            </li>

                            <li> 
                                <div className="circle black"></div>
                                <span>Negro</span>
                            </li>

                            <li> 
                                <div className="circle brown"></div>
                                <span>Cafe</span>
                            </li>


                        </ul>
                    </div>
                </div>

                    {/* Filtro de precio */}
                                <div className="category-filter">
                    <div className="category-title" onClick={() => setopenPrice(!openPrice)}>
                        <h5>Precio</h5>
                        <Image 
                            src="/layout/down-arrow.png" 
                            width={22} 
                            height={22} 
                            alt="icono de flecha"
                        />
                    </div>
                    <div className={`content ${openPrice ? "show" : ""}`}>
            
                        <input min={0} max={85000} type="range" />
                        <div className="range-price">
                            <span>Precio: $0 - $85,150</span>
                            <button>Aplicar</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    </> );
}
 
export default Filters;