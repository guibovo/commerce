import Image from 'next/image'

interface heroProps {
    headline: string,
    subline: string,
    buttonText: string,
    image: string,
    superiorLine: string,
    mainText: string,
    normalValue: string,
    discountedValue: string
}

const Hero = ({ headline, subline, image, buttonText, superiorLine, mainText, normalValue, discountedValue}: heroProps) => {
    return (
        <section className="section-1 bg-white">
            <a className='text-black no-underline outline-none' href="https://biossance.com/products/award-winning-skin-test">
                <div className="top-40 left-96 absolute max-w-[25%] pr-20" style={{zIndex: 9}}>
                    <div className='pt-40'>
                        <h4 className="uppercase text-base inline-block font-barlow text-yellow-800 overflow-hidden whitespace-no-wrap">
                            <span>{superiorLine}</span>
                        </h4>
                        <h2 className="mb-4">
                            <span className="font-dtldocumenta text-3xl text-black">{headline}</span>
                        </h2>
                        <h3 className='font-barlow text-lg text-yellow-800 mb-4'>
                            <span>{subline}</span>
                        </h3>
                        <p className="font-dtldocumenta mb-4 text-black">
                            <span>{mainText}</span>
                        </p>
                        
                        <button className="bg-yellow-800 text-white font-barlow text-xl uppercase px-5 py-2 min-w-[190px]">{buttonText}</button>
                    </div>
                    <div className="absolute top-0 right-0 bg-yellow-800 p-0 text-center text-white h-24 w-24 flex items-center justify-center flex-wrap flex-col text-sm uppercase rounded-full font-barlow">
                        <span><sup>$</sup><big className="text-3xl">{discountedValue}</big></span>
                        <hr className="my-1 border border-white w-4/6"/>
                        <span>${normalValue}</span>
                    </div>
                </div>
                <Image
                    src={image}
                    className="bg-lime-600"
                    alt="hero"
                    layout='responsive'
                    width={1200} 
                    height={560}
                />
            </a>
        </section>

    )
}

export default Hero;