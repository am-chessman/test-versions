import "@styles/styles.css"
import "@styles/globals.css"
import Footer from "@components/footer";
import NavigationBar from "@components/nav";

export const metadata = {
  title: "Ikigai Sushi",
  description: "Ikigai Sushi restaurang hemsida",
};

export default function RootLayout({children}) {
  return (
    <html lang="sv">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"/>
      </head>
      <body>
        <main className="app">
          <NavigationBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
