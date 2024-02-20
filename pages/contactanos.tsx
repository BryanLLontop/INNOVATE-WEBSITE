import CFooter2 from '../pages/components/footer/footer2'
import CFooter from '../pages/components/footer/footer'
import CContactanos from '../pages/components/vistas/contactanos'
import CMenu from '../pages/components/menu/menu'
import CAnimacion from '../pages/components/slider/animacion'
import CTop from '../pages/components/top/top'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'innovate.pe : Contactanos',
  description: 'Pagina incial de Imnovate',
  icons: {
    icon: '/images/favicon.ico', // /public path
  },
}
export default function Home() {
  return (
    <>     
      <CTop />
      <div className='animacionmenu'>  
          <CMenu menu="contactanos"/>
          <CAnimacion categoria="contactanos" />
      </div>
      <CContactanos />
      <CFooter2 />
      <CFooter />
    </>
  )
}
