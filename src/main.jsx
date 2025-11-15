import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TargetContextProvider from "./context/targetContextProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <TargetContextProvider>
      <App />
    </TargetContextProvider>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
