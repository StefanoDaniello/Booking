const CardList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Parigi",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "New York",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Tokyo",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Londra",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Roma",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Berlino",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Sydney",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Budapest",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Barcellona",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Amsterdam",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Città del Capo",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Singapore",
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Los Angeles",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Mosca",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Seul",
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Bruxelles",
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Vienna",
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Praga",
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Helsinki",
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    text: "San Francisco",
  },
];

export default CardList;
