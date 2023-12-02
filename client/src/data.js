const rentalProperties = [
  {
    imageUrls: [
      "https://epropertynepal.com/system/photos/21602/original_1.jpg?1660639794",
    ],
    title: "Luxury Mansion in Dhapasi",
    description:
      "An exquisite mansion in Dhapasi offering grand living spaces and elite finishes.",
    address: "12 Royal Avenue, Dhapasi",
    bedrooms: 6,
    bathrooms: 4,
    price: 5000,
    warmingType: "Central Heating",
    area: "3000 sqft",
    ageOfBuilding: 2,
    type: "sale",
  },
  {
    imageUrls: [
      "https://1.bp.blogspot.com/-OyrFEwuxdME/X9G4C8KZ36I/AAAAAAAAXLQ/B7bBAXDM0SsIElYMYMDXzgi_Ml5pMpCcwCLcBGAsYHQ/w1200-h630-p-k-no-nu/height.jpg",
    ],
    title: "Contemporary Home in Baneshwor",
    description:
      "Modern and stylish home in Baneshwor with state-of-the-art amenities.",
    address: "78 Cityscape Road, Baneshwor",
    bedrooms: 4,
    bathrooms: 3,
    price: 3500,
    warmingType: "Solar",
    area: "2500 sqft",
    ageOfBuilding: 4,
    type: "sale",
  },
  {
    imageUrls: [
      "https://propertynepal.com/images/properties/2838/16985721268.jpg",
    ],
    title: "Charming Villa in Lalitpur",
    description:
      "A charming villa with a lush garden and traditional touches in Lalitpur.",
    address: "55 Heritage Lane, Lalitpur",
    bedrooms: 5,
    bathrooms: 3,
    price: 4500,
    warmingType: "Gas",
    area: "2800 sqft",
    ageOfBuilding: 6,
    type: "sale",
  },
  {
    imageUrls: [
      "https://www.realestateinnepal.com/wp-content/uploads/2023/10/House-For-Sale-In-Imadol-9-500x350.jpeg",
    ],
    title: "Eco-friendly House in Kapan",
    description:
      "Eco-friendly and spacious house in Kapan, with a focus on sustainable living.",
    address: "33 Green Terrace, Kapan",
    bedrooms: 4,
    bathrooms: 2,
    price: 3200,
    warmingType: "Wood Fired",
    area: "2000 sqft",
    ageOfBuilding: 5,
    type: "sale",
  },
  {
    imageUrls: [
      "https://nepalspace.com/wp-content/uploads/2021/09/2-14-1740x960-c-center.jpg",
    ],
    title: "Trendy Loft in Thamel",
    description:
      "Trendy and modern loft in the heart of Thamel, ideal for urban lifestyles.",
    address: "89 Downtown Street, Thamel",
    bedrooms: 2,
    bathrooms: 2,
    price: 2700,
    warmingType: "Electric",
    area: "1200 sqft",
    ageOfBuilding: 3,
    type: "sale",
  },
  {
    imageUrls: [
      "https://images.trvl-media.com/lodging/43000000/42740000/42731800/42731732/2e8c2e49.jpg?impolicy=resizecrop&rw=400&ra=fit",
    ],
    title: "Colonial Bungalow in Bhainsepati",
    description:
      "Elegant colonial-style bungalow in Bhainsepati with a spacious layout and classic design.",
    address: "101 Colonial Road, Bhainsepati",
    bedrooms: 4,
    bathrooms: 3,
    price: 4000,
    warmingType: "Central Heating",
    area: "2600 sqft",
    ageOfBuilding: 8,
    type: "sale",
  },
  {
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq58RTNIGPSCREicIw1NFMZQXBwlHOQWOtA&usqp=CAU",
    ],
    title: "Himalayan View Apartment in Budhanilkantha",
    description:
      "Apartment with stunning Himalayan views in Budhanilkantha, perfect for nature lovers.",
    address: "67 Mountain View, Budhanilkantha",
    bedrooms: 3,
    bathrooms: 2,
    price: 2500,
    warmingType: "Gas",
    area: "1500 sqft",
    ageOfBuilding: 7,
    type: "sale",
  },
  {
    imageUrls: [
      "https://epropertynepal.com/system/photos/15215/original_eProperty_nepal_%284%29.jpg?1613557227",
    ],
    title: "Traditional Newari House in Patan",
    description:
      "A beautifully preserved traditional Newari house in the heart of Patan.",
    address: "44 Cultural Avenue, Patan",
    bedrooms: 5,
    bathrooms: 4,
    price: 3000,
    warmingType: "Wood Fired",
    area: "2200 sqft",
    ageOfBuilding: 15,
    type: "sale",
  },
  {
    imageUrls: [
      "https://epropertynepal.com/system/photos/22458/original_1.jpg?1667975550",
    ],
    title: "Suburban Retreat in Tokha",
    description:
      "A peaceful suburban retreat in Tokha, ideal for families looking for a quiet escape.",
    address: "88 Green Meadows, Tokha",
    bedrooms: 4,
    bathrooms: 3,
    price: 3600,
    warmingType: "Electric",
    area: "2400 sqft",
    ageOfBuilding: 10,
    type: "sale",
  },
  {
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduyDSFY0mHFBkOUXoHrPubCbvLR3aNWlPITGPbKoqTj3vHoWv-crGmBFlXmv3JPibgPc&usqp=CAU",
    ],
    title: "Riverside Residence in Swayambhu",
    description:
      "A stunning riverside residence in Swayambhu, with scenic views and elegant interiors.",
    address: "12 River Road, Swayambhu",
    bedrooms: 5,
    bathrooms: 4,
    price: 4100,
    warmingType: "Gas",
    area: "2700 sqft",
    ageOfBuilding: 12,
    type: "sale",
  },
  {
    imageUrls: [
      "https://www.realestateinnepal.com/wp-content/uploads/2023/09/House-For-Sale-In-Balaju-6-scaled.jpeg",
    ],
    title: "Chic Apartment in Jawalakhel",
    description:
      "A chic and contemporary apartment in Jawalakhel, perfect for modern urban living.",
    address: "55 City Center, Jawalakhel",
    bedrooms: 3,
    bathrooms: 2,
    price: 2900,
    warmingType: "Central Heating",
    area: "1300 sqft",
    ageOfBuilding: 5,
    type: "sale",
  },
  {
    imageUrls: ["https://www.gharghaderi.com/images/8893110978.jpg"],
    title: "Heritage Home in Bhaktapur",
    description:
      "A beautifully restored heritage home in Bhaktapur, rich in history and charm.",
    address: "30 Ancient Street, Bhaktapur",
    bedrooms: 6,
    bathrooms: 4,
    price: 4700,
    warmingType: "Solar",
    area: "3200 sqft",
    ageOfBuilding: 18,
    type: "sale",
  },
];

export default rentalProperties;
