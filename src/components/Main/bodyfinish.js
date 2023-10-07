import React, { useState } from 'react';

import "./bodyfinish.css";

import Finishheader from "./finishheader";
import Finishbody from './finishbody';
import Finishres from './finishres';

export default function BodyFinish(props) {
   let total = 0;

   return (
      <div className="finish-wrap">

         <div className="finish-items">
            {props.yearly ?
               props.selects.map((sel) => {
                  if (sel.selected) {
                     total += Number(sel.price)
                     return (
                        <Finishheader
                           steps={props.steps}
                           setStep={props.setStep}
                           period={"Yearly"}
                           select={sel.select}
                           price={sel.price}
                           per={sel.yr}

                        />
                     )
                  }
               }) :

               props.selects.map((sel) => {
                  if (sel.selected) {
                     total += Number(sel.pricem)
                     return (
                        <Finishheader
                           steps={props.steps}
                           setStep={props.setStep}
                           period={"Monthly"}
                           select={sel.select}
                           price={sel.pricem}
                           per={sel.mon}
                        />
                     )
                  }
               })
            }
            <span className="underline"></span>


            {props.yearly ?
               props.addons.map((add) => {
                  if (add.selected) {
                     total += Number(add.addprice)
                     return (
                        <Finishbody
                           nameadd={add.nameadd}
                           addprice={add.addprice}
                           per={add.yr}
                        />
                     )
                  }
               }) :
               props.addons.map((add) => {
                  if (add.selected) {
                     total += Number(add.addpricem)
                     return (
                        <Finishbody
                           nameadd={add.nameadd}
                           addprice={add.addpricem}
                           per={add.mon}
                        />
                     )
                  }
               })
            }
         </div>

         <Finishres
            price={total}
            period={props.yearly ? "per year" : "per month"}
            per={props.yearly ? "/yr" : "/mon"}
         />
      </div>
   )
};
