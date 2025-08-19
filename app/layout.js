// app/layout.js
import './globals.css'; // or your main CSS file
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import theme from '../theme'; // adjust path if needed

export const metadata = {
  title: 'Student Portal',
  description: 'Access your courses, tests, and progress',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: theme.colors.background,
          color: theme.colors.primaryText,
        }}
        className="flex flex-col min-h-screen"
      >
        <div className="sticky top-0 z-30">
          <Navbar />
        </div>
        <main className="flex-grow">{children}</main>
        <div
          className="bottom-0 shadow-inner"
          style={{
            backgroundColor: theme.colors.footerBg,
            borderTop: `1px solid ${theme.colors.footerBorder}`,
          }}
        >
          <Footer />
        </div>
      </body>
    </html>
  );
}
