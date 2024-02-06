import CFooter2 from '@/components/footer/footer2'
import CFooter from '@/components/footer/footer'
import CServicios from '@/components/vistas/servicios'
import CMenu from '@/components/menu/menu'
import CAnimacion from '@/components/slider/animacion'
import CTop from '@/components/top/top'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'imnovate.pe : Servicios',
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
          <CAnimacion menu="servicios" />
          <CMenu menu="servicios"/>
      </div>
      <CServicios />
      <CFooter2 />
      <CFooter />
    </>
  )
}
