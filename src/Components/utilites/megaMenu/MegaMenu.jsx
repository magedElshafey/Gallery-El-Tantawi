import React from 'react';
import style from './mega.module.css';
import tv from '../../../assets/tv.jpg';
const MegaMenu = () => {
	return (
		<div className='container'>
			<div className={style.MegaMenu}>
				<div className='p-3 row-gap-5'>
					<div className='col-5 d-flex-gap-3'>
						<ul>
							<p className='red fw-bold p-0 m-0 fs-4 mb-3'>أجهزة منزلية كبيرة</p>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
						</ul>
						<ul>
							<p className='red fw-bold p-0 m-0 fs-4 mb-3'>أجهزة منزلية كبيرة</p>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
						</ul>
						<ul>
							<p className='red fw-bold p-0 m-0 fs-4 mb-3'>أجهزة منزلية كبيرة</p>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
							<li className='mb-2 text-black'>تكييفات</li>
						</ul>
					</div>
					<div className='col-6'>
						<img alt='product/img' src={tv} className={style.mainImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MegaMenu;
/*
  	<div className={`p-3 ${style.megaContainer} row  gap-5`}>
			
		</div>
*/
/*
  <div className={`container ${style.MegaMenu} row gap-5`}>
			<div className='col-5 d-flex gap-5'>
				
				
				
			</div>

			<div className='col-6'>
			
			</div>
		</div>
*/
