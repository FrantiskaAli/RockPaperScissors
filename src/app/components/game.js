import Image from "next/image"
import { Scissors, Rock, Paper, Spock, Lizard } from "./cards"
import { useState, useEffect } from "react"

export default function GameOn({ again, picked,score }) {
  const options = ["R", "P", "S", "Spock", "Liz"];
  const [pcChoice, setPcChoice] = useState("");
  const [result,setResult] =useState("")
//useEffect is used so timeout function only runs once
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      computerPick();
    }, 2000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, []);
  
  function computerPick() {
    console.log("whatapp")
    const random = Math.floor((Math.random() * 5))
    setPcChoice(options[random])
    checkForWinner(options[random], picked)
   }
   
   function checkForWinner(comp,person){
    if(comp == "S"){
      if(person == "Spock" || person == "R"){
        //score ++
        score()
        setResult("You win!")
        console.log("Human Win")
      }else if(person == "Liz" || person == "P"){
        //score nothing
        setResult("You lose!")
        console.log("Computer wins")
      }else {
        setResult("It's a draw!")
        console.log("draw")}

    } 
    if(comp == "R"){
      if(person == "P" || person == "Spock"){
        //score ++
        score()
        setResult("You win!")
        console.log("Human Win")
      }else if(person == "Liz" || person == "S"){
        //score nothing
        setResult("You lose!")
        console.log("Computer wins")
      }else {
        setResult("It's a draw!")
        console.log("draw")}

    }
    if(comp == "P"){
      if(person == "S" || person == "Liz"){
        //score ++
        score()
        setResult("You win!")
        console.log("Human Win")
      }else if(person == "R" || person == "Spock"){
        //score nothing
        setResult("You lose!")
        console.log("Computer wins")
      }else {
        setResult("It's a draw!")
        console.log("draw")}

    }
    if(comp == "Liz"){
      if(person == "S" || person == "R"){
        //score ++
        score()
        setResult("You win!")
        console.log("Human Win")
      }else if(person == "Spock" || person == "P"){
        //score nothing
        setResult("You lose!")
        console.log("Computer wins")
      }else {
        setResult("It's a draw!")
        console.log("draw")}

    }
    if(comp == "Spock"){
      if(person == "P" || person == "Liz"){
        //score ++
        score()
        setResult("You win!")
        console.log("Human Win")
      }else if(person == "S" || person == "R"){
        //score nothing
        setResult("You lose!")
        console.log("Computer wins")
      }else {
        setResult("It's a draw!")
        console.log("draw")}

    }
     }






  return (
    <article className="flex flex-col w-2/3 h-1/2 items-center justify-evenly">
      <section className="flex w-4/5 justify-between px-20">
        <h3>You picked</h3>
        <h3>House picked</h3>
      </section>
      <section className="flex w-full justify-evenly items-center">
        <section>

          {picked == "S" && <Scissors />}
          {picked == "R" && <Rock />}
          {picked == "P" && <Paper />}
          {picked == "Spock" && <Spock />}
          {picked == "Liz" && <Lizard />}



        </section>
       {result.length>2 && <section>
          <h4>{result}</h4>
          <button onClick={() => again()}>Play again</button>
        </section>}
        <section>
          {pcChoice == "S" && <Scissors />}
          {pcChoice == "R" && <Rock />}
          {pcChoice == "P" && <Paper />}
          {pcChoice == "Spock" && <Spock />}
          {pcChoice == "Liz" && <Lizard />}
          {pcChoice == "" && <section className="rounded-full bg-orange-400 w-40 h-40 flex items-center justify-center" />}

        </section>
      </section>
    </article>
  )
}
