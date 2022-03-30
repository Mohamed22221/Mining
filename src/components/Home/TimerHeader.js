import React from 'react'
import styled from "styled-components"
import { useState, useEffect } from "react"
const TimerHeader = () => {
  const [days, setDays] = useState(10)
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(10)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("Jun 31, 2022 00:00:00").getTime()
      const today = new Date().getTime()

      const timeDiff = endDate - today

      const seconds = 1000
      const minutes = seconds * 60
      const hours = minutes * 60
      const days = hours * 24

      let timeDays = Math.floor(timeDiff / days)
      let timeHours = Math.floor((timeDiff % days) / hours)
      let timeMinutes = Math.floor((timeDiff % hours) / minutes)
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

      setDays(timeDays)
      setHours(timeHours)
      setMinutes(timeMinutes)
      setSeconds(timeSeconds)
      setIsLoading(false)
    }

    setInterval(countdown, 1000)
  }, [])
  return (
    <StyleTimer>
        <h4>SALES END IN</h4>
        <div className='timer'>
        {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="container">
          

          <div className="countdown">
            <article>
              <p>{days}</p>
              <h3>DAY</h3>
            </article>
            <article>
              <p>{hours}</p>
              <h3>HRS</h3>
            </article>
            <article>
              <p>{minutes}</p>
              <h3>MIN</h3>
            </article>
            <article>
              <p>{seconds}</p>
              <h3>SEC</h3>
            </article>
          </div>
        </section>
      )}
        </div>
        <button>Buy Cripto Tokens Now ?</button>
    </StyleTimer>
  )
}
const StyleTimer = styled.div`
background-color: #ffffffc4;
padding: 20px 0;
text-align: center;
color: var(--primary-color-obacity);
h4{
  padding: 20px;
  font-weight: bold;
}
button{
  all: unset;
  padding: 10px 20px;
  background-color: var(--primary-color-obacity);
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background-color: var(--primary-color);
  }
}
.container{
  background-color: white;
  padding: 10px 7px;
  width: 100%;
  margin-bottom: 20px;
  .countdown{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  article:not(:last-child){
  position: relative;
  &::after{
    content: "";
    position: absolute;
    top: -18px;
    left: 63px;
    height: 104px;
    width: 1px;
    opacity: 0.2;
    background-color: black;

  }
}
article h3{
  padding: 5px;
  color: black;
  font-size: 15px;
  font-weight: bold;
  
}
article p{
  color: var(--orange-color);
  font-size: 28px;
  font-weight: 800;
}

}
}


`
export default TimerHeader