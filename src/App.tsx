import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import weddingDayPhotoUrl from './assets/images/wedding_day.png';
import Title from './components/Title';
import Date from './components/Date';
import Map from './components/Map';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PhotobookSwiper from './components/PhotobookSwiper';

function App() {
  return (
    <div>
      <Main />
      <Header />
      <Section>
          <Title>Wedding Day</Title>
          <p className='pt-5 text-center text-[10px]'>
            2024. 12. 07. 토요일 오전 11시<br/>
            경기도 성남시 분당구 안양판교로 1219
          </p>
          <p className='pt-1 text-[10px] font-bold'>우리들교회 판교채플 7층(탄설홀)</p>
          <div className='px-[70px] pt-5'>
            <img src={weddingDayPhotoUrl} />
          </div>
          <div className='pt-5 pb-[60px] dream-cottage'>
            <p className='text-xs text-center'>December</p>
            <div className='flex pt-[11px] w-[270px] justify-between'>
              <Date day="Sun." date="1" />
              <Date day="Mon." date="2" />
              <Date day="Tue." date="3" />
              <Date day="Wed." date="4" />
              <Date day="Thu." date="5" />
              <Date day="Fri." date="6" />
              <Date day="Sat." date="7" />
            </div>
          </div>
      </Section>
      <Section>
        <Title>Greetings</Title>
        <div className='mt-5 border-[2px] border-[#FADCE7] text-center py-3 px-[14px] rounded-xl text-[#231815]'>
          <p className='text-[10px]'>
            42 •••우리 두 사람이 여호와의 이름으로 맹세하여 이르기를<br/>
            여호와께서 영원히 나와 너 사이에 계시고•••
          </p>
          <p className='text-[10px] font-bold pt-[7px]'>사무엘상 20:42</p>
        </div>
        <p className='text-center text-xs pt-5'>
          식이는 하나님의 영원한 보살핌 영보를 만났고<br/>
          영보는 하나님이 보내신 이 땅의 안식을 만났습니다.<br/>
          이제 하나님의 사랑 안에서<br/>
          서로의 돕는 배필이 되고자 합니다.
        </p>
        <p className='text-center text-xs pt-5'>
          행복이 아닌 '네가 나보다 옳도다'의<br/>
          거룩으로 세워지는 가정이 될 수 있게<br/>
          함께 기도해 주시고 축복해 주시기 바랍니다.<br/>
        </p>
        <div className='pt-5'>
          <div className='flex text-xs'>
            <div className='flex flex-col'>
              <p className=''>안성진</p>
              <p className='pr-2'>심재호</p>
            </div>
            <div className='flex flex-col'>
              <p>이월순<span className='text-[10px]'>의</span></p>
              <p>이경희<span className='text-[10px]'>의</span></p>
            </div>
            <div className='flex flex-col justify-end pl-3'>
              <p className='text-[10px] text-right'>아들</p>
              <p className='text-[10px] text-right'>딸</p>
            </div>
            <div className='flex flex-col pl-2'>
              <p className='font-bold flex justify-between'>
                <span className='block'>안</span>
                <span className='block'>식</span>
              </p>
              <p className='font-bold'>심영보</p>
            </div>
          </div>
        </div>
        <div className='pb-[50px]'>
          <div className='flex text-xs pt-2'>
            
          </div>
        </div>
      </Section>
      <Section>
        <Title>Photobook</Title>
        <p className='text-[8px] pt-[10px]'>사진을 좌우로 넘겨보세요.</p>
        <div className='pt-5 pb-[50px]'>
          <PhotobookSwiper />
        </div>
      </Section>
      <Section>
        <p className='border-b-[2px] border-black pb-[7px] pt-[10px] text-[10px] font-bold'>오시는 길</p>
        <div className='px-5 w-full pb-[50px]'>
          <Map latitude={37.38237} longitude={127.1014} />
          <div className='mt-5 flex justify-between'>
            <button>
              <img />
              <p className='pretendard font-medium text-[9px]'>티맵 연결</p>
            </button>
            <button>
              <img />
              <p className='pretendard font-medium text-[9px]'>네이버지도 연결</p>
            </button>
            <button>
              <img />
              <p className='pretendard font-medium text-[9px]'>카카오맵 연결</p>
            </button>
          </div>
        </div>
      </Section>
      <Section>
        <p className='border-b-[2px] border-black pb-[7px] pt-[10px] text-[10px] font-bold'>마음 전하실 곳</p>
        <div className='pt-[30px]'></div>
      </Section>
    </div>
  );
}

export default App;
