import React from 'react'
import { CardWrapper, CardHeader, CardHeading, CardBody, DiceButton } from './QuoteCard.style'
import PatDiv from "./pattern-divider-desktop.svg"
import DiceIcon from "./icon-dice.svg"
import { useState, useEffect } from 'react'

function QuoteCard() {

    const [advice, setAdvice] = useState([])

    const fetchAdvice = async () => {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      setAdvice(data.slip)
    }
  
    useEffect(() => {
      fetchAdvice()
    }, [])

  return (
    <div>
        <CardWrapper>
            <CardHeader>
                <CardHeading>Advice #{advice.id}</CardHeading>
            </CardHeader>
            
            <CardBody>
            {advice.advice}
            </CardBody>
            <img src={PatDiv} style={{ height: 15, width: 370, paddingBottom: 40}} alt="PathDivider" className='PathDiv' />
            
        </CardWrapper>
        <DiceButton onClick={fetchAdvice}>
        <img src={DiceIcon} style={{ height: 30, width: 30, paddingTop: 7}} alt="DiceButton" className='DiceButton' />
        </DiceButton>
    </div>
  )
}

export default QuoteCard