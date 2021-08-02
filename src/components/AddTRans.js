import { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import './Addtrans.css';

const AddTrans = () => {

    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
       e.preventDefault();
       const newTransaction = {
           id: Math.floor(Math.random() * 10000000),
           text, amount: +amount
       }
       addTransaction( newTransaction );
    }

    return (
        <div>
            <div className="text-uppercase">
                Add Transaction
            </div>
            <form onSubmit={onSubmit}>
                <label htmlFor="text">Text</label>
                <input className="box mb" type="text" value={text} onChange={ (e) => setText(e.target.value) } placeholder="Enter Text" />
                <label htmlFor="number">
                    Text
                    <br/>
                    (Negative - expense, positive - income)
                </label>
                <input className="box mb" type="number" value={ amount } onChange={ (e) => setAmount(e.target.value) } placeholder="Enter Value" />
                <button className="btn text-uppercase">Add Transaction</button>
            </form>
        </div>
    );
}
 
export default AddTrans;