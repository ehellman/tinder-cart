export namespace Product {
  export type Size = {
    code: number;
    sizeName: string;
    price: {
      current: number;
      original: number;
    };
  };

  export type Model = {
    brandName: "Linn Ahlborg x NA-KD";
    imageUrls: string[];
    numberOfLikes: number;
    sizes: Product.Size[];
    url: string;
    variation: {
      code: {
        $c: string;
      };
      displayName: {
        $c: string;
      };
    };
  };
}
