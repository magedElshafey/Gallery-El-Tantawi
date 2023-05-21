import React from 'react';
import style from '../headers.module.css';
const MainHeader = () => {
  return (
		<div className={style.mainContainer}>
			<ul className='d-none d-sm-flex container pt-3 pb-1  justify-content-center align-items-center gap-4 '>
				<li className='pointer gray fw-bold'>تسجيل الدخول</li>
				<li className='pointer gray fw-bold'>مركز المساعدة</li>
				<li className='pointer gray fw-bold'>قم بإنشاء حساب جديد</li>
			</ul>
		</div>
  );
};

export default MainHeader;
