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
            <img src='img/title.png' alt='' className='title__img' />
        </div>
    );
}

export default Title;
