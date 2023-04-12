import { getStoredCart } from "../utilities/fakedb";

export const jobAndCartData = async () => {
  const jobData = await fetch("/feature.json");
  const jobs = await jobData.json();

  const savedCart = getStoredCart();
  let cartArray = [];
  for (const id in savedCart) {
    const foundProduct = jobs.find((product) => product.id === id);
    if (foundProduct) {
      foundProduct.quantity = savedCart[id];
      cartArray.push(foundProduct);
    }
  }
  return { cartArray, jobs };
};
