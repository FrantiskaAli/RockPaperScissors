'use client'
import MainGame from "./components/pick";
import Rules from "./components/rules";
import GameOn from "./components/game";
import { useState } from "react";


export default function Home() {
  //this set of code is states for when opening another part of the game view
  const [rules, setRules] = useState(false)
  const [pick, setPick] = useState(true);
  const [result, setResult] = useState({
    open: false,
    picked: ""
  })

  function onPick(choice) {
    switch (choice) {
      case "R":
        setResult({ ...result, open: true, picked: "R" })
        setPick(false)
        break;
      case "P":
        setResult({ ...result, open: true, picked: "P" })
        setPick(false)
        break;
      case "S":
        setResult({ ...result, open: true, picked: "S" })
        setPick(false)
        break;
      case "Spock":
        setResult({ ...result, open: true, picked: "Spock" })
        setPick(false)
        break;
      case "Liz":
        setResult({ ...result, open: true, picked: "Liz" })
        setPick(false)
        break;
    }

  }
  function again() {
    setResult({ ...result, open: false, picked: "" })
    setPick(true)
  }



  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <header className="w-2/3 flex justify-between mt-6 ring-2 rounded-xl p-6">
        <section className="w-1/4 uppercase  font-bold">
          <h2 className="leading-none">Rock <br />
            Paper<br />
            Scissors <br />
            Lizard<br />
            Spock</h2>
        </section>
        <section className="p-2 text-center w-32">
          <h3>
            Score
          </h3>
          <h2>
            12
          </h2>
        </section>
      </header>

      {pick && <MainGame pick={onPick} />}

      {result.open && <GameOn again={again} picked={result.picked} />}

      {rules && <Rules exit={() => setRules(false)} />}
      <button className="absolute bottom-10 right-10 py-2 px-8 uppercase rounded-lg border-2px border-gray-200" onClick={() => setRules(true)}>Rules</button>
    </main>
  )

}
