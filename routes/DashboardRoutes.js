import { v4 as uuid } from 'uuid';
export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Inicio',
		icon: 'home',
		link: '/'
	},
	{
		id: uuid(),
		title: 'PAGINAS EDITABLES',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Innovate',
		icon: 'code',
		children: [
			{ id: uuid(), link: '/dashboard/navBar', name: 'Navbar' },
			{ id: uuid(), link: '/dashboard/bannergb', name: 'Banner Central' },
			{ id: uuid(), link: '/dashboard/informacion', name: 'Informacion' },
			{ id: uuid(), link: '/dashboard/empresa', name: 'Empresa' },
			{ id: uuid(), link: '/dashboard/contactame', name: 'Contactame' }
		]
	},
	{
		id: uuid(),
		title: 'SEGURIDAD',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'User',
		icon: 'user',
		link: '/dashboard/menus'
	},
	{
		id: uuid(),
		title: 'Autentificacion',
		icon: 'lock',
		children: [
			{ id: uuid(), link: '/authentication/sign-in', name: 'Iniciar Sesion' },
			{ id: uuid(), link: '/authentication/sign-up', name: 'Registrarse' },
			{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password' }
		]
	},
	{
		id: uuid(),
		title: 'OTROS COMPONENTES',
		grouptitle: true
	},
	{
		id: uuid(),
		title: '404 Error',
		icon: 'server',
		link: '/404'
	},
];

export default DashboardMenu;
