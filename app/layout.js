import { Navigation } from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
