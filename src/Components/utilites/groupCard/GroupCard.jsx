import React from 'react';
import style from './GroupCard.module.css';
import { Link } from 'react-router-dom';
const GroupCard = ({ data, title , path }) => {
	return (
		<div className={`p-3 ${style.mainCard}`}>
			<p className='fw-bold mb-3'>{title}</p>
			<div className='row gap-3'>
				{data.map((item, index) => (
					<div key={index} className='col-5'>
						<img alt='product/img' src={item.img} className={style.mainImg} />
						<Link to={item.path} className='text-black'>
							<p className='fw-bold fs-6 text-center'>{item.name}</p>
            </Link>
            
					</div>
				))}
			</div>
		</div>
	);
};
/*
  	{data.map((item, index) => (
					<div key={index} className='col-12 col-md-5 col-lg-3 mb-3'>
						<img alt='product/img' src={item.img}  />
						<p className='py-3 fw-bold  text-black'>{data.name}</p>
					</div>
				))}
*/
export default GroupCard;
