import CFooter2 from '@/components/footer/footer2'
import CFooter from '@/components/footer/footer'
import CContactanos from '@/components/vistas/contactanos'
import CMenu from '@/components/menu/menu'
import CAnimacion from '@/components/slider/animacion'
import CTop from '@/components/top/top'
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
          <CAnimacion menu="contactanos" />
      </div>
      <CContactanos />
      <CFooter2 />
      <CFooter />
    </>
  )
}
