import Image from "next/image";

interface subFields {
  image: string
  url: string
  step: string
  text: string
  ctaText: string
  reverse: boolean
}

interface props {
  header: string
  blocks: [subFields]
}



const ImageWithTextCtaColumn = (props: props) => {

  return (
      <section className="section-3 bg-white">
      <div className="mx-auto py-6">
        <div className="flex flex-row justify-center items-center mb-4">
          <hr className="my-1 border-2 border-black w-16" />
          <h2 className="mx-4"><span className='uppercase font-melbourne text-3xl text-black'>{props.header}</span></h2>
          <hr className="my-1 border-2 border-black w-16" />
        </div>

        <div className={`flex flex-col w-[1100px] mx-auto`}>
            {
              props.blocks.map(i => (
                    <a href={i.url} className={`flex m-5 ${i.reverse ? 'flex-row-reverse' : ''}`}>
                      <div className="w-full">
                        <Image
                          src={i.image}
                          className="bg-lime-600 justify-center items-center"
                          alt="logo"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className={`flex flex-col justify-center items-center p-6 w-full ${i.reverse ? 'pr-16' : 'pl-16'}`}>
                        <div className="border-b-2 border-[#936f43] w-full">
                          <h3 className="font-barlow uppercase text-[#936f43] text-xl mb-3 w-52">{i.step}</h3>
                        </div>
                        <div className="w-full">
                          <div className="flex flex-col text-xl text-[#595959] font-garamond mt-3">{i.text}</div>
                          <button className="bg-yellow-800 text-white font-barlow text-xl uppercase px-5 py-2 min-w-[190px] mt-5">{i.ctaText}</button>
                        </div>
                      </div>
                    </a>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default ImageWithTextCtaColumn;