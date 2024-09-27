import "@styles/styles.css"
import Footer from "@components/footer";
import NavigationBar from "@components/nav";

export const metadata = {
  title: "Ikigai Sushi",
  description: "Ikigai Sushi restaurang hemsida",
};

export default function RootLayout({children}) {
  return (
    <html lang="sv">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <NavigationBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
