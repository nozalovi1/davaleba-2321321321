const Image1 = () => {
  return new Promise((resolve, reject) => {
    resolve("Image 1");
  });
};

const Image2 = () => {
  return new Promise((resolve, reject) => {
    resolve("Image 2");
  });
};

Promise.any([Image1(), Image2()])
  .then((result) => {
    console.log(" წარმატებით აიტვირთა:", result);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
