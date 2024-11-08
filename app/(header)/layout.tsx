import Footer from "../ui/Footer";
import Header from "../ui/Header";
import WhatsAppButton from "../ui/WhatsappButton";

export default function HeaderLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
            <>
        <Header></Header>
            {children}
          <Footer></Footer>
          <WhatsAppButton></WhatsAppButton>
        </>

        );
  }