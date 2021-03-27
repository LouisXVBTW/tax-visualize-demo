import Main from './pages/main';
import Calendar from './pages/calendar';
import Charts from './pages/charts';
import { Switch, Route, BrowserRouter} from 'react-router-dom';


function RouterFile() {
  return (
    <div>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/charts' component={Charts} />
      </div>

    </div>
  );
}

export default RouterFile;
