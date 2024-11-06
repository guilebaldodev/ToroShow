export interface Product {
    titulo: string;
    descripcion: string;
    precio: number;
    anterior?: number;
    img: string;
}

export const bullCatalog: Product[] = [
    {
        titulo: "Toro Extreme",
        descripcion: "Toro mecánico",
        precio: 86500,
        anterior: 91500,
        img: "product-1.webp"
    },
    {
        titulo: "Toro Salvaje Edición Limitada",
        descripcion: "Toro mecánico",
        precio: 96000,
        img: "product-2.webp"
    },
    {
        titulo: "Toro Feroz con Fuerza Máxima",
        descripcion: "Toro mecánico",
        precio: 73500,
        anterior: 81000,
        img: "product-3.webp"
    },
    {
        titulo: "Toro Destructor con Doble Potencia y Seguridad",
        descripcion: "Toro mecánico",
        precio: 78500,
        img: "product-6.webp"
    },
    {
        titulo: "Furia Imparable",
        descripcion: "Toro mecánico",
        precio: 89000,
        anterior: 96000,
        img: "product-4.webp"
    },
    {
        titulo: "Semental para Eventos Masivos y Resistencia Extra",
        descripcion: "Toro mecánico",
        precio: 81500,
        img: "product-9.webp"
    },
    {
        titulo: "Toro Compacto para Espacios Reducidos",
        descripcion: "Toro mecánico",
        precio: 76500,
        anterior: 83000,
        img: "product-7.webp"
    },
    {
        titulo: "Toro mecánico deluxe el más pro del mundo",
        descripcion: "Toro mecánico",
        precio: 94000,
        img: "product-8.webp"
    },
    {
        titulo: "Toro mecánico deluxe",
        descripcion: "Toro mecánico",
        precio: 79500,
        img: "product-10.webp"
    },
    {
        titulo: "Toro mecánico deluxe",
        descripcion: "Toro mecánico",
        precio: 71500,
        anterior: 86000,
        img: "product-5.webp"
    }
];