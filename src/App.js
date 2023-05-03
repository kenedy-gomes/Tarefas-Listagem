import Routers from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
    </QueryClientProvider>
  );
}

export default App;
