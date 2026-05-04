const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Gig = require("./models/Gig");

dotenv.config();

const seedGigs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // Clear existing gigs
    await Gig.deleteMany({});
    
    const categories = [
      "AI Development",
      "Website Development",
      "Video Editing",
      "Software Development",
      "Book Publishing",
      "Architecture & Interior Design",
      "Book Design"
    ];
    
    const gigs = [];
    
    const videoEditingNames = ["Pranav Upare", "Swaraj Shedge", "Raj Sonune", "Pushkar Patankar"];
    const videoEditingDesc = [
      "I will provide highly engaging, cinematic video editing for your YouTube channel and short films.",
      "I will edit fast-paced, viral-style TikToks, Instagram Reels, and YouTube Shorts with captions.",
      "I will deliver clean and professional corporate video editing for your business presentations.",
      "I will do advanced motion graphics, green screen removal, and visual effects for your videos."
    ];
    
    for (let cat of categories) {
      // Create 4 gigs for each category
      for (let i = 1; i <= 4; i++) {
        let sellerName = undefined;
        let title = `I will do professional ${cat} specifically for your business`;
        let desc = `I have 5 years of experience in ${cat}. I will deliver high-quality work that exceeds your expectations. Don't hesitate to contact me!`;
        
        if (cat === "Video Editing") {
          sellerName = videoEditingNames[i - 1];
          title = videoEditingDesc[i - 1];
          desc = `Hi, I am ${sellerName}. ${videoEditingDesc[i-1]} I guarantee top quality and fast delivery.`;
        }
        
        gigs.push({
          userId: "seed_seller_" + i,
          sellerName: sellerName,
          title: title,
          desc: desc,
          cat: cat,
          price: Math.floor(Math.random() * (1500 - 100) + 100),
          cover: `https://picsum.photos/400/300?random=${Math.random()}&cat=${cat.replace(/\s/g, '')}`,
          shortTitle: `Pro ${cat}`,
          shortDesc: `Fast and reliable ${cat} service`,
          deliveryTime: Math.floor(Math.random() * (7 - 1) + 1),
          revisionNumber: 3,
          sales: Math.floor(Math.random() * 50),
          totalStars: Math.floor(Math.random() * (25 - 5) + 5),
          starNumber: 5
        });
      }
    }
    
    await Gig.insertMany(gigs);
    console.log("Database seeded successfully with", gigs.length, "gigs.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding DB:", error);
    process.exit(1);
  }
};

seedGigs();
