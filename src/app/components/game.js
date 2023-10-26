import Image from "next/image"

export default function GameOn() {


  return (
    <article className="flex flex-col w-2/3 h-1/2 items-center justify-evenly">
      <section className="flex w-4/5 justify-between px-20">
        <h3>You picked</h3>
        <h3>House picked</h3>
      </section>
      <section className="flex w-full justify-evenly items-center">
      <section>
        <section className="rounded-full bg-orange-400 w-52 h-52 flex items-center justify-center scissors">
          <article className="w-36 h-36 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-scissors.svg" height={75} width={75} />
          </article>
        </section>
       
      </section>
      <section>
        <h4>You lose</h4>
        <button>Play again</button>
      </section>
      <section>

        <section className="rounded-full bg-orange-400 w-40 h-40 flex items-center justify-center">

        </section>
      </section>
      </section>
    </article>
  )
}

/* <section className="rounded-full bg-orange-400 w-52 h-52 flex items-center justify-center scissors">
          <article className="w-36 h-36 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
          <Image src="/images/icon-scissors.svg" height={75} width={75} />
        </article>
        </section>*/