import React from 'react'

function Finishheader(props) {
   let numstep = null;
   props.steps.map((step) => {
      if (step.active) {
         numstep = step.number;
      } return;
   });

   const moveBySteps = (num) => {
      const n = numstep + num
      props.setStep(
         props.steps.map((step) => {
            if (step.number === n) { step.active = true } else { step.active = false }
            return step
         })
      )
   };
   return (
      <div className="finish-header">
         <div>
            <h5>{props.select} ({props.period})</h5>
            <p className="finish-change" onClick={() => moveBySteps(-2)}>Change</p>
         </div>
         <div className="finish-price">${props.price}{props.per}</div>
      </div>
   )
}

export default Finishheader