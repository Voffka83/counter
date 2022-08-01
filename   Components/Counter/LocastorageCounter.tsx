import React, {useState} from 'react';



export const LocalstorageCounter = () => {

    const [counter, setCounter] = useState(0)
    const increaseCounter = () => {
        return (
            setCounter(counter + 1)
        )
    }

    const getFromLocalStorage = () => {
        let counterValue = localStorage.getItem('counetrValue')
        if(counterValue){
            let newCounter = JSON.parse(counterValue)
            setCounter(newCounter)
        }
    }

    const setToLocalStorage =()=>{
        localStorage.setItem('counetrValue', JSON.stringify(counter))

    }

    const clearToLocalStorage = () => {
        localStorage.clear()
        setCounter(0)
    }

    return (
        <div>
            <div>{counter}</div>
            <div><button onClick={increaseCounter}>inc</button></div>
            <div><button onClick={setToLocalStorage}>setToLocalStorage</button></div>         <div><button onClick={getFromLocalStorage}>getFromLocalStorage</button></div>
            <div><button onClick={clearToLocalStorage}>clearToLocalStorage</button></div>
        </div>
    );
};

