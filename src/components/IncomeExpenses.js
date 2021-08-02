import './IncomeExpenses.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc+=item),0) * -1).toFixed(2);

    return ( 
        <div className="box flex mb">
            <div className="box_half text-center border-right">
                <h4 className="text-uppercase text-s font-weight-bold">
                    Income
                </h4>
                <div id="money_plus" className="money plus">
                    ${income}
                </div>
            </div>
            <div className="box_half text-center">
                <h4 className="text-uppercase text-s font-weight-bold">
                    Expenses
                </h4>
                <div id="money_minus" className="money minus">
                    ${expense}
                </div>
            </div>
        </div>
     );
}
 
export default IncomeExpenses;