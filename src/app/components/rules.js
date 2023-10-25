import Image from "next/image"


export default function Rules({exit}){

    return(
        <section className="w-screen h-screen absolute top-0 left-0 bg-black/[.6] flex justify-center items-center">

            <article>
                <h2>Rules</h2>
                <Image src="/images/icon-close.svg" width={20} height={20} onClick={exit}/>
                <figure>
                    <Image src="/images/image-rules-bonus.svg" height={200} width={200}/>
                </figure>
            </article>

        </section>
    )
}