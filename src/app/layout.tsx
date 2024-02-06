
'use client'

import { useEffect } from "react";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.min.js')
    }
  }, [])
  return (    
    <html lang="es">
      <body>
            {children}           
      </body>
    </html>
  )
}
