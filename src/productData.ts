type Size = {
  code: number;
  sizeName: string;
  price: {
    current: number;
    original: number;
  }
}

type Product = {
  brandName: "Linn Ahlborg x NA-KD";
  imageUrls: string[];
  numberOfLikes: number;
  sizes: Size[];
  url: string;
  variation: {
    code: {
      $c: string;
    },
    displayName: {
      $c: string;
    },
  }
}