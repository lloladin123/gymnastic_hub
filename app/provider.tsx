"use client";
import { Provider } from "react-redux";
import { store } from "./Store/Store"; // opdatér sti hvis nødvendig
import { AuthProvider } from "@/app/Components/AuthContext"; // opdatér sti hvis nødvendig

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}
