/**
 * Problem: To hide compexity and provide simple interface to interact with
 */

type ProductType = "water" | "food";

interface Product {
  type: string;
}

interface OrderMaker {
  orderProduct(type: ProductType): Product;
}

// Facade - since it's incapsulating some complex logic
const orderMaker: OrderMaker = {
  orderProduct(type: ProductType) {
    // #1 get Bank info
    // #2 Make transaction
    // #3 Send Notification
    const products: Record<ProductType, Product> = {
      water: { type: "cola" },
      food: { type: "hamburger" },
    };

    return products[type];
  },
};

// client code - wherever you want to order a product you will use facade orderMaker with simple interface :)
orderMaker.orderProduct("water");
