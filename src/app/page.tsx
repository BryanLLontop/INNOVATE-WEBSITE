import CFooter2 from '@/components/footer/footer2'
import CFooter from '@/components/footer/footer'
import CMenu from '@/components/menu/menu'
import CAnimacion from '@/components/slider/animacion'
import CTop from '@/components/top/top'
import CHome from '@/components/vistas/home'
import CClientes from '@/components/vistas/clientes'
import type { Metadata } from 'next'
/*import COMPTop from '@/components/top/top2'
import COMPFooter from '@/components/footer/footer2'
import COMPAnuncio1 from '@/components/anuncios/anuncio1'
import COMPAuspiciadores from '@/components/slider/auspiciadores'
import COMPProyectos from '@/components/proyectos/proyectos1'
import COMInfo from '@/components/informacion/info'
import COMNosotros from '@/components/nosotros/nosotros'
import COMProductoBuscar from '@/components/proyectos/buscador'*/
export const metadata: Metadata = {
  title: 'innovate.pe : Inicio',
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
          <CAnimacion menu="inicio" />
          <CMenu />
      </div>
      <CClientes />
      <CHome />
      {
      /*<COMPTop />
      <COMProductoBuscar />
      <COMNosotros />
      <COMInfo />
      <COMPProyectos />
      <COMPAuspiciadores />
      <COMPAnuncio1 />*/
    }
    <CFooter2 />
    <CFooter />
    </>
  )
}
