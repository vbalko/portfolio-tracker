const { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } = require("react-router-dom");

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

//pages
import Home from "pages/Home";
import About from "pages/About";

//layouts
import RootLayout from "layouts/RootLayout";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

const getRoutes = (allRoutes) =>
allRoutes.map((route) => {
  if (route.collapse) {
    return getRoutes(route.collapse);
  }

  if (route.route) {
    return <Route exact path={route.route} element={route.component} key={route.key} />;
  }

  return null;
});


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {getRoutes(routes)}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
        </Route>
    )
)

function App() {
    const [controller, dispatch] = useMaterialUIController();
    const {
        layout,
        darkMode,
      } = controller;     
    return (
        <ThemeProvider theme={darkMode ? themeDark : theme}>
            <CssBaseline />
            {layout === "dashboard" && (
            <>

          {/* <Configurator /> */}
          {/* {configsButton} */}
        </>
         )}
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;