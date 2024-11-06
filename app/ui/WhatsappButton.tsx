import Image from "next/image";

const WhatsAppButton = () => {
    return ( <>
         <a className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <Image src="/layout/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} style={{width:"100%",height:"100%",padding:"10px"}} />
        </a>
    
    </> );
}
 
export default WhatsAppButton;