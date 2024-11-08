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




export const BullCategories=[
    {
        nombre:"Toro mecánico",
        productos:55

    },
    {
        nombre:"Refacciones",
        productos:75
    },
    {
        nombre:"Inflabe",
        productos:20
    },
    {
        nombre:"Accesorio",
        productos:18
    }
]


export const bullSales = [

    {
        titulo: "Toro Compacto para Espacios Reducidos",
        descripcion: "Toro mecánico",
        precio: 76500,
        img: "product-7.webp",
        estado:"pagado",
        fecha:"16/10/2024",
        color:"green"
    },
    {
        titulo: "Toro mecanico deluxe el más pro del mundo",
        descripcion: "Toro mecánico",
        precio: 94000,
        img: "product-8.webp",
        estado:"pagado",
        fecha:"16/10/2024",
        color:"green"


    },
    {
        titulo: "Toro mecanico deluxe",
        descripcion: "Toro mecánico",
        precio: 79500,
        img: "product-10.webp",
        estado:"pendiente",
        fecha:"20/10/2024",
        color:"gold"


    },
    {
        titulo: "Toro mecanico deluxe",
        descripcion: "Toro mecánico",
        precio: 71500,
        anterior: 86000,
        img: "product-5.webp",
        estado:"Cancelado",
        fecha:"20/10/2024",
        color:"red"


    }
]


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