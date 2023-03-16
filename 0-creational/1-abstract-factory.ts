type Brand = "reebok" | "nike";

type Shoe = {
  logo: Brand;
  size: number;
};

type Shirt = {
  logo: Brand;
  size: "s" | "m" | "xl";
};

type WearFactory = {
  makeShoe(size: number): Shoe;
  makeShirt(size: "s" | "m" | "xl"): Shirt;
};

function createNikeFactory(): WearFactory {
  return {
    makeShoe: (size: number): Shoe => ({ logo: "nike", size }),
    makeShirt: (size: "s" | "m" | "xl"): Shirt => ({ logo: "nike", size }),
  };
}

function createReebokFactory(): WearFactory {
  return {
    makeShoe: (size: number): Shoe => ({ logo: "reebok", size }),
    makeShirt: (size: "s" | "m" | "xl"): Shirt => ({ logo: "reebok", size }),
  };
}

function createWearFactory(brand: Brand): WearFactory {
  const factories = {
    nike: createNikeFactory,
    reebok: createReebokFactory,
  };

  return factories[brand]();
}

const nikeFactory = createWearFactory("nike");
const reebokFactory = createWearFactory("reebok");

// clientCode
function makeShoe(factory: WearFactory, size: number): Shoe {
  return factory.makeShoe(size);
}

const nikeShoe = makeShoe(nikeFactory, 41);
const reebokShoe = makeShoe(reebokFactory, 42);
