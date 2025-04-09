import React from 'react'

const Greeting = () => {
    // JAVA 스크립트 코드
    const name ="이준범";
    const classNames = ["title","text-large"];
    classNames.join(',')
    //html 코드
  return (
    <div>
        <h1 className = {`${classNames.join("")}`}>
            안녕하세요! {name} 방문자님
        </h1>
        <p>오늘도 즐거운 교육 되세요!</p>
    </div>
  )
}

export default Greeting