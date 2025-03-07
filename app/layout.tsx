import "./globals.css";

export const metadata = {
  title: "RoadKill",
  description: "RoadKill",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
