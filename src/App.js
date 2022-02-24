import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search/Search';
import Reports from './components/report/Reports';
import Tables from './components/table/Tables';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer.jsx';
import DelegateForm from './components/form/delegateForm';
import UsersTable from 'components/table/UsersTable';
import DelegatesTable from 'components/table/DelegatesTable';




function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/menu" component={Menu} />
        <Route path="/search" component={Search} />
        <Route path="/reports" component={Reports} />
        <Route path="/tables" component={Tables} />
        <Route path="/delegate-form" component={DelegateForm} />
        <Route path="/users-table" component={UsersTable} />
        <Route path="/delegates-table" component={DelegatesTable} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
