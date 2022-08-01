import React, {useState, MouseEvent} from 'react';

import {Button, ButtonPropsType} from "../Counter/Button";


export const Counter = (props: any) => {

    const [counter, setCounter] = useState(0)

    const increaseCounter = (event:MouseEvent<HTMLButtonElement>) => {
        setCounter(counter + 1)
    }
    const resetCounter = (event:MouseEvent<HTMLButtonElement>) => {
        setCounter(0)
    }


    return (
        <div className="Container">

            <div className="Counter">

                <div className="Name"><p>Counter</p></div>

                <div className="ContainerCounter">
                    <div className="">
                        <div>{counter}</div>
                    </div>

                    <div className="ContainerButton">
                        <button onClick={increaseCounter}>inc</button>

                        <button onClick={resetCounter}>rest</button>

                        {/*<Button callBack={props.resetCounter} name={props.name}/>*/}
                        {/*<Button callBack={props.increaseCounter} name={props.name}/>*/}
                    </div>

                </div>

            </div>

        </div>
    );
};

