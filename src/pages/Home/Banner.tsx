import bannerImg from "../../assets/banner/banner.jpg";

function Banner() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4">
          Best Collection For <br />
          Home Decoration
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
          <br />
          rhoncus pellentesque id integer neque, vel accumsan dolor diam.
        </p>
        <div className="mt-12">
          <a
            href="#"
            className="bg-primary border-primary text-white px-8 py-3 font-medium border rounded-md hover:bg-transparent hover:text-primary transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
