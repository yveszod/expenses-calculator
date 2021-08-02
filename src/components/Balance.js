import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce(( acc, item ) => (acc+=item), 0 ).toFixed(2);

    return ( 
        <div className="mb">
            <div className="text-uppercase balance_title">
                Your Balance
            </div>
            <div className="balance_value font-weight-bold text-lg">
                ${total}
            </div>
        </div>
     );
}
 
export default Balance;