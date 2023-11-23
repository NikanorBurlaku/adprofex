import React from 'react';
import './Title.css';

function Title() {


    return (
        <div className='wrapper title'>
            <div className='title__block'>
                <h1 className='main__title'>Creative Agency Lead Generation</h1>
                <p>Increase your profit: striking results through KPI-centric marketing campaigns</p>
                <button className='title__button'>Сontact us <img src='img/arrow.svg' alt='' /></button>
            </div>
            <div className='title__img'>

                <img className='dot dot1' src='img/dot1.svg' alt='' />
                <img className='dot dot2' src='img/dot2.svg' alt='' />
                <img className='dot dot3' src='img/dot3.svg' alt='' />
                <img className='dot dot4' src='img/dot4.svg' alt='' />
                <img className='dot dot5' src='img/dot5.svg' alt='' />
                <img className='dot dot6' src='img/dot6.svg' alt='' />

                <img className='bg__title' src='img/title.svg' alt='' />
            </div>
        </div>
    );
}

export default Title;
