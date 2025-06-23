import { bullDescription, emergencyButtonDescription, inflatableDescription, motorDescription } from "./description";

export interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  anterior?: number;
  img: string[] ;
  categoria: string;
}




export const bullCatalog: Product[] = [
  {
    id: 1,
    titulo: "Toro Extreme",
    descripcion: bullDescription,
    precio: 86500,
    anterior: 91500,
    img: [
      "/products/bulls/product-1/product-1-1.webp",
      "/products/bulls/product-1/product-1-2.webp",
      "/products/bulls/product-1/product-1-3.webp",
      "/products/bulls/product-1/product-1-4.webp",
    ],
    categoria: "Toro Mecanico",
  },
  {
    id: 2,
    titulo: "Toro Destructor con Doble Potencia y Seguridad",
    descripcion: bullDescription,
    precio: 78500,
    img: [
      "/products/bulls/product-4/product-4-1.webp",
      "/products/bulls/product-4/product-4-2.webp",
      "/products/bulls/product-4/product-4-3.webp",
    ],
    categoria: "Toro Mecanico",
  },

    {
    id: 3,
    titulo: "Semental para Eventos Masivos y Resistencia Extra",
    descripcion: bullDescription,
    precio: 81500,
    img: [
      "/products/bulls/product-6/product-6-1.webp",
      "/products/bulls/product-6/product-6-2.webp",
      "/products/bulls/product-6/product-6-3.webp",
    ],
    categoria: "Toro Mecanico",
  },

  {
    id: 4,
    titulo: "Toro Salvaje Edición Limitada",
    descripcion: bullDescription,
    precio: 96000,
    img: [
      "/products/bulls/product-2/product-2-1.webp",
    ],
    categoria: "Toro Mecanico",
  },
  {
    id: 5,
    titulo: "Toro Feroz con Fuerza Máxima",
    descripcion: bullDescription,
    precio: 73500,
    anterior: 81000,
    img: [
      "/products/bulls/product-3/product-3-1.webp",
    ],
    categoria: "Toro Mecanico",
  },

  {
    id: 6,
    titulo: "Furia Imparable",
    descripcion: bullDescription,
    precio: 89000,
    anterior: 96000,
    img: [
      "/products/bulls/product-5/product-5-1.webp",
    ],
    categoria: "Toro Mecanico",
  },

  {
    id: 7,
    titulo: "Toro Compacto para Espacios Reducidos",
    descripcion: bullDescription,
    precio: 76500,
    anterior: 83000,
    img: [
      "/products/bulls/product-7/product-7-1.webp",
    ],
    categoria: "Toro Mecanico",
  },
  {
    id: 8,
    titulo: "Motor industrial para colchon",
    descripcion: motorDescription,
    precio: 4000,
    img: [
      "/products/bulls/product-8/product-8-3.webp",
      "/products/bulls/product-8/product-8-2.webp"
    ],
    categoria: "Accesorios",
  },
  {
    id: 9,
    titulo: "Colchon de toro mecanico",
    descripcion: inflatableDescription,
    precio: 45000,
    img: [
      "/products/bulls/product-9/product-9-1.webp",
      "/products/bulls/product-9/product-9-2.webp",
      "/products/bulls/product-9/product-9-3.webp",
    ],
    categoria: "Inflables",
  },
  {
    id: 10,
    titulo: "Boton de paro de emergencia",
    descripcion: emergencyButtonDescription,
    precio: 400,
    anterior: 500,
    img: [
      "/products/bulls/product-10/product-10-1.webp",
    ],
    categoria: "Refacciones",
  }
];



export const BullCategories=[
    {
        nombre:"Toro mecánico",
        productos:7

    },
    {
        nombre:"Refacciones",
        productos:1
    },
    {
        nombre:"Inflabes",
        productos:1
    },
    {
        nombre:"Accesorios",
        productos:1
    }
]


export const bullSales = [
  {
    id: 7,
    titulo: "Toro Compacto para Espacios Reducidos",
    descripcion: "Toro mecánico",
    precio: 76500,
    img: "/products/bulls/product-7/product-7-1.webp",
    estado: "pagado",
    fecha: "16/10/2024",
    color: "green",
  },
  {
    id: 8,
    titulo: "Motor industrial para colchon",
    descripcion: "Toro mecánico",
    precio: 4000,
    img: "/products/bulls/product-8/product-8-2.webp",
    estado: "pagado",
    fecha: "16/10/2024",
    color: "green",
  },
  {
    id: 9,
    titulo: "Colchon de toro mecanico",
    descripcion: "Toro mecánico",
    precio: 45000,
    img: "/products/bulls/product-9/product-9-1.webp",
    estado: "pendiente",
    fecha: "20/10/2024",
    color: "gold",
  },
  {
    id: 6,
    titulo: "Furia Imparable",
    descripcion: "Toro mecánico",
    precio: 89000,
    anterior: 96000,
    img: "/products/bulls/product-5/product-5-1.webp",
    estado: "Cancelado",
    fecha: "20/10/2024",
    color: "red",
  },
];


export const salesBarChart={
    options:{
        chart: {
            id: 'basic-bar',
            toolbar: { show: false },
            background:"#fff"
          },
          xaxis: {
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          },
          yaxis: {
            min: 0,
            max: 100,  
          },
          dataLabels: {
            enabled: true,
            position:"top",
            offsetY:-22,
      
            style: {
              colors: ['black'],  // Color del texto de los datos
              fontWeight: 600,  // Peso de la fuente
              fontSize:"14px"
            },
          },
          plotOptions: {
            bar: {
              borderRadius:3,
              borderRadiusApplication:'end',
              columnWidth: '40%',
              background:"#fff",
              dataLabels: {
                position: 'top'
              }
            },
          },
          grid:{
            show:false
          },
          fill: {
            opacity: 0.8,
            colors: ['#0071DC'],  // Colores de las barras
          },
          tooltip: {
            enabled: true,  // Oculta los tooltips
          },
    },
    series:[
        {
          name: 'Ventas',
          data: [45, 88, 23, 56, 74, 19, 67, 42, 90, 33, 21, 58],  // Datos de las barras
        },
      ],
}

export const salesPieChart = {
  options: {
    chart: {
      type: "pie",
    },
    labels: ['Toro', 'Inflables', 'Accesorios', 'Refacciones'], // Categorías de productos
    colors: ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0'], // Colores personalizados más vibrantes
    legend: {
      position: "top", // Coloca los labels arriba del gráfico
      horizontalAlign: "center",
    }
  },
  
  series: [30, 45, 20, 60] // Datos representando productos vendidos por cada categoría
};


export const salesLineChart = {
  options: {
    chart: {
      type: "line",
    },

    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // Meses abreviados
    },
    stroke: {
      curve: "smooth", // Líneas suaves
      width: [4, 4, 4, 4] // Grosor de cada línea
    },
    markers: {
      size: 4, // Tamaño de los puntos en las líneas
    },
    colors: ['#1E90FF', '#32CD32', '#FF8C00', '#8A2BE2'], // Colores personalizados para cada categoría
    legend: {
      position: "top",
      horizontalAlign: "center",
    }
  },
  

  series: [
    {
      name: "Toro",
      data: [32, 45, 38, 60, 50, 47, 65, 55, 70, 40, 62, 75] // Ventas mensuales para "Toro"
    },
    {
      name: "Inflables",
      data: [23, 28, 22, 34, 29, 51, 40, 57, 30, 69, 52, 63] // Ventas mensuales para "Inflables"
    },
    {
      name: "Accesorios",
      data: [12, 15, 20, 18, 30, 25, 43, 37, 42, 38, 55, 50] // Ventas mensuales para "Accesorios"
    },
    {
      name: "Refacciones",
      data: [27, 30, 45, 35, 55, 52, 63, 60, 65, 50, 42, 72] // Ventas mensuales para "Refacciones"
    }
  ]
  

};