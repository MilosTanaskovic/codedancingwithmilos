'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import HeroImage from '@/public/images/me.jpg'
import NavBar from '../header/NavBar'

export default function SideNavigation() {

  const pathname = usePathname();

  return (
    <div className="hidden sm:block sticky top-0 w-16 md:w-24 shrink-0 h-screen overflow-y-auto no-scrollbar border-r border-slate-200 dark:border-slate-800">
      <div className="h-full flex flex-col justify-between after:flex-1 after:mt-auto">
        <div className="flex-1">
          {pathname !== '/' && (
            <div className="flex justify-center my-4">
              <Link href="/">
                <Image className="rounded-full" src={HeroImage} width={32} height={32} priority alt="CodeDancing with Milos" />
              </Link>
            </div>
          )}
        </div>
        <div className="flex-1 grow flex items-center">
          <NavBar />
        </div>
      </div>
    </div>
  )
}
