const sampleListings = [
  {
    name: "Cow",
    description:
      "This cow is unwell and needs urgent care. Your support can help in its treatment and recovery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1642904316094-513df0d78742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpY2slMjBkb21lc3RpYyUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    name: "Dog",
    description:
      "This dog is sick and needs medical attention. Your kind donation can help provide the care it deserves.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/485428186/photo/veterinary-doctor-does-medical-examination-on-a-yellow-labrador-retriever.webp?a=1&b=1&s=612x612&w=0&k=20&c=dGmXQeb9AkcMn2gKkX6y2CjeT3dTSqDBvog258dIh5w=",
    },
  },
  {
    name: "Cat",
    description:
      "This sick cat needs immediate medical care. Your support can bring comfort and healing to this little life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1710322928695-c7fb49886cb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2ljayUyMGRvbWVzdGljJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    name: "Goat",
    description:
      "The goat is in poor health and needs urgent treatment. Your donation can help it recover and live a healthy life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1748195813778-f576eb272835?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpY2slMjBkb21lc3RpYyUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    name: "Buffalo",
    description:
      "This buffalo is unwell and needs proper care and treatment. Your help can make a big difference in its recovery.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/471683849/photo/sleeping-water-buffalo.webp?a=1&b=1&s=612x612&w=0&k=20&c=uHGzhnZV1OctwCTYNEK2QypV3rJLLVnKnvJ1N0Huqnw=",
    },
  },
  {
    name: "Cow",
    description:
      "This cow is in distress and needs urgent medical support. Your kind contribution can help relieve its pain and aid in recovery.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1151559805/photo/buffalo-tears-thailaland.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nznk-oTQUl5xaNL6bTLkmn5kAzlg7351ynhwmiSdkpw=",
    },
  },
  {
    name: "Cat",
    description:
      "This cat is not well and needs immediate care. Your donation can provide the treatment it needs to recover and feel safe again.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661962846752-0dcdd93eb758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2ljayUyMGRvbWVzdGljJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    name: "Wolf",
    description:
      "This injured wolf needs urgent medical attention and care. Your support can help it heal and return to a safe environment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1610359798001-3e0cd6c8faab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNpY2slMjBkb21lc3RpYyUyMGFuaW1hbHMlMjBjYW1tZWx8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    name: "Cat",
    description:
      "This cat is under medical care and needs your help to recover. A small donation can make a big difference in its healing journey",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1435555882/photo/a-young-female-vet-examining-a-kitten.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wdr2JrAfFstgTKZVdXodT1x-Tf3_VgmvXafdYW0InkM=",
    },
  },
  {
    name: "dog",
    description:
      "This dog is sick and receiving veterinary care. Your generous support can help ensure it gets the treatment and comfort it needs.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/485362022/photo/vet-makes-labrador-retreiver-feel-comfortable-before-checkup.webp?a=1&b=1&s=612x612&w=0&k=20&c=zLWUsBalbYnhODJbwCVPAreBdQ2dF01KkvLtl5D5B-4=",
    },
  },
  {
    name: "Horse",
    description:
      "This horse is sick and needs medical care and rest. Your donation can help provide treatment and support its recovery.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/474904575/photo/taking-care-of-my-horse.webp?a=1&b=1&s=612x612&w=0&k=20&c=87hFfUAGRrgEtJ-ZDso7WRl0Ff6HB13CwX7TvwBc-sM=",
    },
  },
  {
    name: "Elephant",
    description:
      "This elephant is unwell and needs urgent medical attention. Your support can help provide the care it needs to recover and thrive again.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/480587149/photo/african-elephants.webp?a=1&b=1&s=612x612&w=0&k=20&c=_INaGOOZsDitydNtCOtxM57NwU9pgdrFKB6HxDMndt8=",
    },
  },
  {
    name: "Camel",
    description:
      "This camel is sick and in need of medical care. Your kind donation can help provide the treatment and comfort it deserves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1676557819482-624e0cd4891e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWxsJTIwY2FtZWx8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    name: "Cow",
    description:
      "This cow is sick and undergoing treatment. Your support can help cover its medical expenses and ensure a healthy recovery.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1168133648/photo/vet-injection-for-cow.webp?a=1&b=1&s=612x612&w=0&k=20&c=vAx7aiRjWoyl8X9Y0d7yNvxG5xbXqz1FK0rLNwDsuE4=",
    },
  },
  {
    name: "Cow",
    description:
      "This cow is unwell and currently under veterinary care. Your kind donation can help ensure it receives the proper treatment and attention it needs.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/104286135/photo/farmer-with-vet-examining-calf.webp?a=1&b=1&s=612x612&w=0&k=20&c=ahIu0it7mrKd7MkxgQdqdxiKs3eOvfMZbgKdecz0248=",
    },
  },
  {
    name: "Rat",
    description:
      "This rat is sick and needs compassionate care. Your support can help provide the treatment it needs to recover and be safely released.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/2216858658/photo/dont-kill-the-rats-catch-them-and-release-them-in-an-open-ground.webp?a=1&b=1&s=612x612&w=0&k=20&c=8qqEkxlagOn2bGHvJUgn5u41CZMXVlJuyW_2YdS9xHw=",
    },
  },
];

export default { data: sampleListings };