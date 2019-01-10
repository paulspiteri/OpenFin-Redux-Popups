import { Store } from "redux";

declare global {
  interface Window {
    reduxStore: Store<any, any>;
    init: (store: any) => void;
  }
}
