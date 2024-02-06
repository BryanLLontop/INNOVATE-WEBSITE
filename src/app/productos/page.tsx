import CFooter2 from '@/components/footer/footer2'
import CFooter from '@/components/footer/footer'
import CProduct from '@/components/vistas/productos'
import CMenu from '@/components/menu/menu'
import CAnimacion from '@/components/slider/animacion'
import CTop from '@/components/top/top'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'imnovate.pe : Productos',
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
          <CAnimacion menu="productos"/>
          <CMenu menu="productos"/>
      </div>
      <CProduct />
      <CFooter2 />
      <CFooter />
    </>
  )
}
