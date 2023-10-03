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
      image: './assets/img/png//01.png'
    },
    {
      id: 2,
      name: 'Strawberry Cheescake',
      price: 19.95,
      description: 'Brown butter cheesecake topped with fresh strawberries',
      category: 'cheesecake',
      image: './assets/img/png//02.png'
    },
    {
      id: 3,
      name: 'Chocolate Cheesecake',
      price: 18.95,
      description: 'Dark chocolate cheesecake topped with candied macadamaia nuts',
      category: 'cheesecake',
      image: './assets/img/png//03.png'
    },
    {
      id: 4,
      name: 'Birthday Cheescake',
      price: 19.95,
      description: 'Original cheesecake elegantly decorated with a rose glaze',
      category: 'cheesecake',
      image: './assets/img/png//04.png'
    },
    {
      id: 5,
      name: 'Caramel Cheesecake',
      price: 18.95,
      description: 'Cheesecake with caramel glaze and caramel kettle corn',
      category: 'cheesecake',
      image: './assets/img/png//05.png'
    },
    {
      id: 6,
      name: 'Pistacio Cheescake',
      price: 19.95,
      description: 'Original Cheesecake topped with fresh pistacio creme and crumbled salted pistacio',
      category: 'cheesecake',
      image: './assets/img/png//06.png'
    },
    {
      id: 7,
      name: 'Original Apple Pie',
      price: 19.95,
      description: 'Original Apple Pie, our version of a classic',
      category: 'pie',
      image: './assets/img/png//07.png'
    },
    {
      id: 8,
      name: 'Original Pumpkin Pie',
      price: 18.95,
      description: 'Original Pumpkin Pie, our version of a classic',
      category: 'pie',
      image: './assets/img/png//08.png'
    },
    {
      id: 9,
      name: 'Original Pecan Pie',
      price: 19.95,
      description: 'Original Pecan Pie, our version of a classic',
      category: 'pie',
      image: './assets/img/png//09.png'
    }
  ];