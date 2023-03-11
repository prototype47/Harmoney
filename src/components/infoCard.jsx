import React from 'react'

const isIncome = Math.round(Math.random());

const infoCard = () => {
    return (
        <div style={{ textAlign: "center", padding: "0 10%" }}>
            Try saying: <br />
            Add {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '100 dollars/rupees ' : '47 dollars/rupees '} 
            in category {isIncome ? 'Business ' : 'Travel '}
            for {isIncome ? 'Monday' : 'Sunday'}...
        </div>
    )
}

export default infoCard