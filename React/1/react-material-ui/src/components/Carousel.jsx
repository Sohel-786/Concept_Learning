import AliceCarousel from "react-alice-carousel";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://staticg.sportskeeda.com/editor/2022/09/e4ec8-16639485644227-1920.jpg?w=840"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://a.storyblok.com/f/178900/640x360/96c10c6475/47ae4213c4289a0bc0bb2bf1906eb42d1680613685_main.jpg/m/filters:quality(95)format(webp)"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnwfUM7lfCNSNsxnTNFcUWWq9jSuDZM7p4XcQye5znXyCXcMNdLmpxJMUkcA-1JrS6cs&usqp=CAU"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/mashle_magic_and_adventure_1679637857384_1679637866774_1679637866774.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/mashle_magic_and_adventure_1679637857384_1679637866774_1679637866774.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/mashle_magic_and_adventure_1679637857384_1679637866774_1679637866774.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/mashle_magic_and_adventure_1679637857384_1679637866774_1679637866774.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/mashle_magic_and_adventure_1679637857384_1679637866774_1679637866774.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "400px",
      height: "300px",
    }}
    src="https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/mashle_magic_and_adventure_1679637857384_1679637866774_1679637866774.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

function Carousel() {
  return(
    <>
    <AliceCarousel
      responsive={{
        0: {
          items: 3,
        },
      }}
      mouseTracking={true}
      infinite={true}
      disableDotsControls={true}
      animationDuration={200}
      items={items}
      activeIndex={1}
    />
  </>
  )

}

export default Carousel;
