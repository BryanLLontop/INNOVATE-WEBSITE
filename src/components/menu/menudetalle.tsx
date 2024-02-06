import CVistadetalle from "../vistas/vistaDetalle";

export default function CMenudetalle(props:any) {
    let mostrar=props.mostrar||'';
    let tipo=props.tipo||'item';
    if(tipo=='item'){
        return(
            <li className={"nav-item "} data-animation="center" key={'menuid'+props.id}>
                <a  className={"nav-link"}  aria-current="page" href={props.href}>{props.titulo}</a>
            </li>
        )
    }else if(tipo=='dropdown'){
        return(
            <li className={"nav-item dropdown"} data-animation="center" key={'menuid'+props.id}>
                <a data-bs-toggle="dropdown" className="nav-link dropdown-toggle" aria-current="page" href='#'>{props.titulo}</a>
                <ul className="dropdown-menu">
                {
                    props.submenus.map((submenu:any, keysubmenu:any)=>{
                        return (
                        <li key={'submenu_'+props.id+'_'+keysubmenu}><a className="dropdown-item" href={submenu.href}>{submenu.titulo}</a></li>
                        );
                    })
                }
                </ul>
            </li>
        )
    }else if(tipo=='megaMenu'){
        return(
            <li key={'megamenu_'+props.id} className={"nav-item megaMenu dropdown-mega position-static"} data-animation="center">
                <a data-bs-toggle="dropdown" className="nav-link dropdown-toggle" data-bs-auto-close="outside" aria-current="page" href='#'>{props.titulo}</a>
                <div className="dropdown-menu shadow " data-bs-popper="static">
                        <div className="mega-content px-4">
                            <div className="container-fluid">
                                <div className="row">
                                {
                                    props.submenus.map((submenu:any, keysubmenu:any)=>{
                                    return (
                                        <CVistadetalle {...submenu}  key={'megamenui_'+keysubmenu} />                                            
                                    );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}