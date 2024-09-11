import "./globals.css";

export const metadata = {
  title: "WebDev 2 Demos",
  description: "Demos for Web Dev 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
