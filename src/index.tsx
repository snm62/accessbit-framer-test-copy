import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/plugin-base.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { framer } from "framer-plugin";
import App from './app';

// Resize/show the Framer plugin panel before mounting React.
void framer.showUI({
  position: "top right",
  width: 800,
  height: 600,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
