import Image from "next/image"


export default function Rules({exit}){

    return(
        <section className="w-screen h-screen absolute top-0 left-0 bg-black/[.6] flex justify-center items-center z-40">

            <article className="bg-white p-10 w-full h-full  sm:w-1/3 sm:h-fit rounded-xl shadow-md shadow-black relative">
                <section className="sm:w-full text-center mt-20 sm:mt-auto mb-20">
                <h2 className="font-bold uppercase text-2xl" >Rules</h2>
                <Image src="/images/icon-close.svg" width={35} height={15} onClick={exit} className="cursor-pointer absolute sm:right-10 sm:top-10 bottom-16 right-1/2" alt="exit sign"/>
                </section>
                <figure className="flex justify-center sm:mt-auto mt-10">
                    <Image src="/images/image-rules-bonus.svg" height={300} width={300} alt="scissors beats paper and lizard, paper beats rock and spock, rock beats lizard and scissors,lizard beats spock and paper, spock beats scissors and rock"/>
                </figure>
            </article>

        </section>
    )
}