import "./globals.css";

export const metadata = {
  title: "SAC PEÇANHA",
  description: "Fale com a equipe Peçanha pelo WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
