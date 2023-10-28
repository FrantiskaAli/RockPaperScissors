import Image from "next/image"
import { Scissors, Rock, Paper, Spock, Lizard } from "./cards"
import { useState, useEffect } from "react"

export default function GameOn({ again, picked, scorePlus, scoreMinus }) {
  const options = ["R", "P", "S", "Spock", "Liz"];
  const [pcChoice, setPcChoice] = useState("");
  const [result, setResult] = useState("")
  //useEffect is used so timeout function only runs once
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      computerPick();
    }, 1000);
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

  function checkForWinner(comp, person) {
    if (comp == "S") {
      if (person == "Spock" || person == "R") {
        //score ++
        scorePlus()
        setResult("You win!")
        console.log("Human Win")
      } else if (person == "Liz" || person == "P") {
        //score--
        scoreMinus()
        setResult("You lose!")
        console.log("Computer wins")
      } else {
        setResult("It's a draw!")
        console.log("draw")
      }

    }
    if (comp == "R") {
      if (person == "P" || person == "Spock") {
        //score ++
        scorePlus()
        setResult("You win!")
        console.log("Human Win")
      } else if (person == "Liz" || person == "S") {
        //score--
        scoreMinus()
        setResult("You lose!")
        console.log("Computer wins")
      } else {
        setResult("It's a draw!")
        console.log("draw")
      }

    }
    if (comp == "P") {
      if (person == "S" || person == "Liz") {
        //score ++
        scorePlus()
        setResult("You win!")
        console.log("Human Win")
      } else if (person == "R" || person == "Spock") {
        //score --
        scoreMinus()
        setResult("You lose!")
        console.log("Computer wins")
      } else {
        setResult("It's a draw!")
        console.log("draw")
      }

    }
    if (comp == "Liz") {
      if (person == "S" || person == "R") {
        //score ++
        scorePlus()
        setResult("You win!")
        console.log("Human Win")
      } else if (person == "Spock" || person == "P") {
        //score nothing
        scoreMinus()
        setResult("You lose!")
        console.log("Computer wins")
      } else {
        setResult("It's a draw!")
        console.log("draw")
      }

    }
    if (comp == "Spock") {
      if (person == "P" || person == "Liz") {
        //score ++
        scorePlus()
        setResult("You win!")
        console.log("Human Win")
      } else if (person == "S" || person == "R") {
        //score --
        scoreMinus()
        setResult("You lose!")
        console.log("Computer wins")
      } else {
        setResult("It's a draw!")
        console.log("draw")
      }

    }
  }






  return (
    <article className="flex flex-col w-2/3 h-1/2 items-center justify-evenly">
      <section className="flex w-full justify-between px-20">
        <h3 className="text-white text-xl uppercase font-semibold  sm:flex hidden">You picked</h3>
        <h3 className="text-white text-xl uppercase font-semibold sm:flex hidden">House picked</h3>
      </section>
      <section className="flex w-full justify-evenly items-center">
        <section className="relative bg-blue-950 rounded-full">


          {picked == "S" && <Scissors />}
          {picked == "R" && <Rock />}
          {picked == "P" && <Paper />}
          {picked == "Spock" && <Spock />}
          {picked == "Liz" && <Lizard />}

          {result == "You win!" &&
            <article className="absolute top-0 w-full h-full bg-white winner rounded-full ">

            </article>
          }
          {result == "It's a draw!" &&
            <article className="absolute top-0 w-full h-full bg-white winner rounded-full ">

            </article>
          }
        </section>
         <section className="resultAnn">
          <h4 className="text-4xl uppercase font-bold text-white tracking-tight mb-4">{result}</h4>
          <button onClick={() => again()} className="w-full bg-white rounded-xl py-2 uppercase font-semibold text-blue-900 shadow-md shadow-black" >Play again</button>
        </section>
        <section className="relative rounded-full bg-blue-950">
          {pcChoice == "S" && <Scissors />}
          {pcChoice == "R" && <Rock />}
          {pcChoice == "P" && <Paper />}
          {pcChoice == "Spock" && <Spock />}
          {pcChoice == "Liz" && <Lizard />}
          {pcChoice == "" && <section className="rounded-full bg-black/[.3] w-40 h-40 flex items-center justify-center" />}
          {result == "You lose!" &&
            <article className="absolute top-0 w-full h-full  winner rounded-full ">

            </article>
          }
          {result == "It's a draw!" &&
            <article className="absolute top-0 w-full h-full  winner rounded-full ">

            </article>
          }
        </section>
      </section>
    </article>
  )
}
