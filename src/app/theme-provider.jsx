// "use client"
// import { ThemeProvider } from 'next-themes'
// import React from 'react'




// export default function Providers({Children}) {
//   return (
//     // while using tailwindcss, we wannt to add a class called dark to our dark class
//     <ThemeProvider enableSystem={true} attribute='class'>
//         {Children}
//     </ThemeProvider>  )
// }

"use client"
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";



export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}