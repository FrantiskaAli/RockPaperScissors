import Image from "next/image";


function Scissors () {
    return(
<section className="rounded-full bg-orange-400 w-52 h-52 flex items-center justify-center scissors">
<article className="w-36 h-36 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-scissors.svg" height={75} width={75} />
</article>
</section>
)}

function Rock () {
    return(
<section className="rounded-full bg-orange-400 w-52 h-52 flex items-center justify-center scissors">
<article className="w-36 h-36 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-rock.svg" height={75} width={75} />
</article>
</section>
)}

function Paper() {
    return(
<section className="rounded-full bg-orange-400 w-52 h-52 flex items-center justify-center scissors">
<article className="w-36 h-36 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-paper.svg" height={75} width={75} />
</article>
</section>
)}

function Spock () {
    return(
<section className="rounded-full bg-orange-400 w-52 h-52 flex items-center justify-center scissors">
<article className="w-36 h-36 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-spock.svg" height={75} width={75} />
</article>
</section>
)}

function Lizard () {
    return(
<section className="rounded-full bg-orange-400 w-52 h-52 flex items-center justify-center scissors">
<article className="w-36 h-36 rounded-full px-4 py-2 bg-white  border-t-8 border-gray-300 flex justify-center items-center">
  <Image src="/images/icon-lizard.svg" height={75} width={75} />
</article>
</section>
)}

export {Scissors,Rock,Paper,Spock,Lizard}