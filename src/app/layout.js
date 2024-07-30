import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter, Solitreo } from "next/font/google";
import "./globals.css";
import { Sora } from "next/font/google";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "meedAI | The people side of AI",
  description: "At meedAI, we redefine AI talent and consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <Footer />
      </body>
    </html>
  );
}
