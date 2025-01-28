import AccordionItem from "@/app/ui/AccordionItem";

const faqData = [
  {
    question: '¿Cómo puedo comprar un toro mecánico en Toros Mx?',
    answer: 'Para comprar un toro mecánico, selecciona el modelo que más te guste y agrégalo al carrito de compras. Una vez en el carrito, serás trasladado a un chat de WhatsApp donde podremos coordinar los detalles de tu pedido, incluyendo el envío y la forma de pago.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'En Toros Mx aceptamos tarjetas de crédito y débito, transferencias bancarias y pagos a través de PayPal. Durante el proceso de compra, podrás elegir la opción que mejor te convenga.',
  },
  {
    question: '¿Realizan envíos a todo México?',
    answer: 'Sí, enviamos nuestros toros mecánicos a cualquier parte de México. Durante el proceso de compra, podrás ingresar tu dirección y ver los costos de envío aplicables.',
  },
  {
    question: '¿Cuánto tiempo tarda en llegar mi pedido?',
    answer: 'El tiempo de entrega varía según tu ubicación, pero generalmente tardamos entre 5 y 10 días hábiles en hacer llegar tu toro mecánico.',
  },
  {
    question: '¿Puedo devolver un toro mecánico si no estoy satisfecho?',
    answer: 'No aceptamos devoluciones. Antes de realizar tu compra, te recomendamos asegurarte de que el modelo seleccionado cumple con tus necesidades.',
  },
  {
    question: '¿Cómo puedo comunicarme con Toros Mx?',
    answer: 'Puedes contactarnos a través de nuestro formulario de contacto en el sitio web, enviando un correo electrónico a soporte@torosmx.com o llamándonos directamente. Estaremos encantados de ayudarte.',
  },
  {
    question: '¿Los toros mecánicos incluyen garantía?',
    answer: 'Sí, nuestros toros mecánicos incluyen una garantía limitada que cubre defectos de fabricación. Para más detalles, consulta nuestra página de términos y condiciones.',
  },
  {
    question: '¿Puedo personalizar mi toro mecánico?',
    answer: 'Sí, ofrecemos opciones de personalización para que tu toro mecánico se adapte a tus necesidades. Contáctanos para más información sobre colores, diseños y características adicionales.',
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
