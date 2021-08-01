import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransList from './components/TransList';
import AddTrans from './components/AddTRans';

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransList />
      <AddTrans />
    </div>
  );
}

export default App;
