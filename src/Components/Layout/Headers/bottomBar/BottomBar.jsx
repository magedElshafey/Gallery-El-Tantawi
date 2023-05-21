import React from 'react';
import style from '../headers.module.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlinePercentage } from 'react-icons/ai';
import MegaMenu from '../../../utilites/megaMenu/MegaMenu';
import { Link } from 'react-router-dom';
const BottomBar = () => {
	return (
		<div className={`${style.BarContainer} d-none d-md-block`}>
			<div className='container d-flex align-items-center justify-content-between'>
				<ul className='d-flex align-items-center gap-5 p-0 m-0 '>
					<li>
						<Link to='/' className='text-white fw-bold'>
							الأجهزة المنزلية <IoMdArrowDropdown size={20} />{' '}
						</Link>
					</li>
					<li>
						<Link to='/' className='text-white fw-bold'>
							الأثاث <IoMdArrowDropdown size={20} />
						</Link>
					</li>
					<li>
						<Link to='/' className='text-white fw-bold'>
							المنتجات العائلية <IoMdArrowDropdown size={20} />{' '}
						</Link>
					</li>
					<li>
						<Link to='/' className='text-white fw-bold'>
							الإلكترونيات <IoMdArrowDropdown size={20} />{' '}
						</Link>
					</li>
					<li>
						<Link to='/' className='text-white fw-bold'>
							مستلزمات المنزل <IoMdArrowDropdown size={20} />{' '}
						</Link>
					</li>
					<li>
						<Link to='/' className='text-white fw-bold'>
							المطبخ <IoMdArrowDropdown size={20} />{' '}
						</Link>
					</li>
				</ul>
				<Link to='/' className={`d-flex align-items-center gap-1 ${style.offer}`}>
					<span className='d-inline-block text-white fw-bold'>عروض الطنطاوي</span>
					<div className={`p-0 m-0 ${style.percentContainer}`}>
						<AiOutlinePercentage size={20} />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BottomBar;
