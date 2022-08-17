import Image from "next/image";

interface subFields {
  image: string,
  imageLink: string,
  headerLink: string,
  header: string,
  mainText: string,
  ctaText: string,
  ctaLink: string
}

interface props {
  header: string
  blocks: [subFields]
}



const ImageWithTextCta = (props: props) => {

  console.log(props)
  return (
      <section className="section-3 bg-white">
      <div className="mx-auto py-6">
        <div className="flex flex-row justify-center items-center mb-4">
          <hr className="my-1 border-2 border-black w-16" />
          <h2 className="mx-4"><span className='uppercase font-melbourne text-3xl text-black'>{props.header}</span></h2>
          <hr className="my-1 border-2 border-black w-16" />
        </div>

        <div className={`flex w-[1200px] mx-auto`}>
            {
              props.blocks.map(i => (
                  <div className="m-5 bg-[#f5f5f5]">
                      <div>
                        <a href={i.imageLink}>
                          <Image
                            src={i.image}
                            className="bg-lime-600"
                            alt="logo"
                            width={600}
                            height={450}
                          />
                        </a>
                      </div>
                      <div className="flex flex-col justify-center items-center p-6">
                        <h3 className="font-melbourne uppercase text-black text-3xl mb-3"><a href={i.headerLink} data-location="hp-2-up" data-description="">{i.header}</a></h3>
                        <div className="flex flex-col justify-center items-center text-xl text-black font-garamond">{i.mainText}</div>
                        <div className="mt-4 flex justify-center items-center">
                          <a href={i.ctaLink}><button className="bg-yellow-800 text-white font-barlow text-xl uppercase px-5 py-2 min-w-[190px]">{i.ctaText}</button></a>
                        </div>
                      </div>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default ImageWithTextCta;