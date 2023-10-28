import Image from "next/image";


function Scissors () {
    return(
<section className="rounded-full bg-orange-400 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 flex items-center justify-center relative z-10  scissors cardInGame">
<article className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-scissors.svg" height={75} width={75} />
</article>
</section>
)}

function Rock () {
    return(
<section className="rounded-full bg-red-500 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 flex items-center justify-center relative z-10 rock cardInGame">
<article className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-rock.svg" height={75} width={75} />
</article>
</section>
)}

function Paper() {
    return(
<section className="rounded-full bg-blue-500 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 flex items-center justify-center relative z-10  paper cardInGame">
<article className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-paper.svg" height={75} width={75} />
</article>
</section>
)}

function Spock () {
    return(
<section className="rounded-full bg-teal-400 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 flex items-center justify-center relative z-10 spock cardInGame">
<article className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-spock.svg" height={75} width={75} />
</article>
</section>
)}

function Lizard () {
    return(
<section className="rounded-full bg-purple-500 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-20 h-20 flex items-center justify-center relative z-10  lizard cardInGame">
<article className="lg:w-32 lg:h-32 sm:w-26 sm:h-26 w-16 h-16 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-lizard.svg" height={75} width={75} />
</article>
</section>
)}

export {Scissors,Rock,Paper,Spock,Lizard}