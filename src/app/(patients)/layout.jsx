import PatientHeader from "@/components/View/Header/PatientHeader";
import PatientSidebar from "@/components/View/Sidebar/PatientSidebar";

export default function PatientLayout({ children }) {
  return (
    <div>
      <PatientHeader />
      <div className="">
        <PatientSidebar>{children}</PatientSidebar>
      </div>
    </div>
  );
}
