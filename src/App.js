import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransList from './components/TransList';
import AddTrans from './components/AddTRans';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransList />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}

export default App;
