import React, {
  useEffect,
  useState
} from 'react';

//react-router-dom components
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import {
  makeStyles,
  Theme,
  createStyles,
  ThemeProvider
} from '@material-ui/core/styles';


import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Materials from './components/Materials';

// Material Dashboard 2 React themes
import theme from 'assets/theme';

// Material Dashboard 2 React example components
import Sidenav from "components/Sidenav";

import routes from './routes';
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from './context';

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
  })
);

function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {setMiniSidenav, layout, openConfigurator, sidenavColor, whiteSidenav, transparentSidenav, darkMode} = controller;
  const { pathname } = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('/api/materials')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (setMiniSidenav && !onMouseEnter) {
      setMiniSidenav(false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if(onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) => {
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
        }
        
        if (route.route) {
          return <Route exact path={route.route} element={route.component} key={route.key} />;
        }

        return null;
      });
    };

  const classes = useStyles();

  // return (
  //   <ThemeProvider theme={darkMode ? themeDark : theme}>
  //     <CssBaseline />
  //     {layout === 'dashboard' && (
  //       <>  
  //         {/* <Sidenav
  //           color={sidenavColor}
  //           brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
  //           brandName="Portfolio Tracker"
  //           routes={routes}
  //           onMouseEnter={handleOnMouseEnter}
  //           onMouseLeave={handleOnMouseLeave}
  //           /> */}
            
  //       </>
  //     )}
  //     <Routes>
  //       {getRoutes(routes)}
  //       <Route path="*" element={<Navigate to="/dashboard" />} />
  //     </Routes>
  //   </ThemeProvider>
  // )





  return ( 
    <div className = {classes.root} >
      <CssBaseline />
      <Header>
      </Header>  
      <Sidebar setSelectedItem = { setSelectedItem} /> 
          <Sidenav
           color={sidenavColor}
          //  brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
           brandName="Portfolio Tracker"
          //  routes={routes}
          //  onMouseEnter={handleOnMouseEnter}
          //  onMouseLeave={handleOnMouseLeave}
           /> 
      <main className = {classes.content} >
        <div className = {classes.appBarSpacer}/>  
          { selectedItem ? <p> { `You selected: ${selectedItem}` } </p> : <p>select an item from the sidebar</p > } 
          <div > 
            {loading ? "Loading..." : < Materials items = {items} /> } 
          </div> 
        </main>  
        </div>
    );
  }

  export default App;