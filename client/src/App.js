import React, {
  useState
} from 'react';
import {
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Materials from './components/Materials';

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

  const classes = useStyles();
  return ( <div className = {classes.root} >
    <CssBaseline / >
    <Header >
    
    </Header> 
    <Sidebar setSelectedItem = {setSelectedItem}/> 
    <main className = { classes.content} >
    <div className = {   classes.appBarSpacer}/> 
    {
      selectedItem ? <p> {`You selected: ${selectedItem}`} </p> : <p>select an item from the sidebar</p >
    }
      <div>
        {loading ? "Loading..." : <Materials items={items} /> }
      </div>
    </main> 
    </div>
  );
}

export default App;