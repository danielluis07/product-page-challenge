type CartIconProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  itemsAmount: number;
};

type CartDiv = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cart: Array<{
    id: string;
    amount: number;
    images: Array<{
      bigImage: StaticImageData;
      smallImage: StaticImageData;
    }>;
    title: string;
    description: string;
    price: number;
  }>;
  total: number;
  removeFromCart: (id: string) => void;
};

type SetNavMobile = {
  setCatnavMobile: Dispatch<SetStateAction<boolean>>;
};

type AddToCart = {
  addToCart: (item: Array<{}>, id: string) => void;
  increaseItemQuantity: (itemId: string) => void;
  decreaseItemQuantity: (itemId: string) => void;
  setItemQuantity: (itemId: any, newQuantity: any) => void;
  itemsAmount: number;
};

type HandleInput = {
  handleInput: (
    e: {
      target: {
        value: string;
      };
    },
    id: string
  ) => void;
  handleSelect: (
    e: {
      target: {
        value: string;
      };
    },
    id: string
  ) => void;
};
