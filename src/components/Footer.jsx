import React from 'react'
import { FaDiscord, FaTwitter, FaTwitch, FaGithub } from 'react-icons/fa'

const Links=[
    { href: 'https://discord.com', icon: <FaDiscord/> },
    { href: 'https://twitter.com', icon: <FaTwitter/> },
    { href: 'https://twitch.com', icon: <FaTwitch/> },
    { href: 'https://github.com', icon: <FaGithub/> },
]

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className='flex justify-center gap-4 md:justify-start'>
            {Links.map((link) => (
                <a key={link} target='_blank' href={link.href} className='text-black transition-colors duration-500 ease-in-out hover:text-white' rel='noopener noreferrer'>
                    {link.icon}
                </a>
            ))}
        </div>

        <a href='#privery-policy' className='text-sm md:text-right'>
            Privecy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer
