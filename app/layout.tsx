import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider"
import { Inter, Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"]);


export const metadata: Metadata = {
  title: "Luis John Pro",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            <main>
            {children}
            </main>
            <Footer/>
          </ThemeProvider>
      </body>
    </html>
  );
}

