import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) { 
  return (
    <main>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
