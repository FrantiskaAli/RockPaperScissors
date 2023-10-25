

export default function GameOn(){


    return(
        <article>
            <section>
            <h3>You picked</h3>
            <article className="w-32 h-32 rounded-full px-4 py-2 bg-white ring-8 ring-orange-400 border-t-8 border-gray-300 flex justify-center items-center">
          <Image src="/images/icon-scissors.svg" height={75} width={75}/>
          </article>
          </section>
          <section>
            <h4>You lose</h4>
            <button>Play again</button>
          </section>
          <section>
            <h3>The house picked</h3>
          <article className="w-32 h-32 rounded-full px-4 py-2 bg-white ring-8 ring-orange-400 border-t-8 border-gray-300 flex justify-center items-center">
          <Image src="/images/icon-scissors.svg" height={75} width={75}/>
          </article>
          </section>
        </article>
    )
}