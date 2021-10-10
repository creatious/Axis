import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Search from './components/search/Search';
import Reports from './components/report/Reports';
import Tables from './components/table/Tables';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer.jsx';
import DelegateForm from './components/form/delegateForm';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/menu" component={Menu} />
        <Route path="/search" component={Search} />
        <Route path="/reports" component={Reports} />
        <Route path="/tables" component={Tables} />
        <Route path="/delegateForm" component={DelegateForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
