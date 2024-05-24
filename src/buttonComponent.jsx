import {useState} from 'react'
import "./App.css"
const Button = () => {
    const [count, setCount] = useState(0);
    const [like,setLike] = useState(true);

    const conditionCheck = () => {
        if(like==true){
            handleIncrement();
            setLike(false)
        }
        else{
            handleDecrement();
            setLike(true)
        }
    }
    
    //condition=true ? {handleIncrement()} : {handleDecrement()
    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }
    return (
        <div className="main">
            <p className="display">{count}</p>
            <button type="button" 
                    onClick={conditionCheck} 
                    className="button" 
                    text="Like">
                {like ? "Unlike" : "Like"}
            </button>
        </div>
    )
}

export default Button;
