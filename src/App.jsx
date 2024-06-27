import { useRoutes } from "react-router-dom";
import authenticatedRoutes from "./routes/User";

function App() {
  const userRoutes = useRoutes(authenticatedRoutes);
  return <div>{userRoutes}</div>;
}

export default App;
