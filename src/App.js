import Routers from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./contexts/auth";
function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Routers />
    </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
