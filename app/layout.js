import { SelectedDocContextProvider } from "@/context/SelectedDocContext";
import "./globals.css";

export const metadata = {
  title: "Document Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SelectedDocContextProvider>{children}</SelectedDocContextProvider>
      </body>
    </html>
  );
}
