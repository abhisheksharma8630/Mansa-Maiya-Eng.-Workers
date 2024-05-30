import Carousel from "./components/Carousel"
import Header from "./components/Header"

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
]

function App() {

  return (
    <>
    <Header/>
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-lg">
      <Carousel autoSlide={true} >
        {slides.map((s)=>(<img src={s}/>))}
      </Carousel>
      </div>
    </div>
    </>
  )
}

export default App
