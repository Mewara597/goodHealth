import Advertisment from "./Advertisment";

export default function Carousel() {
  const ads = [
    {
      label: "First Label",
      content: "Some representative placeholder content for the first slide",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbBg7Yn3Rqxs2CEuO1edKcyHfLhDaiG0JD9JmOhe_&s",
    },
    {
      label: "Second Label",
      content: "Some representative placeholder content for the second slide",
      src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst.depositphotos.com%2F3020889%2F3897%2Fi%2F600%2Fdepositphotos_38978113-stock-photo-ripe-hanging-cherry-tomato.jpg&tbnid=DfW7aWggygsVtM&vet=10CAQQxiAoBWoXChMIoNPzq-aZgAMVAAAAAB0AAAAAEAY..i&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fstock-photos%2Fsheri.html&docid=NLYBBIA-57hTNM&w=600&h=400&itg=1&q=small%20images%20pic&ved=0CAQQxiAoBWoXChMIoNPzq-aZgAMVAAAAAB0AAAAAEAY",
    },
    {
      label: "Third Label",
      content: "Some representative placeholder content for the third slide",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFLOnX6Yaxle0Og9VV_nRsTIwxjGnwnGlmfPVVvIBx8SPwqtZgEkYGRzS7FFWMy4ikI0&usqp=CAU",
    },
  ];

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {ads.map((ad, index) => (
          <Advertisment props={ad} key={index} />
        ))}
      </div>
    </div>
  );
}
