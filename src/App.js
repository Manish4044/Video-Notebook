import { makeStyles } from '@mui/styles';
import {Header, Sidebar, Home, NotePage} from './components';
import {Routes, Route} from 'react-router-dom';
import {Service} from './services';
import { DRAWER_WIDTH } from './constants';
import { Navigate } from 'react-router-dom';
const DEFAULT_BOOK = 'NiuoExCkuwwMFI6v3ybl';

const useStyles = makeStyles({
  root: {
    backgroundColor:"#FAFAFA",
    height:"100vh",
  },
  main:{
    display:"flex",
    flexDirection:"column",
    height:"100%",
    marginLeft: `65px`
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar/>
      <div className={classes.main}>
        <Header/>
        <Routes>
          <Route exact path='/' element={ <Navigate to={`/${DEFAULT_BOOK}`} /> }/>
          <Route exact path='/:notebook_id' element={<Home/>} />
          <Route exact path='/:notebook_id/video/:note_id' element={<NotePage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
