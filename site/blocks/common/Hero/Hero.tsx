import Image from 'next/image'
import s from './Hero.module.css'

interface heroProps {
    headline: string,
    subline: string,
    image: string
}

const Hero = ({ headline, subline, image}: heroProps) => {
    return (
        <div className={s.heroWrapper}>
            <div className={s.imageWrapper}>
                <Image
                    priority
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="hero image example"
                    unoptimized
                />
            </div>

            <div className={s.heroContent}>
                <h1>{headline}</h1>
                <p>{subline}</p>
            </div>
        </div>
    )
}

export default Hero;