import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import weddingDayPhotoUrl from './assets/images/wedding_day.png';
import tmapLogoUrl from './assets/images/tmapLogo.png';
import navermapLogoUrl from './assets/images/navermapLogo.png';
import kakaomapLogoUrl from './assets/images/kakaomapLogo.png';
import Title from './components/Title';
import WeddingDate from './components/WeddingDate';
import Map from './components/Map';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PhotobookSwiper from './components/PhotobookSwiper';
import ContentContainer from './components/ContentContainer';
import SubTitle from './components/SubTitle';
import WorshipItem from './components/WorshipItem';
import MapButton from './components/MapButton';
import CongratulatoryItem from './components/CongratulatoryItem';

declare global {
  interface Window {
    Kakao: any; // Kakao의 타입을 정확하게 알면, any 대신 적절한 타입을 사용합니다.
  }
}

function App() {
  const [canScroll, setCanScroll] = useState(false);

  const query = new URL(window.location.href);
  const shareQueryString = query.searchParams.get('share');
  const showShare = Boolean(shareQueryString);
  
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("4c6ee9bf93490c29dc7ea70a7d4b2eba");
    }

    setInterval(() => {
      setCanScroll(true);
    }, 5000);

  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      kakao.Share.createCustomButton({
        container: '#kakaotalk-sharing-btn',
        templateId: 113159,
      });
    }
    
  }

  return (
    <div className={`${canScroll ? '' : 'overflow-hidden h-screen'}`}>
      <Main />
      <Header />
      <Section>
          <Title>Wedding Day</Title>
          <ContentContainer>
            <p className='text-center font-bold'>
              2024. 12. 07. 토요일 오전 11시<br/>
              경기도 성남시 분당구 안양판교로 1219
            </p>
            <p className='pt-2 text-center'>우리들교회 판교채플 7층(탄설홀)</p>
            <div className='px-[40px] pt-[30px]'>
              <img src={weddingDayPhotoUrl} />
            </div>
            <div className='pt-[30px] w-full dream-cottage leading-[1]'>
              <p className='text-base text-center'>December</p>
              <div className='flex pt-5 justify-between'>
                <WeddingDate day="Sun." date="1" />
                <WeddingDate day="Mon." date="2" />
                <WeddingDate day="Tue." date="3" />
                <WeddingDate day="Wed." date="4" />
                <WeddingDate day="Thu." date="5" />
                <WeddingDate day="Fri." date="6" />
                <WeddingDate day="Sat." date="7" />
              </div>
            </div>
          </ContentContainer>
      </Section>
      <Section>
        <Title>Greetings</Title>
        <ContentContainer>
          <div className='border border-[#FADCE7] p-4 rounded-[13px]'>
            <div className='flex'>
              <p className='pr-[14px] text-xs leading-[1.4]'>42</p>
              <p className='text-xs leading-[1.4]'>
                우리 두 사람이 여호와의 이름으로 맹세하여 이르기를 여호와께서 영원히 나와 너 사이에 계시고...
              </p>
            </div>
            <p className='font-semibold pt-[10px] text-center text-xs leading-[1.4]'>사무엘상 20:42</p>
          </div>
          <p className='text-center pt-6'>
            식이는 하나님의 영원한 보살핌 영보를 만났고<br/>
            영보는 하나님이 보내신 이 땅의 안식을 만났습니다.
          </p>
          <p className='text-center pt-6'>
            이제 하나님의 사랑 안에서<br/>
            서로의 돕는 배필이 되고자 합니다.
          </p>
          <p className='text-center pt-6'>
            행복이 아닌 '네가 나보다 옳도다'의<br/>
            거룩으로 세워지는 가정이 될 수 있게 축복해주세요.
          </p>
          <div className='mt-[60px] flex flex-col mx-auto w-fit'>
            <div className='flex items-center'>
              <p className='leading-[1]'>안성진<span className='text-xs opacity-0'>의</span></p>
              <p className='pl-1 pr-[11px] leading-[1]'>이월순<span className='text-xs'>의</span></p>
              <p className='text-xs leading-[1]'>아들</p>
              <p className='font-semibold pl-[9px] leading-[1]'>안식</p>
            </div>
            <div className='flex items-center pt-[14px]'>
              <p className='leading-[1]'>심재호<span className='text-xs opacity-0'>의</span></p>
              <p className='pl-1 pr-[11px] leading-[1]'>이경희<span className='text-xs'>의</span></p>
              <p className='text-xs leading-[1]'><span className='opacity-0'>아</span>딸</p>
              <p className='font-semibold pl-[9px] leading-[1]'>심영보</p>
            </div>
          </div>
        </ContentContainer>
      </Section>
      {/* <Section>
        <Title>Worship</Title>
        <SubTitle>예배순서 안내입니다.</SubTitle>
        <ContentContainer>
          <WorshipItem isFirst={true} leftText='촛불점화' rightText='양가모친'></WorshipItem>
          <WorshipItem leftText='입장' rightText='신랑 & 신부'></WorshipItem>
          <WorshipItem leftText='찬송' rightText='다같이'></WorshipItem>
          <WorshipItem leftText='기도' rightText='김성우 목사님'></WorshipItem>
          <WorshipItem leftText='봉독' rightText='김성우 목사님' hasMiddle={true} middleText='### NN:NN'></WorshipItem>
          <div className='border-[1px] font-semiBold border-[#FADCE7] p-5 rounded-[13px] mt-5'>
            <div className='flex'>
                <p className='pr-[10px]'>22</p>
              <p>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔</p>
            </div>
            <div className='flex pt-2'>
                <p className='pr-[10px]'>23</p>
              <p>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔</p>
            </div>
            <div className='flex pt-2'>
                <p className='pr-[10px]'>24</p>
              <p>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔</p>
            </div>
          </div>
          <WorshipItem leftText='설교' rightText='김성우 목사님' hasMiddle={true} middleText='### NN:NN'></WorshipItem>
          <WorshipItem leftText='혼인서약' rightText='신랑 & 신부'></WorshipItem>
          <WorshipItem leftText='성혼선언' rightText='김성우 목사님'></WorshipItem>
          <WorshipItem leftText='축가' rightText='청년부'></WorshipItem>
          <WorshipItem leftText='축도' rightText='김성우 목사님'></WorshipItem>
          <WorshipItem leftText='인사/행진' rightText='신랑 & 신부'></WorshipItem>
          <WorshipItem leftText='혼인서약' rightText='신랑 & 신부'></WorshipItem>
        </ContentContainer>
      </Section> */}
      <Section>
        <div className='flex flex-col items-center relative'>
          <Title>Photobook</Title>
          <SubTitle>사진을 좌우로 넘겨보세요.</SubTitle>
          <div className='pt-[30px]'>
            <PhotobookSwiper />
          </div>
          {/* 오시는 길 이동 포인트 */}
          <div id='location' className='absolute bottom-[60px]'></div>
        </div>
      </Section>
      <Section>
        <Title>Location</Title>
        <SubTitle>오시는 길을 안내해드립니다.</SubTitle>
        <ContentContainer>
          <Map latitude={37.38237} longitude={127.1014} />
          <div className='flex justify-between relative bg-white overflow-visible gap-1'>
            <MapButton iconUrl={tmapLogoUrl} name='TMAP' />
            {/* <div className='h-1 w-1'></div> */}
            <MapButton iconUrl={navermapLogoUrl} name='네이버지도' />
            {/* <div className='h-1 w-1'></div> */}
            <MapButton iconUrl={kakaomapLogoUrl} name='카카오맵' />
          </div>
        </ContentContainer>
      </Section>
      <Section>
        <Title>Congratulatory</Title>
        <SubTitle>마음을 전하실 곳</SubTitle>
        <ContentContainer>
          <CongratulatoryItem
            who='groom'
            groomAccount={`795302-04-142372\n국민 안식`}
            groomParent1Account={`946501-01-301414\n국민 안성진`}
          />
          <div className='mt-[14px]'>
            <CongratulatoryItem
              who='bride'
              brideAccount={`110-351-276692\n신한 심영보`}
              brideParent1Account={`104414-02-087580\n우체국 심재호`}
            />
          </div>
        </ContentContainer>
      </Section>
      <Section>
        <Title>Notice</Title>
        <ContentContainer>
          <div className='w-full py-[10px] px-[4.5px] border-b border-[#ccc] text-center'>
            화환은 정중히 사양합니다. 마음만 감사히 받겠습니다.
          </div>
          <div className='w-full py-[10px] px-[4.5px] border-b border-[#ccc] text-center'>
            식사는 3층 식당에서 진행됩니다.
          </div>
          <div className='mb-[60px]'></div>
        </ContentContainer>
      </Section>
      {
        showShare && (
          <div className='px-5'>
            <button id='kakaotalk-sharing-btn' onClick={shareKakao}>카카오 공유하기</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
