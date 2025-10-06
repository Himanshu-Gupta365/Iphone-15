import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue">
            <a href="https://www.apple.com/">
            Find an Apple Store {' '}
            </a>
            </span>
            or {' '}
            <span className="underline text-blue">
                <a href="https://www.flipkart.com/mobiles/apple~brand/pr?sid=tyy,4io">other retailer</a>
            
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 983110-040-1966
          </p>
        </div>
        {/* divider line */}

        <div className="bg-neutral-700 my-5 h-[1px] w-full" /> 
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer