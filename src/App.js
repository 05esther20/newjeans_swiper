import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import  swiperinfo from './data/swiper.json'

function App() {
  return (
    <>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {
        swiperinfo.map((v, i)=>{
            return(<SwiperSlide>
              <div style={{ 
                "backgroundImage" : `url(${v.img})`,
                "height": "100%",
                "width": "100%",
                "backgroundSize" : "cover"
                 }} >
                <p className='cafe24font'>
                  {v.textnm}
                </p>
              </div>
            </SwiperSlide>
            )


        })

      }
    </Swiper>
  </>
  );
}

export default App;
