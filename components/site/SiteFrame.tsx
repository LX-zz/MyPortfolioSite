import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export function SiteFrame({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
