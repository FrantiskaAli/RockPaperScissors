import Image from "next/image"


export default function Rules({exit}){

    return(
        <section className="w-screen h-screen absolute top-0 left-0 bg-black/[.6] flex justify-center items-center">

            <article className="bg-white p-10 w-1/3 h-1/2 rounded-xl shadow-md">
                <section className="w-full flex justify-between mb-10">
                <h2 className="font-bold uppercase text-2xl" >Rules</h2>
                <Image src="/images/icon-close.svg" width={35} height={15} onClick={exit} className="cursor-pointer" alt="exit sign"/>
                </section>
                <figure className="flex justify-center">
                    <Image src="/images/image-rules-bonus.svg" height={300} width={300} alt="scissors beats paper and lizard, paper beats rock and spock, rock beats lizard and scissors,lizard beats spock and paper, spock beats scissors and rock"/>
                </figure>
            </article>

        </section>
    )
}