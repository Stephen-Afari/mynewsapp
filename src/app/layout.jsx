import Header from '@/components/Header'
import './globals.css'




import { ThemeSwitcher } from '@/components/button'
import { ThemeProvider } from './theme-provider'
import NavBar from '@/components/NavBar'
import SearchBox from '@/components/SearchBox'

// import { ThemeProvider } from './Providers'

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    
      <body>
      {/* create extra providers for the DarkModeSwitch */}

       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header/>
      <NavBar/>
          {/* <ThemeSwitcher /> */}
        {/* //Add search Box */}
        <SearchBox/>
          {children}

        </ThemeProvider> 

       
      </body>
    </html>
  )
}
