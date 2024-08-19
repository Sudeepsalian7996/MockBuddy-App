import { useRoutes } from "react-router-dom";
import authenticatedRoutes from "./routes/User";
import ScrollToTop from "components/ScrollTop";
import "./App.css";

function App() {
  const userRoutes = useRoutes(authenticatedRoutes);
  return (
    <>
      <ScrollToTop />
      <div>{userRoutes}</div>
    </>
  );
}

export default App;
