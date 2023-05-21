import React from 'react';
import Slider from '../Components/home/Slider/Slider';
import { offerImg } from '../fakers/data';
import OfferCard from '../Components/utilites/offerCard/OfferCard';
import { kitchenOffers } from '../fakers/data';
import GroupCard from '../Components/utilites/groupCard/GroupCard';
const Home = () => {
	return (
		<div className='homeContainer p-0 m-0'>
			<Slider />
			<div className='container py-4'>
				<div className='row'>
					<div className='col-12 col-md-8'>
						<div className='w-100 d-flex flex-wrap gap-2'>
							<OfferCard data={offerImg} />
						</div>
					</div>
					<div className='col-12 col-md-4'>
						<div className='w-100'>
							<GroupCard title='مطبخ مثالي ؟ لا يوجد افضل من ذلك' data={kitchenOffers} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
