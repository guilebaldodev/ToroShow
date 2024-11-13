import AccordionItem from "@/app/ui/AccordionItem";

const faqData = [
  {
    question: '¿Cómo puedo realizar una compra?',
    answer: 'Para realizar una compra, navega por nuestro sitio web, selecciona los productos que deseas adquirir y agrégales al carrito. Luego, dirígete al carrito, revisa tu pedido y procede al pago siguiendo las instrucciones en pantalla.',
  },
  {
    question: '¿Cuáles son los métodos de pago aceptados?',
    answer: 'Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito, PayPal y transferencias bancarias. Durante el proceso de pago, podrás seleccionar el método que prefieras.',
  },
  {
    question: '¿Cómo puedo rastrear mi pedido?',
    answer: 'Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento y un enlace para rastrear el estado de tu envío en tiempo real.',
  },
  {
    question: '¿Cuál es el tiempo estimado de entrega?',
    answer: 'El tiempo de entrega varía según tu ubicación y el tipo de envío seleccionado. Generalmente, los pedidos se entregan en un plazo de 3 a 7 días hábiles. Puedes consultar los tiempos específicos en nuestra página de envíos.',
  },
  {
    question: '¿Cómo puedo devolver un producto?',
    answer: 'Para devolver un producto, sigue nuestro proceso de devoluciones en el sitio web. Debes solicitar la devolución dentro del plazo establecido y asegurarte de que el producto esté en su estado original. Encontrarás más detalles en nuestra política de devoluciones.',
  },
  {
    question: '¿Puedo modificar o cancelar mi pedido después de haberlo realizado?',
    answer: 'Si necesitas modificar o cancelar tu pedido, contáctanos lo antes posible. Podremos hacer cambios siempre que el pedido no haya sido procesado o enviado aún. Revisa nuestra política de cambios y cancelaciones para más detalles.',
  },
  {
    question: '¿Cómo puedo contactar con el servicio de atención al cliente?',
    answer: 'Puedes contactar con nuestro servicio de atención al cliente a través de nuestro formulario de contacto en el sitio web, enviando un correo electrónico a soporte@ecommerce.com o llamando a nuestro número de atención al cliente.',
  },
  {
    question: '¿Ofrecen envíos internacionales?',
    answer: 'Sí, ofrecemos envíos internacionales. Durante el proceso de compra, podrás seleccionar tu país de destino y ver las opciones de envío disponibles. Los gastos de envío y los tiempos de entrega variarán según la ubicación.',
  },
];


const QuestionPage = () => {



  return (
    <>
      <div className="questions-container">
        <h2>Preguntas Frecuentes</h2>
        <p className="question-p">
          Sabemos que emprender proyecto puede generar muchas dudas, y queremos
          asegurarnos de que tengas todas las respuestas que necesitas. En
          nuestra sección de preguntas frecuentes, hemos recopilado las
          consultas más comunes de nuestros clientes para ayudarte a encontrar
          rápidamente la información que buscas. 
          <br />
          <br />
          Si tienes alguna pregunta
          específica o necesitas asistencia personalizada, no dudes en
          contactarnos. Puedes escribirnos directamente a través de WhatsApp o
          hacer clic en la seccion de contacto de nuestra pagina.
        </p>
      
      <div className="questions-list">

      <div className="accordion">
        {faqData.map((item, index) => (
          <AccordionItem key={index} item={item}></AccordionItem>
        ))}
      </div>

      </div>
      

      </div>


    </>
  );
};

export default QuestionPage;
