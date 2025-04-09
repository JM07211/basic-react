import React, { useState } from 'react'
import Button from './Button'


const Counter = () => {
// let total = 0 

const [countState, setcountS] = useState(0) //첫 번째, 데이터, 두번째. 함수


const COUNTMIN = 0
const COUNTMAX = 10

// const handleIncrease = () =>{
//     // total += 1
//     // console.log("🚀 ~ handleIncrease ~ total:", total)
//     // console.log("click!!");
//     // console.log("🚀 ~ Counter ~ setcountS:", setcountS)
//     // console.log("🚀 ~ Counter ~ countState:", countState)
//     setcountS(countState+1)
// }
// const handleDecrease = () =>{
//     // total -= 1;
//     // console.log("🚀 ~ handleDecrease ~ total:", total)
//     // console.log("click!!");
//     setcountS((prev) => prev-1)
// }

const handleCount = (type) =>{
//increase | decrease
    // setcountS( type ==="increase" ? countState +1 : countState -1)
    if (type === "increase") {
        //increase 버튼 클릭시
        countState < COUNTMAX && setcountS(countState+1);
        } else {
        countState > COUNTMIN && setcountS(countState-1);
        }
};

//view
  return (
    <div>
        <h1>{countState}</h1>
        <div style={({"display":"flex"})}>
            <Button text={"+1"} type={"increase"} onButtonClick={(type) => handleCount(type)} />
            <Button text={"-1"} type={"decrease"} onButtonClick={(type) => handleCount(type)} />
        </div>
        {/* <Button />
        <Button /> */}
        {/* <button type="button" onClick={()=>handleCount("increase")}>+</button>
        <button type="button" onClick={()=>handleCount("decrease")}> - </button> */}
    </div>
  )

}
export default Counter