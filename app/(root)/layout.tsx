import Footer from "@/widgets/Footer/Footer";
import Header from "@/widgets/Header/Header";


export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <div className="app-layout">
      <Header />
      <main className="app-main">
        {children}
      </main>
      <Footer />
    </div>
  </>;
}