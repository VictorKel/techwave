// pages/_app.tsx

import Footer from "@/components/Footer";
import Nav from "@/components/NavBar/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../contexts/CartContext";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noLayoutRoutes = ["/auth/login", "/auth/signIn"];
  const isAuthPage = noLayoutRoutes.includes(router.pathname);

  return (
    <main>
      <CartProvider>
        {!isAuthPage && <ResponsiveNav />}
        <Component {...pageProps} />
        <Toaster position="top-center" />
        {!isAuthPage && <Footer />}
      </CartProvider>
    </main>
  );
}

