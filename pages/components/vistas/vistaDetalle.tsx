
import React, {useState, useEffect} from 'react'
export default function CVistadetalle(props:any) {
    const listadata = props.data || '';
    const [datos, setDatos] = useState([]);

        useEffect(() => {
            fetch('../../../api/db.json')
                .then(response => response.json())
                .then(json => {
                    const data = json[listadata]; // Accede dinámicamente a los datos usando el valor de props.submenus como clave
                    setDatos(data);
                })
                .catch(error => console.error('Error al obtener datos:', error));
        }, [listadata]); // Agrega submenus como dependencia

    return (
        <>
        <div className="col-12 col-sm-6 col-md-3 py-4">
            <h5>{props.titulo}</h5>
            <div className="list-group">
            {datos.map((item: any, index: number) => (
                <a key={index} className="list-group-item" href={item.href}>
                {item.nombre}
                </a>
            ))}
            </div>
        </div>
        
        <div className=" col-12 col-sm-6 col-md-3 py-4">
            <h5>{props.titulodestacado}</h5>
            <div className="card list-destacado">
            <img src={props.imgdestacados} style={{ width: '100%', height: 'auto' }} />
            <div className="card-body">
                <p className="card-text">{props.textodestacado}</p>
            </div>
            </div>
        </div>
        
        </>
    );
    }