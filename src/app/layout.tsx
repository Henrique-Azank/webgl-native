// Component dependencies
import Styles from "./layout.module.scss";

// Main layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Styles.MainLayout}>{children}</body>
    </html>
  );
}
