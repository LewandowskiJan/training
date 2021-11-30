class GlobalStoreService {
  id;

  constructor() {
    this.id = (Math.random() * 1_000).toFixed(2);
  }
}

class LocalStoreService {
  id;

  constructor() {
    this.id = (Math.random() * 1_000).toFixed(2);
  }
}

class ContainerService {
  id;

  constructor() {
    this.id = (Math.random() * 1_000).toFixed(2);
  }
}

class Container {
  id;
  products = [];
  constructor(id, containerService) {
    this.id = id;
    this.containerService = containerService;
  }
  getAllIds() {
    return {
      containerId: this.id,
      containerService: this.containerService.id,
    };
  }

  getProductsAllId() {
    const arr = [];
    this.products.forEach((prod) => arr.push(prod.getAllIds()));
    return arr;
  }
}

class Product {
  id;

  constructor(id, globalStoreService, localStoreService) {
    this.id = id;
    this.globalStoreService = globalStoreService;
    this.localStoreService = localStoreService;
  }

  getAllIds() {
    return {
      productId: this.id,
      global: this.globalStoreService.id,
      local: this.localStoreService.id,
    };
  }
}

window.onload = () => {
  console.log('Concept');

  const containers = [];

  const global = new GlobalStoreService();

  [10, 11, 12].forEach((id) => {
    const containerService = new ContainerService();
    const container = new Container(id, containerService);

    [1, 2, 3, 4, 5, 6, 7].forEach((id) => {
      const local = new LocalStoreService();
      container.products.push(new Product(id, global, local));
    });

    containers.push(container);
  });

  containers.forEach((container) =>
    console.log({ container: container.getAllIds(), products: container.getProductsAllId() })
  );
};
