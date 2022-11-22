import "../styles/globals.css";

import { Navigation } from "../components/Navigation";
import { Font } from "../components/Font";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body className={Font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
