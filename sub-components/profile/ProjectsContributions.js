// import node module libraries
import React from "react";
import Link from 'next/link';
import { Col, Card, Dropdown, Image } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import ProjectsContributionsData from 'data/profile/ProjectsContributionsData';

const ProjectsContributions = () => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        (<Link
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="text-muted text-primary-hover">
            {children}
        </Link>)
    ));

    CustomToggle.displayName = 'CustomToggle';

    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-muted" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
                    <Dropdown.Item eventKey="1">
                        Ver
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        Registrar
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                        Actualizar
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">
                        Eliminar
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
            <Card>
                <Card.Body>
                    <Card.Title as="h4">Paginas Editables</Card.Title>
                    {ProjectsContributionsData.map((item, index) => {
                        return (
                            <div className="d-md-flex justify-content-between align-items-center mb-4" key={index}>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}>
                                            <Image src={item.brandLogo} alt="" />
                                        </div>
                                    </div>
                                    {/* text */}
                                    <div className="ms-3 ">
                                        <h5 className="mb-1">
                                            <Link href="#" className="text-inherit">{item.projectName}</Link>
                                        </h5>
                                        <p className="mb-0 fs-5 text-muted">{item.description}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-10 ms-md-0 mt-3">
                                    {/* avatar group */}
                                    <div className="avatar-group me-2">
                                    <i className="fe fe-eye fa-lg"></i>
                                    </div>
                                   
                                </div>
                            </div>
                        )
                    })}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectsContributions