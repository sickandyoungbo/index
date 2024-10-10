import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import weddingDayPhotoUrl from './assets/images/wedding_day.png';
import tmapLogoUrl from './assets/images/tmapLogo.png';
import navermapLogoUrl from './assets/images/navermapLogo.png';
import kakaomapLogoUrl from './assets/images/kakaomapLogo.png';
import Title from './components/Title';
import Date from './components/Date';
import Map from './components/Map';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PhotobookSwiper from './components/PhotobookSwiper';
import ContentContainer from './components/ContentContainer';
import SubTitle from './components/SubTitle';
import WorshipItem from './components/WorshipItem';

function App() {
  return (
    <div>
      <Main />
      <Header />
      <Section>
          <Title>Wedding Day</Title>
          <ContentContainer>
            <p className='text-center text-[17px]'>
              2024. 12. 07. 토요일 오전 11시<br/>
              경기도 성남시 분당구 안양판교로 1219
            </p>
            <p className='pt-2 text-[17px] font-bold text-center'>우리들교회 판교채플 7층(탄설홀)</p>
            <div className='px-[70px] pt-[30px]'>
              <img src={weddingDayPhotoUrl} />
            </div>
            <div className='pt-[30px] w-full dream-cottage'>
              <p className='text-xl text-center'>December</p>
              <div className='flex pt-4 justify-between'>
                <Date day="Sun." date="1" />
                <Date day="Mon." date="2" />
                <Date day="Tue." date="3" />
                <Date day="Wed." date="4" />
                <Date day="Thu." date="5" />
                <Date day="Fri." date="6" />
                <Date day="Sat." date="7" />
              </div>
            </div>
          </ContentContainer>
      </Section>
      <Section>
        <Title>Greetings</Title>
        <ContentContainer>
          <div className='border-[1px] border-[#FADCE7] p-5 rounded-[13px]'>
            <div className='text-base flex font-medium'>
              <p className='pr-[14px]'>42</p>
              <p>
                우리 두 사람이 여호와의 이름으로 맹세하여 이르기를여호와께서 영원히 나와 너 사이에 계시고...
              </p>
            </div>
            <p className='text-base font-bold pt-[10px] text-center'>사무엘상 20:42</p>
          </div>
          <p className='text-center text-[13px] pt-6'>
            식이는 하나님의 영원한 보살핌 영보를 만났고<br/>
            영보는 하나님이 보내신 이 땅의 안식을 만났습니다.
          </p>
          <p className='text-center text-[13px] pt-6'>
            이제 하나님의 사랑 안에서<br/>
            서로의 돕는 배필이 되고자 합니다.
          </p>
          <p className='text-center text-[13px] pt-6'>
            행복이 아닌 '네가 나보다 옳도다'의 거룩으로 세워지는<br/>
            가정이 될 수 있게 함께 기도해 주시고 축복해 주시기 바랍니다.<br/>
          </p>
          <div className='mt-[30px] border border-black rounded-[13px] py-[14px]'>
            <div className='flex text-base justify-center'>
              <div className='flex flex-col pr-[10px] font-medium'>
                <p>안성진</p>
                <p>심재호</p>
              </div>
              <div className='flex flex-col font-medium'>
                <p>이월순<span className='text-sm font-normal'>의</span></p>
                <p>이경희<span className='text-sm font-normal'>의</span></p>
              </div>
              <div className='flex flex-col h-12 justify-around pl-2'>
                <p className='text-sm text-right'>아들</p>
                <p className='text-sm text-right'>딸</p>
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
        </ContentContainer>
      </Section>
      <Section>
        <Title>Worship</Title>
        <SubTitle>예배순서 안내입니다.</SubTitle>
        <ContentContainer>
          <WorshipItem isFirst={true} leftText='촛불점화' rightText='양가모친'></WorshipItem>
          <WorshipItem leftText='입장' rightText='신랑 & 신부'></WorshipItem>
          <WorshipItem leftText='찬송' rightText='다같이'></WorshipItem>
          <WorshipItem leftText='기도' rightText='주례자'></WorshipItem>
          <WorshipItem leftText='봉독' rightText='주례자' hasMiddle={true} middleText='### NN:NN'></WorshipItem>
          <div className='border-[1px] font-medium border-[#FADCE7] p-5 rounded-[13px] mt-5'>
            <div className='flex'>
                <p className='pr-[11px]'>22</p>
              <p>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔</p>
            </div>
            <div className='flex pt-2'>
                <p className='pr-[11px]'>23</p>
              <p>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔</p>
            </div>
            <div className='flex pt-2'>
                <p className='pr-[11px]'>24</p>
              <p>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔</p>
            </div>
          </div>
          <WorshipItem leftText='설교' rightText='주례자' hasMiddle={true} middleText='### NN:NN'></WorshipItem>
          <WorshipItem leftText='혼인서약' rightText='신랑 & 신부'></WorshipItem>
          <WorshipItem leftText='성혼선언' rightText='주례자'></WorshipItem>
          <WorshipItem leftText='축가' rightText='청년부'></WorshipItem>
          <WorshipItem leftText='축도' rightText='주례자'></WorshipItem>
          <WorshipItem leftText='인사/행진' rightText='신랑 & 신부'></WorshipItem>
          <WorshipItem leftText='혼인서약' rightText='신랑/신부'></WorshipItem>
        </ContentContainer>
      </Section>
      <Section>
        <Title>Photobook</Title>
        <SubTitle>사진을 좌우로 넘겨보세요.</SubTitle>
        <div className='pt-[30px]'>
          <PhotobookSwiper />
        </div>
      </Section>
      <Section>
        <Title>Location</Title>
        <SubTitle>오시는 길을 안내해드립니다.</SubTitle>
        <ContentContainer>
          <Map latitude={37.38237} longitude={127.1014} />
          <div className='mt-5 flex justify-between'>
            <button className='flex items-center p-3 border-[#CCCCCC] border-[0.5px] rounded-md'>
              <img className='w-7 mr-1' src={tmapLogoUrl} />
              <p className='pretendard font-medium text-sm'>TMAP</p>
            </button>
            <button className='flex items-center p-3 border-[#CCCCCC] border-[0.5px] rounded-md'>
              <img className='w-7 mr-1' src={navermapLogoUrl} />
              <p className='pretendard font-medium text-sm'>네이버지도</p>
            </button>
            <button className='flex items-center p-3 border-[#CCCCCC] border-[0.5px] rounded-md'>
              <img className='w-7 mr-1' src={kakaomapLogoUrl} />
              <p className='pretendard font-medium text-sm'>카카오맵</p>
            </button>
          </div>
        </ContentContainer>
      </Section>
      <Section>
        <Title>Congratulatory</Title>
        <SubTitle>마음을 전하실 곳</SubTitle>
        <div className='pt-[30px]'></div>
      </Section>
    </div>
  );
}

export default App;
