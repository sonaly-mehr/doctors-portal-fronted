import AdminHeader from "@/components/View/Header/AdminHeader";
import AdminSidebar from "@/components/View/Sidebar/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div>
      <AdminHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <AdminSidebar>{children}</AdminSidebar>
      </div>
    </div>
  );
}
