const rentalProperties = [
  {
    imageUrls: [
      "https://nepalspace.com/wp-content/uploads/2020/01/1-14-1170x600-c-center.jpg",
    ],
    title: "Cozy Kathmandu House",
    description:
      "A charming house in the vibrant heart of Kathmandu. Ideal for city lovers.",
    address: "12 Thamel Marg, Kathmandu",
    bedrooms: 3,
    bathrooms: 2,
    price: 1500,
    warmingType: "Central Heating",
    area: "1300 sqft",
    ageOfBuilding: 5,
  },
  {
    imageUrls: [
      "https://www.realtynepal.com/uploads/2020/02/1-3726-750x750.jpg",
    ],
    title: "Modern Pokhara Apartment",
    description:
      "Sleek, modern apartment with beautiful mountain views. Close to Phewa Lake.",
    address: "22 Lakeside Road, Pokhara",
    bedrooms: 2,
    bathrooms: 1,
    price: 1000,
    warmingType: "Electric",
    area: "800 sqft",
    ageOfBuilding: 3,
  },
  {
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEEu_3eeTuxMqVrbWdq0gK84znEvU9rzDJ4ZxDh2ISUCcISkJFCMAdySCPILpEYK7M9k&usqp=CAU",
    ],
    title: "Traditional Bhaktapur Home",
    description:
      "Traditional Newari house in Bhaktapur, rich in culture and history.",
    address: "45 Durbar Square, Bhaktapur",
    bedrooms: 4,
    bathrooms: 2,
    price: 1100,
    warmingType: "Wood Fired",
    area: "1800 sqft",
    ageOfBuilding: 20,
  },
  {
    imageUrls: [
      "https://dalaydai.com/media/properties/house-for-rent-at-gongabu-kathmandu/original_IMG_0873.jpg",
    ],
    title: "Patan Studio",
    description:
      "Affordable and cozy studio near Patan Durbar Square, great for singles.",
    address: "33 Lalitpur St, Patan",
    bedrooms: 0, // Studio
    bathrooms: 1,
    price: 500,
    warmingType: "Electric",
    area: "500 sqft",
    ageOfBuilding: 10,
  },
  {
    imageUrls: [
      "https://i2.wp.com/nepalspace.com/wp-content/uploads/2020/07/1.1.jpg?fit=1024%2C768&ssl=1",
    ],
    title: "Luxury Everest View",
    description:
      "Exclusive property with a breathtaking view of Mount Everest, surrounded by nature.",
    address: "78 Everest View Rd, Solukhumbu",
    bedrooms: 3,
    bathrooms: 3,
    price: 3000,
    warmingType: "Solar",
    area: "2000 sqft",
    ageOfBuilding: 8,
  },
  {
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5uQ9-om_yGsYCXap2NgKlIycWSES_LxhE86-IJ_0gr_LbkWVx6hIPF4iBw7fYu1kKYs&usqp=CAU",
    ],
    title: "Charming Bungalow in Lalitpur",
    description:
      "A beautiful bungalow with a large garden, located in a peaceful part of Lalitpur.",
    address: "67 Greenfield Ave, Lalitpur",
    bedrooms: 3,
    bathrooms: 2,
    price: 1300,
    warmingType: "Gas",
    area: "1400 sqft",
    ageOfBuilding: 12,
  },
  {
    imageUrls: [
      "https://www.realestateinnepal.com/wp-content/uploads/2020/08/House-for-sale-in-Budhanilkantha-6.jpg",
    ],
    title: "Budget-friendly Biratnagar Flat",
    description:
      "An affordable, compact flat in Biratnagar, suitable for small families or couples.",
    address: "25 Main St, Biratnagar",
    bedrooms: 2,
    bathrooms: 1,
    price: 700,
    warmingType: "Electric",
    area: "600 sqft",
    ageOfBuilding: 15,
  },
  {
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKnanuNAZ7TMiHNIrgtsp1Zsu7YtaoMA4wKH0bjou6yIhvjl5D0lG5xbY-vm2Hlh7yQY&usqp=CAU",
    ],
    title: "Luxury Villa in Bhairahawa",
    description:
      "A luxury villa with modern amenities and a private pool, located in Bhairahawa.",
    address: "90 Riverside Road, Bhairahawa",
    bedrooms: 4,
    bathrooms: 3,
    price: 2500,
    warmingType: "Central Heating",
    area: "2200 sqft",
    ageOfBuilding: 7,
  },
  {
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqsTpfoAZEED-Bk0LEH9geX6RwZmBUMaJK_DSFy7e2_Gv0XvmCHaM74DPIdlSPEMpWzE&usqp=CAU",
    ],
    title: "Compact Janakpur Apartment",
    description:
      "A modern, well-designed apartment in Janakpur, perfect for young professionals.",
    address: "18 Urban Lane, Janakpur",
    bedrooms: 1,
    bathrooms: 1,
    price: 600,
    warmingType: "Electric",
    area: "500 sqft",
    ageOfBuilding: 5,
  },
  {
    imageUrls: ["https://www.longtermlettings.com/cache/hms-1/hms_72558.jpg"],
    title: "Spacious Hetauda House",
    description:
      "A spacious and well-maintained house in Hetauda, ideal for a large family.",
    address: "33 Hilltop Ave, Hetauda",
    bedrooms: 5,
    bathrooms: 4,
    price: 1800,
    warmingType: "Wood Fired",
    area: "2500 sqft",
    ageOfBuilding: 18,
  },
  {
    imageUrls: [
      "https://real-estate-tanzania.beforward.jp/wp-content/uploads/2022/08/IMG_20220811_212904_677.webp",
    ],
    title: "Butwal Townhouse",
    description:
      "A stylish townhouse in Butwal, close to local amenities and public transport.",
    address: "42 City Center, Butwal",
    bedrooms: 3,
    bathrooms: 2,
    price: 1500,
    warmingType: "Gas",
    area: "1600 sqft",
    ageOfBuilding: 10,
  },
];

export default rentalProperties;
