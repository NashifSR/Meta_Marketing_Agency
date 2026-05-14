import "./globals.css";

import NavBar from "./sharedComponents/NavBar";
import Footer from "./sharedComponents/Footer";
import SmoothScroll from "./Components/SmoothScroll";

export const metadata = {
  title: "Frame House Creative",
  description:
    "Modern creative agency specializing in design, editing, and development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col overflow-x-hidden text-white bg-black">

        <SmoothScroll>

          {/* BACKGROUND */}
          <div className="fixed inset-0 -z-50">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-white/5 blur-3xl rounded-full" />
          </div>

          {/* NAVBAR */}
          <header className="sticky top-0 z-50 px-4 md:px-6 pt-4">
              <NavBar />
            {/* <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
            </div> */}
          </header>

          {/* MAIN */}
          <main className="relative flex-grow z-10">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="relative z-10 mt-20">
            <Footer />
          </footer>

        </SmoothScroll>

      </body>
    </html>
  );
}