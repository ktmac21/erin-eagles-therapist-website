import Menu from '../components/Menu'

export const metadata = {
  title: "Erin Eagles LCSW",
  description: "A therapist in the Perkasie, PA area",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
