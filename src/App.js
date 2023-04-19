import "./App.css";
import FormList from "./Components/FormList/FormList";
import FormRegister from "./Components/FormRegister/FormRegister";
import Header from "./Components/Header/Header";

import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="container">
      <div className="container-form">
        <div className="container-header">
          <Header />
        </div>
        <section className="container-form-R">
          <FormRegister />
          <div className="container-form-L">
            <h2>Listar Tarefa</h2>
            <FormList />
          </div>
        </section>
      </div>
    </div>
  </QueryClientProvider>
  );
};
export default App;
