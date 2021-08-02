import './Translist.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransList = () => {

    const { transactions } = useContext(GlobalContext);


    return (
        <div className="mb">
            <div className="text-uppercase">
                History
            </div>
            <div className="transaction_list">
                { transactions.map(transaction => (
                    <Transaction key={ transaction.id } transaction={transaction} />
                )) }
            </div>
        </div>
    );
}
 
export default TransList;