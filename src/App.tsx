import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  )
}

export default App;