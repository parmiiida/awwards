import React from 'react'
import AnimatedTitle from './AnimatedTitle.jsx'
import { useRef } from 'react';
import { gsap } from 'gsap';
import RoundedCorner from './RoundedCorner.jsx';
import Button from './Button.jsx';

const Story = () => {

  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <section id="story" className='min-h-dvh w-screen text-blue-50 bg-black'>
        <div className='flex flex-col size-full items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>The Murltiversal ip word</p>
            <div className='size-full relative'>
                <AnimatedTitle
                    title='The st<b>o</o>ry of <br/> a hidden real<b>m</b>'
                    containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
                />
                <div className='story-img-container'>
                  <div className='story-img-mask'>
                    <div className='story-img-content'>
                    <img
                      ref={frameRef}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseLeave}
                      onMouseEnter={handleMouseLeave}
                      src="/img/entrance.webp"
                      alt="entrance.webp"
                      className="object-contain"
                   />
                    </div>
                  </div>

                  <RoundedCorner />
                </div>
            </div>

            <div className="mt-0 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5 bg-white"
              rightIcon={null}
              leftIcon={null}
            />
          </div>
        </div>
        </div>

    </section>
  )
}

export default Story
