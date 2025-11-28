import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
            <Link href={"/"} className='flex items-center'>
                <Image src={'/logo.png'} alt={'Isika miel'} width={36} height={36} />
                <p className='hidden md:block text-md font-medium tracking-wider text-white'>Isika Miel.</p>
            </Link>
            <p className='text-sm text-gray-400'>© 2025 Isika Miel</p>
            <p className='text-sm text-gray-400'>Tous droits réservés.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">Page d'accuiel</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Conditions d’utilisation</Link>
            <Link href="/">Politique de confidentialité</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">Tous les produits</Link>
            <Link href="/">Nouveaux arrivants</Link>
            <Link href="/">Best Sellers</Link>
            <Link href="/">Vente</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">A propos</Link>
            <Link href="/">Contacte</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Programme d'affiliation</Link>
      </div>
    </div>
  )
}

export default Footer