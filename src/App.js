import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
