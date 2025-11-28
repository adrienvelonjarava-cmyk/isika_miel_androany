import React from 'react'
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    src: '/logo.png', // Remplacez par le chemin réel de l'image Litchi
    title: "Miel de Litchi",
    description: "Goût fruité et délicat. Idéal pour les boissons rafraîchissantes et les desserts.",
  },
];

const FeaturedHoneyProduct = () => {
  return (
    <div className="mt-14">
          <div className="flex flex-col items-center">
            <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
          </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
            {products.map(({ id, src, title, description }) => (
              <div key={id} className="relative group">
                <Image
                  src={src}
                  alt={title}
                  width={400} height={400} 
                  className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
                />
                {/* L'overlay d'information au survol */}
                <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
                  <p className="font-medium text-xl lg:text-2xl">{title}</p>
                  <p className="text-sm lg:text-base leading-5 max-w-60">
                    {description}
                  </p>
                  <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                    Acheter <ShoppingBag />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default FeaturedHoneyProduct