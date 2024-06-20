const products = [
    { 
        id: 1, 
        name: "Intel Core i7-11700K Processor", 
        description: "8-Core 16-Thread, up to 5.0 GHz", 
        price: 399, 
        image: "https://via.placeholder.com/150",
        longDescription: "The Intel Core i7-11700K processor delivers exceptional performance with its 8 cores and 16 threads, capable of reaching speeds up to 5.0 GHz. Built for gaming and intensive tasks, it offers unmatched responsiveness and multitasking capabilities. Whether you're gaming at high frame rates, streaming content, or editing videos, the Core i7-11700K ensures smooth performance and seamless computing experience."
    },
    { 
        id: 2, 
        name: "AMD Ryzen 9 5900X Processor", 
        description: "12-Core 24-Thread, up to 4.8 GHz", 
        price: 549, 
        image: "https://via.placeholder.com/150",
        longDescription: "The AMD Ryzen 9 5900X processor is a powerhouse with its 12 cores and 24 threads, offering speeds up to 4.8 GHz. Optimized for performance and efficiency, it excels in gaming, content creation, and heavy workloads. The Ryzen 9 5900X provides incredible multitasking capabilities and smooth gameplay, making it ideal for enthusiasts and professionals alike."
    },
    { 
        id: 3, 
        name: "NVIDIA GeForce RTX 3080 Graphics Card", 
        description: "10 GB GDDR6X, Ampere Architecture", 
        price: 799, 
        image: "https://via.placeholder.com/150",
        longDescription: "The NVIDIA GeForce RTX 3080 graphics card features 10 GB of GDDR6X memory and the latest Ampere architecture, delivering unprecedented gaming performance and ray-tracing capabilities. With its advanced AI rendering and real-time ray tracing, it offers lifelike visuals and immersive gaming experiences. The RTX 3080 is perfect for gamers and content creators looking to elevate their graphics performance."
    },
    { 
        id: 4, 
        name: "AMD Radeon RX 6800 XT Graphics Card", 
        description: "16 GB GDDR6, RDNA 2 Architecture", 
        price: 649, 
        image: "https://via.placeholder.com/150",
        longDescription: "The AMD Radeon RX 6800 XT graphics card features 16 GB of GDDR6 memory and the RDNA 2 architecture, delivering high-performance gaming and content creation capabilities. With its advanced compute units and enhanced visual effects, it offers smooth gameplay and superior graphics rendering. The RX 6800 XT is designed for enthusiasts seeking exceptional gaming experiences and productivity."
    },
    // Add more products here up to 100
];

// Adding dummy products for example
for (let i = 5; i <= 100; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        description: `Description for product ${i}.`,
        price: Math.floor(Math.random() * 500),
        image: "https://via.placeholder.com/150",
        longDescription: `This is a detailed description for Product ${i}. It includes all the features, specifications, and benefits of the product. Product ${i} is known for its high quality and excellent performance, making it a popular choice among users. With its advanced technology and reliable design, Product ${i} delivers exceptional results in various applications. Whether you're using it for gaming, productivity, or entertainment, Product ${i} provides a seamless and enjoyable experience. Its durable construction and innovative features make it a worthwhile investment for anyone looking to upgrade their setup.`
    });
}
