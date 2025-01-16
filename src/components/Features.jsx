import React from 'react'

const BentoCard = ({src, title, description}) => {
    return (
        <div className='relative size-full'>
            <video src={src} className='absolute left-0 top-0 size-full object-cover object-center' loop muted autoPlay/>
            <div className='z-10 flex size-full p-5 text-blue-50 relative flex-col justify-between'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description &&( <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>)}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-lg text-blue-50'>Into the meta game Layer</p>

            <p className='text-blue-50 max-w-md font-circular-web text-lg opacity-50'>
            Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
            </p>
        </div>

        <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard
                src='videos/feature-1.mp4'
                title={ <>radi<b>n</b>t</> }
                description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    />
          </div>
          <div className='grid h-[135vh] grid-cols-2 grid-row-3'>
            <div className='row-span-1 md:col-span-1 md:row-span-2 bento-tilt_1'>
                <BentoCard
                    src='videos/feature-2.mp4'
                    title={ <>zig<b>m</b>a</> }
                    description='An anime and gaming-inspired NFT collection - the IP primed for expansion.'
                />
            </div>
            <div className='bento-tilt_1 row-span-1 ms-32 md:ms-0 md:col-span-1 '>
                <BentoCard
                    src='videos/feature-3.mp4'
                    title={ <>N<b>e</b>xus</> }
                    description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                />
            </div>
            <div className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                <BentoCard
                    src='videos/feature-4.mp4'
                    title={ <>az<b>u</b>l</> }
                    description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Features
