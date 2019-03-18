const express = require('express')
const router = express.Router()

const attractions_info = [
  {id: 1, name: 'Wat Arun', img:'http://static.asiawebdirect.com/m/.imaging/1080x720/website/bangkok/portals/bangkok-com/homepage/attraction-temple/wat-arun/pagePropertiesImage.jpg', addr:'34 Wang Doem Road | Wat Arun, Bang Kok Yai, Bangkok 10600, Thailand', rate: 4.5},
  {id: 2, name: 'Chatuchak Weekend Market', img:'http://static.asiawebdirect.com/m/.imaging/1080x720/website/bangkok/portals/bangkok-com/homepage/shopping-market/popular-markets/pagePropertiesImage.jpg', addr:'Kamphaeng Phet 2 Rd, Lat Yao, Chatuchak, Bangkok 10900', rate: 4.4},
  {id: 3, name: 'Golden Buddha', img:'http://ed.files-media.com/ud/gal/campaign/31/91800/LUM_6788-500x334.JPG', addr:' 661 Charoen Krung Rd, Khwaeng Talat Noi, Khet Samphanthawong, Krung Thep Maha Nakhon 10100', rate: 4.5},
  {id: 4, name: 'Jim Thompson House Museum', img:'http://www.tripious.com/admin/js/dropzone/uploads/tripious_activity_3973662.jpg', addr:' 6 Rama I Rd, Khwaeng Wang Mai, Khet Pathum Wan, Krung Thep Maha Nakhon 10330', rate: 4.3},
  {id: 5, name: 'ASIATIQUE The Riverfront', img:'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/59/2016/11/03080654/06-Asiatique-The-Riverfront-In-Bangkok.jpg', addr:'2194 Charoen Krung Rd, Khwaeng Wat Phraya Krai, Khet Bang Kho Laem, Krung Thep Maha Nakhon 10120', rate: 4.3},
  {id: 6, name: 'Golden Mountain Temple', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/005-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3_%28%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%97%E0%B8%AD%E0%B8%87%29.jpg/1200px-005-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3_%28%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%97%E0%B8%AD%E0%B8%87%29.jpg', addr:'Khwaeng Ban Bat, Khet Pom Prap Sattru Phai, Krung Thep Maha Nakhon 10100', rate: 4.6},
  {id: 7, name: 'Erawan Shrine', img:'https://hilight.kapook.com/img_cms2/user/surattana/22_7_2558/pic02.jpg', addr:'Ratchadamri Rd, Khwaeng Lumphini, Khet Pathum Wan, Krung Thep Maha Nakhon 10330', rate: 4.5},
  {id: 8, name: 'Khlong Lad Mayom Floating Market', img:'http://www.thelostguides.com/wp-content/uploads/2016/09/Khlong-Lat-Mayom-Floating-Market-Bangkok-Sept-201620160911-IMG_4554.-Low-Res-1050x700.jpg', addr:' 30/1 Bang Ramat Rd, Bang Ramat, Taling Chan, Bangkok 10170', rate: 4.2},
  {id: 9, name: 'Chinatown', img:'http://buffalotrip.com/image/cache/data/2016/Bangkok-2/Chinatown-Bangkok/Yaowarat-chinatown-bangkok-must-visit-top-things-to-do-how-to-go-attractions-26-760x432.JPG', addr:'Yaowarat Rd, Bangkok, Thailand', rate: 4.3},
  {id: 10, name: 'The New Rot Fai Market Ratchada', img:'http://www.amazingthaitour.com/wp-content/uploads/2018/11/rfr1.jpg', addr:'Ratchadapisek Road (close to Esplanade Shopping Mall', rate: 4.5},
]

router.get('/', (req, res) => {
  return res.json(attractions_info);
})

router.get('/:id',(req, res) => {
  return res.json(attractions_info.filter( x => x.id == req.params.id)[0])
})


module.exports = router