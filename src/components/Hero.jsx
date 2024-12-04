import  { useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState( 1);
  const [hasClicked, setHasClicked] = useState(false)
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 3 ;
  const  nextVideoRef = useRef(null);

  const handleMiniVdClick = () =>{
    setHasClicked(true)
    setCurrentIndex(upcomingVideoIndex)
  }
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1)
  }

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className='relative h-dvh w-screen overflow-hidden'>
        <div id='video-frame' className='relative h-dvh z-10 w-screen overflow-hidden rounded-lg bg-blue-75'>
          <div>
            <div className='mask-clip-path absolute-center absolute z-50 top-64 cursor-pointer overflow-hidden rounded-lg'>
              <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100 hover:scale-100'>
                <video
                  src={getVideoSrc(upcomingVideoIndex)}
                  ref={nextVideoRef}
                  loop
                  muted
                  id='current-video'
                  className='size-64 origin-center object-center scale-150 object-cover'
                  onLoadedData={handleVideoLoad}
                  />
              </div>
            </div>

            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              loopmuted
              id="next-video"
              className='absolute-center absolute z-20 invisible size-64 object-cover object-center'
              onLoadedData={handleVideoLoad}/>

            <video 
              src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex )}
              // autoPlay
              loop
              muted
              className='absolute left-0 top-0 object-center size-full object-cover'
              onLoadedData={handleVideoLoad}/>
          </div>
          <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
            G<b>A</b>ming
          </h1>

          <div className='absolute left-0 top-0 size-full z-40'>
            <div className='mt-24 px-5 sm:px-10'>
              <h1 className='hero-heading text-blue-100 special-font'>redefi <b>n</b>e</h1>

              <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                Enter the Metagame Layer <br/> Unleash the play economy
              </p>
              <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow/>} containerClass="bg-yellow-300 flex-center gap-1"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero