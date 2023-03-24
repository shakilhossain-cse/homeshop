import AdImage from '../../assets/banner/adbanar.jpg'

function Advertisement() {
  return (
    <div className="container pb-16">
    <a href="#">
      <img src={AdImage} alt="ad" className="w-full" />
    </a>
  </div>
  )
}

export default Advertisement