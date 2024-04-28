import DoctorHeader from "@/components/View/Header/DoctorHeader";
import DoctorSidebar from "@/components/View/Sidebar/DoctorSidebar";


export default function DoctorLayout({
  children,
}) {
  return (
    <div>
      <DoctorHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <div>
          <DoctorSidebar>{children}</DoctorSidebar>
        </div>
      </div>
    </div>
  );
}