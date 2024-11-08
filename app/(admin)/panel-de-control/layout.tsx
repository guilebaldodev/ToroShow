import AdminHeader from "@/app/ui/AdminHeader";
import SideBar from "@/app/ui/SideBar";


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        
        <>
            <div className="layout">
                <SideBar></SideBar>
                <div className="dashboard-content">
                <AdminHeader></AdminHeader>
                {children}
                </div>
            </div>
        </>    

);
}
