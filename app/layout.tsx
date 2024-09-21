import './css/style.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Theme from './theme-provider'
import SideNavigation from '@/components/ui/side-navigation'

import { Toaster } from 'sonner'
import Header from '@/components/header/Header'
import { Viewport } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const aspekta = localFont({
  src: [
    {
      path: '../public/fonts/Aspekta-500.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Aspekta-650.woff2',
      weight: '650',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
})

// export const metadata = {
//   title: 'CodeDancingwithMilos - Think like a Senior Software Engineer, become the best on your team!',
//   description: 'CodeDancingwithMilos - Your go-to platform for mastering software engineering. Learn how to think like a senior engineer, refine your coding, communication, and leadership skills to excel in any team. Transform your career by gaining real-world insights and becoming a top-level software professional!',
// }
 
export const viewport: Viewport = {
  themeColor: '#2762F8', // Represents brand color, improving consistency across browsers.
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata = {
  title: 'CodeDancingwithMilos - Think like a Software Engineer, Become the Best on Your Team!',
  description: 'CodeDancingwithMilos is the ultimate platform to master software engineering. Learn to code like a software engineer, sharpen your leadership and communication skills, and become a top-level professional in the tech industry.',
  keywords: 'software engineering, software engineer, JS and .NET platform, JavaScript Ecosystem, .NET Ecosystem, programming skills, software development, tech leadership, engineering communication, tech career growth, developer training, code mastery, software projects',
  robots: 'index, follow',
  author: 'CodeDancingwithMilos',
  og: {
    title: 'CodeDancingwithMilos - Master Software Engineering',
    description: 'Take your software engineering skills to the next level. Learn to lead, code, and communicate like a senior engineer. Start your journey to becoming a top tech professional at CodeDancingwithMilos.',
    url: 'https://codedancingwithmilos.com',
    type: 'website',
    image: 'https://codedancingwithmilos.com/images/me.jpg',
    site_name: 'CodeDancingwithMilos - Become the Best Software Engineer on Your Team',  // Adds consistency by specifying the website name.
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CodeDancing',
    title: 'CodeDancingwithMilos - Become the Best Software Engineer on Your Team',
    description: 'Sharpen your coding, leadership, and communication skills at CodeDancingwithMilos, and accelerate your career to senior-level software engineering.',
    image: 'https://codedancingwithmilos.com/images/twitter-image.jpg',
  },
  canonical: 'https://codedancingwithmilos.com', 
  schema: {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'CodeDancingwithMilos - Become the Best Software Engineer on Your Team',
    url: 'https://codedancingwithmilos.com',
    logo: 'https://codedancingwithmilos.com/images/me.jpg',  // Adds brand visibility.
    description: 'CodeDancingwithMilos is a learning platform dedicated to helping developers think and work like senior software engineers by enhancing coding, leadership, and communication skills.',
    sameAs: [
      'https://www.linkedin.com/in/codedancingwithmilos/',
      'https://www.facebook.com/codedancingwithmilos/',
      'https://x.com/CodeDancing/'
    ],  // Connects social profiles for added SEO benefits.
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>{/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body className={`${inter.variable} ${aspekta.variable} font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight`}>
        <Theme>
          <div className="max-w-7xl mx-auto">
            <div className="min-h-screen flex">

              <SideNavigation />

              { /* Main content */}
              <main className="grow overflow-hidden px-6">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">

                  <Header />

                  {children}

                </div>
              </main>

            </div>
          </div>
          <Toaster richColors />
        </Theme>
      </body>
    </html>
  )
}
