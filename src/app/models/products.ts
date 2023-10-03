export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string
  }
  
  export const products = [
    {
      id: 1,
      name: 'Original Cheesecake',
      price: 18.95,
      description: 'Original Cheesecake, our version of a classic',
      category: 'cheesecake',
      image: './assets/img/svg/01.svg'
    },
    {
      id: 2,
      name: 'Strawberry Cheescake',
      price: 19.95,
      description: 'Brown butter cheesecake topped with fresh strawberries',
      category: 'cheesecake',
      image: './assets/img/svg/02.svg'
    },
    {
      id: 3,
      name: 'Chocolate Cheesecake',
      price: 18.95,
      description: 'Dark chocolate cheesecake topped with candied macadamaia nuts',
      category: 'cheesecake',
      image: './assets/img/svg/03.svg'
    },
    {
      id: 4,
      name: 'Birthday Cheescake',
      price: 19.95,
      description: 'Original cheesecake elegantly decorated with a rose glaze',
      category: 'cheesecake',
      image: './assets/img/svg/04.svg'
    },
    {
      id: 5,
      name: 'Caramel Cheesecake',
      price: 18.95,
      description: 'Cheesecake with caramel glaze and caramel kettle corn',
      category: 'cheesecake',
      image: './assets/img/svg/05.svg'
    },
    {
      id: 6,
      name: 'Pistacio Cheescake',
      price: 19.95,
      description: 'Original Cheesecake topped with fresh pistacio creme and crumbled salted pistacio',
      category: 'cheesecake',
      image: './assets/img/svg/06.svg'
    },
    {
      id: 7,
      name: 'Original Apple Pie',
      price: 19.95,
      description: 'Original Apple Pie, our version of a classic',
      category: 'pie',
      image: './assets/img/svg/07.svg'
    },
    {
      id: 8,
      name: 'Original Pumpkin Pie',
      price: 18.95,
      description: 'Original Pumpkin Pie, our version of a classic',
      category: 'pie',
      image: './assets/img/svg/08.svg'
    },
    {
      id: 9,
      name: 'Original Pecan Pie',
      price: 19.95,
      description: 'Original Pecan Pie, our version of a classic',
      category: 'pie',
      image: './assets/img/svg/09.svg'
    }
  ];