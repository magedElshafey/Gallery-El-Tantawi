// slider
import kitchen from '../assets/kitchen.jpg';
import furn from '../assets/furniture.gif';
import maforsh from '../assets/maforshat.jpg';
import magic from '../assets/magic.jpg';
// offers
import less1000 from '../assets/less1000.jpg';
import free from '../assets/freeT.jpg';
import dailyOffers from '../assets/Daily-Deals-AR_4.jpg';
// kitchen
import fire from '../assets/fire.png';
import boiler from '../assets/boiler.png';
import grill from '../assets/grill.png';
import toster from '../assets/toester.png';
export const offers = [
	{
		path: '/kitchen',
		img: kitchen,
	},
	{
		path: '/magic',
		img: magic,
	},
	{
		path: '/mafrosh',
		img: maforsh,
	},
	{
		path: '/furn',
		img: furn,
	},
];
export const offerImg = [
	{
		title: 'أقل من 1000 ',
		img: less1000,
		path: '/',
	},
	{
		title: 'العروض اليومية',
		img: dailyOffers ,
		path: '/',
	},
	{
		title: 'شحن مجاني',
		img: free,
		path: '/',
	},
];
export const kitchenOffers = [
	{
		name: 'قلايات',
		img: fire,
	},
	{
		name: 'شوايات كهربائية',
		img: grill,
	},
	{
		name: 'توستر',
		img: toster,
	},
	{
		name: 'غلايات',
		img: boiler,
	},
];
