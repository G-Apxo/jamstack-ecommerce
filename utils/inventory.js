import { v4 as uuid } from "uuid"

let inventory = [
  {
    categories: ["music"],
    name: "Event-1",
    price: "1000",
    image: "/products/event1.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 4,
  },
  {
    categories: ["music"],
    name: "Event-5",
    price: "1000",
    image: "/products/event5.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 2,
  },
  {
    categories:  ["rave"],
    name: "Event-6",
    price: "800",
    image: "/products/event6.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 8,
  },
  {
    categories:  ["rave"],
    name: "Event-7",
    price: "900",
    image: "/products/event7.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 10,
  },
  {
    categories: ["this week", "sport"],
    name: "Event-8",
    price: "1200",
    image: "/products/event8.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 7,
  },
  {
    categories: ["this week", "sport"],
    name: "Event-9",
    price: "500",
    image: "/products/event9.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 13,
  },
  {
    categories: ["this week", "sport"],
    name: "Event-10",
    price: "650",
    image: "/products/event10.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 9,
  },
  {
    categories: ["sport",],
    name: "Event-11",
    price: "1230",
    image: "/products/event11.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 24,
  },

  {
    categories: ["sport"],
    name: "Event-2",
    price: "800",
    image: "/products/event2.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 43,
  },
  {
    categories: [ "sport"],
    name: "Event-3",
    price: "900",
    image: "/products/event3.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    brand: "Giorgi Apkhadze",
    currentInventory: 2,
  },
  {
    categories: ["this week", "sport"],
    name: "Event-4",
    price: "1200",
    image: "/products/event4.jpeg",
    description:
      "A music event is a gathering or performance featuring live music, typically featuring a variety of musical acts or artists. Music events can range in size and scope, from small, intimate concerts featuring local bands at a local venue,",
    currentInventory: 14,
  },

  {
    categories: ["this week", "theatre"],
    name: "Theater-1",
    price: "300",
    image: "/products/theater1.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 12,
  },
  {
    categories: ["this week", "theatre"],
    name: "Theater-2",
    price: "825",
    image: "/products/theater2.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 13,
  },
  {
    categories: ["this week", "theatre"],
    name: "Theater-3",
    price: "720",
    image: "/products/theater3.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 33,
  },
  {
    categories: ["this week", "theatre"],
    name: "Theater-4",
    price: "2000",
    image: "/products/theater4.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 23,
  },
  {
    categories: ["this week", "theatre"],
    name: "Theater-5",
    price: "1100",
    image: "/products/theater5.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 13,
  },
  {
    categories: ["this week", "theatre"],
    name: "Theater-6",
    price: "600",
    image: "/products/theater6.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 15,
  },

  {
    categories: ["this week", "theatre"],
    name: "Theater-7",
    price: "775",
    image: "/products/theater7.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 44,
  },
  {
    categories: ["this week", "theatre"],
    name: "Theater-8",
    price: "1200",
    image: "/products/theater8.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 17,
  },
  {
    categories: ["this week", "theatre"],
    name: "Theater-9",
    price: "1600",
    image: "/products/theater9.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 28,
  },
  {
    categories: ["this week", "theatre"],
    name: "Theater-10",
    price: "550",
    image: "/products/theater10.jpeg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Giorgi Apkhadze",
    currentInventory: 31,
  }, // {
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
