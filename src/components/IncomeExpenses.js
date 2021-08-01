import './IncomeExpenses.css';

const IncomeExpenses = () => {
    return ( 
        <div className="box flex mb">
            <div className="box_half text-center border-right">
                <h4 className="text-uppercase text-s font-weight-bold">
                    Income
                </h4>
                <div id="money_plus" className="money plus">
                    +$0.00
                </div>
            </div>
            <div className="box_half text-center">
                <h4 className="text-uppercase text-s font-weight-bold">
                    Expenses
                </h4>
                <div id="money_minus" className="money minus">
                    -$0.00
                </div>
            </div>
        </div>
     );
}
 
export default IncomeExpenses;