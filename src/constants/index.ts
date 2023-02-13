const base_url = "http://image.tmdb.org/t/p/";
const poster_sizes = [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original",
];
const backdrop_sizes = ["w300", "w780", "w1280", "original"];

const breakpointsSlider = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

export { poster_sizes, base_url, backdrop_sizes, breakpointsSlider };
