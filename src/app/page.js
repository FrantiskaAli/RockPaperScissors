'use client'
import MainGame from "./components/choice";
import Rules from "./components/rules";
import GameOn from "./components/game";
import { useState } from "react";


export default function Home() {
    const [rules, setRules] = useState(false)


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
      <GameOn />
  {rules && <Rules exit={()=>setRules(false)}/>
  }
      <button className="absolute bottom-10 right-10 py-2 px-8 uppercase rounded-lg border-2px border-gray-200" onClick={()=>setRules(true)}>Rules</button>
    </main>
  )

}
