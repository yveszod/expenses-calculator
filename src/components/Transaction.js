import './Transaction.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <div className={`trans_action_item flex position-relative box ${ transaction.amount < 0 ? 'negative' : 'positive' }`}>
            <div className="trans_action_item_title">
                {transaction.text}
            </div>
            <div className="trans_action_item_value">
                {sign}${Math.abs(transaction.amount)}
            </div>
            <div className="trans_action_item_actions">
                <button
                onClick={() => deleteTransaction(transaction.id)}
                className="btn btn_delete"><img src="delete.svg"/></button>
            </div>
        </div>
    );
}
 
export default Transaction;