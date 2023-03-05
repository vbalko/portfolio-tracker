import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import MainSideBar from "./components/MainSideBar";
import MainNavBar from "./components/MainNavBar";

import stylesheet from "./tailwind.css";
import css from "../css/app.css";
import { Flowbite } from "flowbite-react";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>

          <header>
            <MainNavBar />
            <MainSideBar />
          </header>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />

      </body>
    </html>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: stylesheet },
  {rel: "stylesheet", href: css}];
};
