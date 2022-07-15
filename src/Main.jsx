import { AuthProvider } from "./context/auth/AuthProvider";
import AppRouter from "./router/AppRouter";

function Main() {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  );
}

export default Main;