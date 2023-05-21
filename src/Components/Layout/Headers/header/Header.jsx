import React from 'react';
import style from '../headers.module.css';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
	return (
		<div className='py-3 container d-none d-md-block'>
			<div className='row align-items-center justify-content-center   gap-5'>
				<div className='col-1 '>
					<h1 className={`w-100 ${style.title}`}>الطنطاوي</h1>
				</div>
				<div className='col-7 position-relative justify-content-end'>
					<div className='w-100'>
						<input type='text' className={style.inp} placeholder='ابحث في الموقع' />
						<span className={style.search}>
							<AiOutlineSearch size={20} />
						</span>
					</div>
				</div>
				<div className='col-3 d-flex align-items-center gap-3'>
					<span className={`gray ${style.welcome}`}>مرحبا بك في جاليري الطنطاوي . !</span>
					<div className='position-relative'>
						<AiOutlineShoppingCart className='pointer gray' size={30} />
						<span className={`pointer ${style.length}`}>0</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
