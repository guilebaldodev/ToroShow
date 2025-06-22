"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { bullCatalog, Product } from "@/consts";
import ProductCard from "../ui/Product";

export default function Home() {

  const message = encodeURIComponent('¡Buenos dias! Me gustaría recibir más información sobre los toros.');
  const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;


const categoryOptions = [
  { value: "Toro Mecanico", label: "Toro Mecánico" },
  { value: "Refacciones", label: "Refacciones" },
  { value: "Inflable", label: "Inflable" },
  { value: "Accesorio", label: "Accesorio" },
];


  return (
    <>
    
    <div className={styles['landing-page']}>

      <div className={styles['hero-container']}>
        <div className={styles['hero-texts']}>
          <h1>
            Inicia tu Emprendimiento con un <span className={styles['primary-color']}>Toro Mecánico</span>
          </h1>
          <h3>
            Aprovecha el poder del entretenimiento y convierte un toro mecánico en la clave para iniciar tu propio
            emprendimiento. Atrae a tus clientes y genera ingresos con un producto de calidad.
          </h3>
          <Link href="/contacto">Contáctanos</Link>
        </div>
        <div className={styles['hero-image']}>
          <Image src="/home/hero.png" alt="Hero" width={400} height={400} style={{width:"100%",height:'auto'}} />
        </div>
      </div>

      <div className={styles['category-container']}>
        <div className={styles['category-item']}>
          <Image src="/home/bull-type.png" alt="Toros Mecánicos" width={40} height={40} />
          <p>Toros Mecánicos</p>
        </div>
        <div className={styles['category-item']}>
          <Image src="/home/infltable.png" alt="Colchones" width={40} height={40} />
          <p>Colchones</p>
        </div>
        <div className={styles['category-item']}>
          <Image src="/home/tolls-type.png" alt="Refacciones" width={40} height={40} />
          <p>Refacciones</p>
        </div>
        <div className={styles['category-item']}>
          <Image src="/home/motor.png" alt="Maquinitas" width={40} height={40} />
          <p>Accesorios</p>
        </div>
      </div>

      <div className={styles['landing-products']}>
        <div className={styles['landing-products-title']}>
          <h3>Nuestros mejores productos</h3>
        </div>
        <div className={styles['landing-products-container']}>
          {bullCatalog && bullCatalog.map((product:Product,index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className={styles['banner-container']}>
        <div className={styles['banner']}>
          <div className={styles['banner-img']}>
            {/* <Image src="/home/banner.png" alt="Banner" width={600} height={400} /> */}
            <Image src="/home/banner.png" alt="Banner" width={400} height={400} style={{width:"100%",height:'auto'}} />

          </div>
          <div className={styles['banner-texts']}>
            
            <h2>SOMOS LOS LÍDERES EN TOROS MECÁNICOS PARA EMPRENDEDORES</h2>
            <p>
              Fabricamos toros mecánicos de alta calidad, diseñados para ayudarte a iniciar o expandir tu negocio de
              entretenimiento. Con envíos rápidos a toda la república y Latinoamérica, te acompañamos en cada paso del
              proceso con asesoría personalizada y atención continua.
              <br /> <br />
              ¡Es momento de emprender con el mejor equipo a tu lado!
            </p>
            <Link href="/contacto">¡Quiero emprender!</Link>
          </div>
        </div>
      </div>

      <div className={styles['landing-about-us']}>
        <div className={styles['landing-about-container']}>
          <div className={styles['landing-about-item']}>
            <div className={styles['img-container']}>
              <Image src="/home/delivery.svg" alt="Envío seguro y rápido" width={45} height={40} />
            </div>
            <h3>Envío seguro y rápido</h3>
            <p>Tus toros mecánicos llegarán de manera segura y a tiempo.</p>
          </div>
          <div className={styles['landing-about-item']}>
            <div className={styles['img-container']}>
              <Image src="/home/tape-icon.png" alt="Toros a tu medida" width={40} height={40} />
            </div>
            <h3>Toros a Tu Medida</h3>
            <p>Personalización para que tu toro refleje la identidad de tu negocio.</p>
          </div>
          <div className={styles['landing-about-item']}>
            <div className={styles['img-container']}>
              <Image src="/home/safety.png" alt="Calidad asegurada" width={40} height={40} />
            </div>
            <h3>Calidad asegurada</h3>
            <p>Nuestros toros están fabricados con materiales de alta calidad.</p>
          </div>
          <div className={styles['landing-about-item']}>
            <div className={styles['img-container']}>
              <Image src="/home/quick.png" alt="Montaje rápido y sencillo" width={40} height={40} />
            </div>
            <h3>Montaje Rápido y Sencillo</h3>
            <p>Listo para usar en minutos, sin herramientas complicadas.</p>
          </div>
        </div>
      </div>

      <div className={styles['banner-container']}>
        <div className={`${styles['banner']} ${styles['reverse']}`}>
          <div className={styles['banner-texts']}>
            <h2>IMPULSA TU NEGOCIO CON NUESTROS TOROS MECÁNICOS</h2>
            <p>
              Atrévete a destacar con nuestros toros mecánicos, la adición perfecta para cualquier evento o negocio. Ofrecen diversión y emoción sin igual, capturando la atención de todos y atrayendo a más clientes. Cada toro está construido con los más altos estándares de calidad y seguridad, asegurando una experiencia de usuario excepcional.
            </p>
            <Link href="/catalogo">¡Quiero ver los toros!</Link>
          </div>
          <div className={`${styles['banner-img']} ${styles['img-transform']}`}>
            <Image src="/home/banner3.png" alt="Banner" width={400} height={400} style={{width:"100%",height:'auto'}} />

          </div>
        </div>
      </div>

      <div className={styles['fill-banner']}>
        <h3>
          Invierte con <span className={styles['primary-color']}>Confianza</span>
        </h3>
        <p>
          Aprovecha la oportunidad de un nicho rentable y recupera tu inversión rápidamente. Contamos con el catálogo
          más completo de toros mecánicos. ¡Contáctanos por WhatsApp y empieza tu negocio hoy mismo!
        </p>

         <a 
         href={whatsAppURL}
        target="_blank" rel="noopener noreferrer">
        ¡Mándanos un WhatsApp!
        </a>

      </div>
    </div>
    
    </>
  );
}
