import { Children } from "react";
import { globalProvider } from "./globalProvider";

export function Providers({ Children }) {
  return <globalProvider>{Children}</globalProvider>;
}
