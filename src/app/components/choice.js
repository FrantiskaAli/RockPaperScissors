import Image from "next/image";


export default function MainGame(){

    return(
        
        <article className="grid grid-cols-4 h-2/3 w-2/4 mt-12">
        <section className="ring-blue col-start-2 col-span-2 flex justify-center items-center">
          <article className="w-32 h-32 rounded-full px-4 py-2 bg-white ring-8 ring-orange-400 border-t-8 border-gray-300 flex justify-center items-center">
          <Image src="/images/icon-scissors.svg" height={75} width={75}/>
          </article>
        </section>
        <section className="rounded-full ring-4 ring-blue col-start-1 col-span-1 flex justify-center items-center">
        <article className="w-32 h-32 rounded-full px-4 py-2 bg-white ring-8 ring-orange-400 border-t-8 border-gray-300  flex justify-center items-center">
          <Image src="/images/icon-spock.svg" height={75} width={75}/>
          </article>
        </section>
        <section className="rounded-full ring-4 ring-blue col-start-4 col-span-1 flex justify-center items-center">
        <article className="w-32 h-32 rounded-full px-4 py-2 bg-white ring-8 ring-orange-400 border-t-8 border-gray-300 flex justify-center items-center">
          <Image src="/images/icon-paper.svg" height={75} width={75}/>
          </article>
        </section>
        <section className="rounded-full ring-4 ring-blue col-start-2 col-span-1 flex justify-center items-center">
        <article className="w-32 h-32 rounded-full px-4 py-2 bg-white ring-8 ring-orange-400 border-t-8 border-gray-300  flex justify-center items-center">
          <Image src="/images/icon-lizard.svg" height={75} width={75}/>
          </article>
        </section>
        <section className="rounded-full ring-4 ring-blue col-start-3 col-span-1 flex justify-center items-center"> 
        <article className="w-32 h-32 rounded-full px-4 py-2 bg-white ring-8 ring-orange-400 border-t-8 border-gray-300  flex justify-center items-center">
          <Image src="/images/icon-rock.svg" height={75} width={75}/>
          </article>
        </section>
      </article>

    )
}