const express = require("express");
const cors = require("cors");
const path=require("path")
const app = express();
app.use(cors({origin:"http://localhost:3000"}));

app.use("/images",express.static(path.join(__dirname,"public/images")))


const areas = ["Chennai", "Erode", "Salem","Coimbatore","Karur"];
const rooms = {
  "Chennai": [
    { id: 1,name:"Somerset Greenways", image:"/images/c1.jpg", rating: 4.8, price: 11800 },
    { id: 2,name:"The Westin", image: "/images/c6.jpg", rating: 4.9, price: 12800},
    { id: 3,name:"ITC Grand Chola", image: "/images/c3.jpg", rating: 4.5, price: 15000 },
    { id: 4,name:"Hotel Akmg Towers", image: "/images/c4.jpg", rating: 4.7, price: 11250},
    { id: 5,name:"Four Points", image: "/images/c5.jpg", rating: 4.4, price: 10500 }
  ],
  "Erode": [
    { id: 6,name:"Hotel Turmeric", image: "/images/e1.jpg", rating: 4.3, price: 8500 },
    { id: 7,name:"Hotel Royal Embassy", image: "/images/e2.jpg", rating: 4.7, price: 10000 },
    { id: 8,name:"D'WAYFARER INN Resort", image: "/images/e5.jpg", rating: 4.5, price: 10200 },
    { id: 9,name:"Hotel Atrium", image: "/images/e4.jpg", rating: 4.0, price: 9999 }
  ],
  "Salem": [
    { id: 10,name:"Radisson salem", image: "/images/s1.jpg", rating: 4.8, price: 5500 },
    { id: 11,name:"Grand Estancia", image: "/images/s2.jpg", rating: 4.4, price: 4599 },
    { id: 12,name:"CJ Pallazzio", image: "/images/s3.jpg", rating: 4.2, price: 4500 },
    { id: 13,name:"Hotel Cenneys gateway", image: "/images/s4.jpg", rating: 4.0, price: 6999 },
    { id: 14,name:"The Brook Resort", image: "/images/s5.jpg", rating: 4.0, price: 3999 }
  ],
  "Coimbatore":[
    {id:15,name:"Hotel Vintage Castle", image:"/images/cbe1.jpg",rating:4.4,price:5999},
    {id:16,name:"Harikrishna Park", image:"/images/cbe2.jpg",rating:5.0,price:4599},
    {id:17,name:"J Square Inn", image:"/images/cbe3.jpg",rating:4.7,price:4500},
    {id:18,name:"IBIS Coimbatore", image:"/images/cbe4.jpg",rating:4.4,price:3999},
    {id:19,name:"The Grand Regent",image:"/images/cbe5.jpg",rating:4.1,price:3699},
    {id:20,name:"O By Tamara", image:"/images/cbe6.jpg",rating:4.2,price:3980}
  ],
  "Karur":[
    {id:21,name:"KRV Meridian Hotel",image:"/images/k1.jpg",rating:4.3,price:3599},
    {id:21,name:"Hotel Le Bond",image:"/images/k2.jpg",rating:4.7,price:4999},
    {id:22,name:"The Residency",image:"/images/k3.jpg",rating:4.2,price:6399}
  ]
};

app.get("/areas", (req, res) => {
  console.log("GET /areas called");
  
  res.json(areas);
});

app.get("/rooms/:area", (req, res) => {
  console.log(`GET /rooms/${req.params.area}called`);
  res.json(rooms[req.params.area] || []);
});


app.get("/fevicon.ico",(req,res)=>res.status(204).end())

app.use("/images",(req,res,next)=>{
  console.log("image requested",req.url)
  next();
})
app.listen(5000, () => console.log("Server running on port 5000"));