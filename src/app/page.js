'use client'
import MainGame from "./components/pick";
import Rules from "./components/rules";
import GameOn from "./components/game";
import { useState, useEffect } from "react";


export default function Home() {
  //this set of code is states for when opening another part of the game view
  const [rules, setRules] = useState(false)
  const [pick, setPick] = useState(true);
  const [result, setResult] = useState({
    open: false,
    picked: ""
  })
  const [score,setScore]= useState(0)
  const [imgSize, setImgSize] = useState(75)
//getting window width
const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 500);
useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
useEffect(()=>{
    if (width < 1100){
      setImgSize(50)
    } else if(width < 400){
      setImgSize(15)
    } else {
      setImgSize(75)
    }
},[width])





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
      <header className="w-2/3 h-fit flex justify-between items-center mt-6 ring-2 ring-gray-400 rounded-xl  p-2 sm:p-6">
        <section className="w-1/4 uppercase font-bold leading-none">
          <h2 className="leading-none text-sm sm:text-xl sm:leading-none text-white">Rock <br />
            Paper<br />
            Scissors <br />
            Lizard<br />
            Spock</h2>
        </section>
        <section className="p-2 text-center sm:w-32  bg-white rounded-xl flex flex-col justify-around sm:justify-start">
          <h3 className="uppercase font-semibold sm:tracking-wider ">
            Score
          </h3>
          <h2 key={score} className={score > 0 ? "sm:text-6xl text-4xl font-bold text-gray-600 scorePoints":"sm:text-6xl text-4xl font-bold text-gray-600"}>
            {score}
          </h2>
        </section>
      </header>

      {pick && <MainGame pick={onPick} imgSize={imgSize}/>}

      {result.open && <GameOn again={again} picked={result.picked}  scorePlus={()=>{setScore(score + 1)}} scoreMinus={()=>{score > 0 ? setScore(score - 1) :setScore(0)}} />}

      {rules && <Rules exit={() => setRules(false)} />}
      <button className="absolute bottom-14 sm:bottom-10 sm:right-10 py-2 px-8 uppercase rounded-lg ring-2 ring-gray-400 text-white font-semibold" onClick={() => setRules(true)}>Rules</button>
    </main>
  )

}
