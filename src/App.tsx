import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import weddingDayPhotoUrl from './assets/images/wedding_day.png';

function App() {
  return (
    <div>
      <Main />
      <Header />
      <Section>
          <p className='border-b-[2px] border-black pb-[7px] dream-cottage pt-[10px] text-[10px]'>Wedding Day</p>
          <p className='pt-5 text-center text-[10px]'>
            2024. 12. 07. 토요일 오전 11시<br/>
            경기도 성남시 분당구 안양판교로 1219
          </p>
          <p className='pt-1 text-[10px]'>우리들교회 판교채플 7층(탄설홀)</p>
          <div className='px-[70px] pt-5'>
            <img src={weddingDayPhotoUrl} />
          </div>
      </Section>
    </div>
  );
}

export default App;
