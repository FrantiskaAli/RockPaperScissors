import Image from "next/image";


export default function MainGame() {

  return (

    <article className="grid grid-cols-4 h-2/3 w-2/4 mt-12 relative choice">
     
      <section className="col-start-2 col-span-2 flex justify-center items-center h-fit">
        <section className="rounded-full bg-orange-400 w-40 h-40 flex items-center justify-center scissors">
          <article className="w-32 h-32 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-scissors.svg" height={75} width={75} />
          </article>
        </section>
      </section>
      <section className="rounded-full   col-start-1 col-span-1 flex justify-center items-center h-fit">
        <section className="rounded-full bg-orange-400 w-40 h-40 flex items-center justify-center spock">
          <article className="w-32 h-32 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-spock.svg" height={75} width={75} />
          </article>
        </section>
      </section>
      <section className="rounded-full   col-start-4 col-span-1 flex justify-center items-center h-fit">
        <section className="rounded-full bg-orange-400 w-40 h-40 flex items-center justify-center paper">
          <article className="w-32 h-32 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-paper.svg" height={75} width={75} />
          </article>
        </section>
      </section>
      <section className="rounded-full   col-start-1  col-span-2 flex justify-center items-center h-fit ">
        <section className="rounded-full bg-orange-400 w-40 h-40 flex items-center justify-center lizard">
          <article className="w-32 h-32 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-lizard.svg" height={75} width={75} />
          </article>
        </section>
      </section>
      <section className="rounded-full   col-start-3 col-span-2 flex justify-center items-center h-fit">
        <section className="rounded-full bg-orange-400 w-40 h-40 flex items-center justify-center rock">
          <article className="w-32 h-32 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-rock.svg" height={75} width={75} />
          </article>
        </section>
      </section>
   

    </article>

  )
}
// <article className="absolute w-full h-4/5 choice top-12 ">

//</article>