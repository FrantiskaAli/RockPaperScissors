import Image from "next/image";


export default function MainGame({pick, imgSize}) {

  return (

    <article className="grid grid-cols-4 sm:h-2/3 h-1/2  md:w-2/4 w-screen  relative choice ">
     
      <section className="col-start-2 col-span-2 flex justify-center items-center h-fit">
        <section className="rounded-full bg-orange-400 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 flex items-center justify-center scissors transform hover:scale-110 ease-in-out cursor-pointer mt-10">
          <article onClick={()=>pick("S")} className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-scissors.svg" height={imgSize} width={imgSize} alt="scissors"/>
          </article>
        </section>
      </section>
      <section className="rounded-full   col-start-1 sm:col-span-1 sm:col-start-1 col-span-2 flex justify-center items-center h-fit">
        <section className="rounded-full bg-teal-400 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20  flex items-center justify-center spock transform hover:scale-110 ease-in-out cursor-pointer">
          <article onClick={()=>pick("Spock")}  className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-spock.svg" height={imgSize} width={imgSize} alt="spock"/>
          </article>
        </section>
      </section>
      <section className="rounded-full   sm:col-start-4  sm:col-span-1 col-span-2 flex justify-center items-center h-fit">
        <section className="rounded-full bg-blue-500 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20  flex items-center justify-center paper transform hover:scale-110 ease-in-out cursor-pointer">
          <article onClick={()=>pick("P")}  className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-paper.svg" height={imgSize} width={imgSize} alt="paper" />
          </article>
        </section>
      </section>
      <section className="rounded-full   sm:col-start-1 col-start-2 col-span-1 sm:col-span-2 flex justify-center items-center h-fit ">
        <section className="rounded-full bg-purple-500 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20  flex items-center justify-center lizard transform hover:scale-110 ease-in-out cursor-pointer">
          <article onClick={()=>pick("Liz")}  className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-lizard.svg" height={imgSize} width={imgSize} alt="Lizard" />
          </article>
        </section>
      </section>
      <section className="rounded-full   sm:col-start-3 col-start-3 col-span-1 sm:col-span-2 flex justify-center items-center h-fit">
        <section className="rounded-full bg-red-500 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20  flex items-center justify-center rock transform hover:scale-110 ease-in-out cursor-pointer">
          <article onClick={()=>pick("R")}  className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16  rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
            <Image src="/images/icon-rock.svg" height={imgSize} width={imgSize} alt="rock" />
          </article>
        </section>
      </section>
   

    </article>

  )
}
