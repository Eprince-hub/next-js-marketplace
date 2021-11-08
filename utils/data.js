// using bcrypt for the password hashing
import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345678'),
      address: 'man dummy street 26',
      city: 'Vienna',
      postCode: '4810',
      isAdmin: true,
      isSiteAdmin: false,
    },

    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345678'),
      address: 'man dummy street 26',
      city: 'Vienna',
      postCode: '4810',
      isAdmin: false,
      isSiteAdmin: false,
    },
  ],

  products: [
    {
      id: 1,
      name: 'Food Box One',
      slug: 'food-box-one',
      category: 'Vegetables',
      image: '/images/box1.jpeg',
      price: 70,
      farmerName: 'farmer one',
      farmingMethod: 'Bio and Climate Friendly',
      address: 'man dummy street 26',
      city: 'Vienna',
      postCode: '4810',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'The food box contains the following items and they are sweet. and the farmer will suggest some recept for cooking what is inside the box',
      contains: 'Spinach, Tomatoes, Asparagus, Garlic',
      dietType: 'Gluten Free, Lactose Free, Vegan, No preservatives',
      package: 'In a Carton Box',
      recipe: 'You can cook bla bla bla with this items',
    },
    {
      id: 2,
      name: 'Food Box Two',
      slug: 'food-box-two',
      category: 'Cereals',
      image: '/images/box2.jpeg',
      price: 70,
      farmerName: 'farmer one',
      farmingMethod: 'Bio and Climate Friendly',
      address: 'man dummy street 26',
      city: 'Vienna',
      postCode: '4810',
      rating: 4.5,
      numReviews: 3,
      countInStock: 10,
      description:
        'The food box contains the following items and they are sweet. and the farmer will suggest some recept for cooking what is inside the box',
      contains: 'Spinach, Tomatoes, Asparagus, Garlic',
      dietType: 'Gluten Free, Lactose Free, Vegan, No preservatives',
      package: 'In a Carton Box',
      recipe: 'You can cook bla bla bla with this items',
    },
    {
      id: 3,
      name: 'Food Box Three',
      slug: 'food-box-three',
      category: 'Nuts',
      image: '/images/box3.jpeg',
      price: 70,
      farmerName: 'farmer Three',
      farmingMethod: 'Bio and Climate Friendly',
      address: 'man dummy street 26',
      city: 'Vienna',
      postCode: '4810',
      rating: 4.5,
      numReviews: 5,
      countInStock: 15,
      description:
        'The food box contains the following items and they are sweet. and the farmer will suggest some recept for cooking what is inside the box',
      contains: 'Spinach, Tomatoes, Asparagus, Garlic',
      dietType: 'Gluten Free, Lactose Free, Vegan, No preservatives',
      package: 'In a Carton Box',
      recipe: 'You can cook bla bla bla with this items',
    },
    {
      id: 4,
      name: 'Food Box Four',
      slug: 'food-box-four',
      category: 'cereals',
      image: '/images/box4.jpeg',
      price: 20,
      farmerName: 'farmer two',
      farmingMethod: 'Bio and Climate Friendly',
      address: 'man dummy street 26',
      city: 'Vienna',
      postCode: '4810',
      rating: 4.5,
      numReviews: 5,
      countInStock: 15,
      description:
        'The food box contains the following items and they are sweet. and the farmer will suggest some recept for cooking what is inside the box',
      contains: 'Spinach, Tomatoes, Asparagus, Garlic',
      dietType: 'Gluten Free, Lactose Free, Vegan, No preservatives',
      package: 'In a Carton Box',
      contains: 'Spinach, Tomatoes, Asparagus, Garlic',
      dietType: 'Gluten Free, Lactose Free, Vegan, No preservatives',
      package: 'In a Carton Box',
      recipe: 'You can cook bla bla bla with this items',
    },
    {
      id: 5,
      name: 'Food Box Five',
      slug: 'food-box-five',
      category: 'Vegetable',
      image: '/images/box5.jpeg',
      price: 70,
      farmerName: 'farmer Three',
      farmingMethod: 'Bio and Climate Friendly',
      address: 'man dummy street 26',
      city: 'Vienna',
      postCode: '4810',
      rating: 4.5,
      numReviews: 5,
      countInStock: 15,
      description:
        'The food box contains the following items and they are sweet. and the farmer will suggest some recept for cooking what is inside the box',
      contains: 'Spinach, Tomatoes, Asparagus, Garlic',
      dietType: 'Gluten Free, Lactose Free, Vegan, No preservatives',
      package: 'In a Carton Box',
      contains: 'Spinach, Tomatoes, Asparagus, Garlic',
      dietType: 'Gluten Free, Lactose Free, Vegan, No preservatives',
      package: 'In a Carton Box',
      recipe: 'You can cook bla bla bla with this items',
    },
  ],
};

export default data;
