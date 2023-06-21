type CartIconProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  itemsAmount: number;
};

type CartDiv = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cart: Array<{
    id: any;
    amount: number;
    stats: {
      images: Array<{
        bigImage: StaticImageData;
        smallImage: StaticImageData;
      }>;
      title: string;
      description: string;
      price: number;
    };
  }>;
  total: number;
  removeFromCart: (id: any) => void;
};

type SetNavMobile = {
  setCatnavMobile: Dispatch<SetStateAction<boolean>>;
};

type AddToCart = {
  addToCart: (item: Array<{}>, id: any) => void;
  increaseItemQuantity: (itemId: number) => void;
  decreaseItemQuantity: (itemId: number) => void;
  setItemQuantity: (itemId: any, newQuantity: any) => void;
  itemsAmount: number;
  handleInput: (
    e: {
      target: {
        value: string;
      };
    },
    id: any
  ) => void;
  handleSelect: (
    e: {
      target: {
        value: string;
      };
    },
    id: any
  ) => void;
};

type HandleInput = {
  handleInput: (
    e: {
      target: {
        value: string;
      };
    },
    id: any
  ) => void;
  handleSelect: (
    e: {
      target: {
        value: string;
      };
    },
    id: any
  ) => void;
};
