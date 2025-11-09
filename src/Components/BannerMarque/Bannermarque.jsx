// src/components/MarqueeSection.jsx
import React from 'react'
import Marquee from 'react-fast-marquee'

const Bannermarque = () => {
  return (
    <div className="">
      <Marquee speed={70} pauseOnHover={true} gradient={false}>
        <h1 className="text-white text-3xl font-semibold mx-10">
          Community - Food - Sharing 🍲
        </h1>
        <h1 className="text-white text-3xl font-semibold mx-10">
          Share your favorite recipes ❤️
        </h1>
        <h1 className="text-white text-3xl font-semibold mx-10">
          Join our food-loving community 👨‍🍳
        </h1>
        <h1 className="text-white text-3xl font-semibold mx-10">
          Taste the world together 🌍
        </h1>
      </Marquee>
    </div>
  )
}

export default Bannermarque
