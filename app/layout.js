'use client'
//import css file 
import './globals.css'
import './tokens.css'
// Import slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../utlis/themeSettings'

import Header from '@/components/UI/Header/Header';
import Footer from '@/components/UI/Footer/Footer';

import { GoogleTagManager } from '@next/third-parties/google'

// fonts settings

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  preload: true
})


export default function RootLayout({ children }) {


  return (
    <html lang="en" className={`${work_sans.variable}`}>
      <GoogleTagManager gtmId="GTM-5FNFX47G" />
      <body >
        <ThemeProvider theme={lightTheme}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  )
}