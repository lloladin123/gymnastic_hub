"use client"; // Required in Next.js App Router

import { Provider } from "react-redux";
import { store } from "../app/Store/Store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
