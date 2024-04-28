import PublicHeader from "@/components/View/Header/PublicHeader";


export default function PublicLayout({
  children,
}) {
  return (
    <div>
      <PublicHeader />
      <div className="min-h-[calc(100vh-64px)]">{children}</div>
    </div>
  );
}