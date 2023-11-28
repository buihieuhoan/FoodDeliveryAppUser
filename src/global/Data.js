export const filterData = [{name:"Fast food",image: require('../assets/fastfood.png'), id:"0"},
                    {name:"Burgers",image:require("../assets/burger.png"),id:"1"},
                    {name:"Salads",image:require("../assets/salads.png"),id:"2"},
                    {name:"Hotdog",image:require("../assets/hotdog.png"),id:"3"},
                    {name:"Chinese",image:require("../assets/chinese.png"),id:"4"},
                    {name:"Rice",image:require("../assets/rice.png"),id:"5"},
                    {name:"Sea food",image:require("../assets/seafood.png"),id:"6"},
                ];



export const filterData2 = [
    {name:"Fast food",image:'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/12/mcdonalds-hacks-menu-ft-1-blog0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg' , id:"0"},
    {name:"Burgers",image: 'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/05/feat-3.jpg',id:"1"},
    {name:"Salads",image:"https://img.freepik.com/free-photo/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table-top-view-flat-lay_2829-6482.jpg",id:"2"},
    {name:"Hotdog",image: "https://hips.hearstapps.com/hmg-prod/images/big-mac-hotdog-7-1656099486.jpeg",id:"3"},
    {name:"Chinese",image:"https://hoavanshz.com//uploads/images/blog-tieng-hoa/tu-vung/danh-sach-mon-an-trung-quoc-bang-tieng-trung.jpg",id:"4"},
    {name:"Pizza",image:"https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",id:"5"},  
    {name:"Sea food",image:"https://statics.vinpearl.com/nha-trang-seafood-1_1696182092.jpg",id:"6"},
    {name:"Chinese Food",image:"https://cdn-img-v2.webbnc.net/uploadv2/web/14/14961/media/2020/10/07/03/59/1602058801_mon-an-noi-tieng-trung-hoa-1.jpg",id:"7"},
    {name:"Rice",image:"https://images.foody.vn/res/g113/1123512/prof/s280x175/foody-upload-api-foody-mobile-ti-357cb35b-230616110024.jpeg",id:"8"},  
    {name:"Ocean dish",image:"https://images.immediate.co.uk/production/volatile/sites/2/2016/06/23897.jpg?quality=90&resize=600,400",id:"9"},
];







export const restaurantsData = [
    {restaurantName:"Mc Donalds", farAway:"21.2",
    businessAddress:"22 Bessie street, Cape Town",images:'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/12/mcdonalds-hacks-menu-ft-1-blog0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg',
    averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
    collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
    productData:[
            {name:"Fast Food", price:29.30,image:"https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/12/mcdonalds-hacks-menu-ft-1-blog0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg"},
            {name:"Big Mac", price:50.80,image:"https://www.netnewsledger.com/wp-content/uploads/2015/12/big_mac.jpg"},
            {name:"Chicken KFC", price:70,image:"https://t3.ftcdn.net/jpg/05/41/62/96/360_F_541629636_RlfZtQI6uIOW9Uj52x6HpczOlFNVps4L.jpg"},
            {name:"Pizza", price:29.30,image:"https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"},
            {name:"Rice", price:70.20,image:"https://images.foody.vn/res/g113/1123512/prof/s280x175/foody-upload-api-foody-mobile-ti-357cb35b-230616110024.jpeg"},
            {name:"Chinese Food", price:70,image:"https://cdn-img-v2.webbnc.net/uploadv2/web/14/14961/media/2020/10/07/03/59/1602058801_mon-an-noi-tieng-trung-hoa-1.jpg"},
        ],
    id:0},

    {restaurantName:"KFC", farAway:"12.7",businessAddress:"22 Bessie street, Cape Town",
    images:'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/05/feat-3.jpg',
    averageReview:4.3, numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
    discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
    productData:[
        {name:"Fast Food", price:29.30,image:"https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/12/mcdonalds-hacks-menu-ft-1-blog0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg"},
        {name:"Big Mac", price:50.80,image:"https://www.netnewsledger.com/wp-content/uploads/2015/12/big_mac.jpg"},
        {name:"Chicken KFC", price:70,image:"https://t3.ftcdn.net/jpg/05/41/62/96/360_F_541629636_RlfZtQI6uIOW9Uj52x6HpczOlFNVps4L.jpg"},
        {name:"Pizza", price:29.30,image:"https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"},
        {name:"Rice", price:70.20,image:"https://images.foody.vn/res/g113/1123512/prof/s280x175/foody-upload-api-foody-mobile-ti-357cb35b-230616110024.jpeg"},
        {name:"Chinese Food", price:70,image:"https://cdn-img-v2.webbnc.net/uploadv2/web/14/14961/media/2020/10/07/03/59/1602058801_mon-an-noi-tieng-trung-hoa-1.jpg"},
    ],
    id:1},

    {restaurantName:"Sea Food", farAway:"5",businessAddress:" 17 Olivia Rd, Johannesburg",
    images:'https://statics.vinpearl.com/nha-trang-seafood-1_1696182092.jpg',
        coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
        discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
        productData:[
            {name:"Fast Food", price:29.30,image:"https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/12/mcdonalds-hacks-menu-ft-1-blog0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg"},
            {name:"Big Mac", price:50.80,image:"https://www.netnewsledger.com/wp-content/uploads/2015/12/big_mac.jpg"},
            {name:"Chicken KFC", price:70,image:"https://t3.ftcdn.net/jpg/05/41/62/96/360_F_541629636_RlfZtQI6uIOW9Uj52x6HpczOlFNVps4L.jpg"},
            {name:"Pizza", price:29.30,image:"https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"},
            {name:"Rice", price:70.20,image:"https://images.foody.vn/res/g113/1123512/prof/s280x175/foody-upload-api-foody-mobile-ti-357cb35b-230616110024.jpeg"},
            {name:"Chinese Food", price:70,image:"https://cdn-img-v2.webbnc.net/uploadv2/web/14/14961/media/2020/10/07/03/59/1602058801_mon-an-noi-tieng-trung-hoa-1.jpg"},
        ],
    id:2},

    {restaurantName:"Roman Pizza", farAway:"7",businessAddress:" 15 Atlas Rd, Kempton Park",
    images:'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    averageReview:4.3, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
    productData:[
        {name:"Fast Food", price:29.30,image:"https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/12/mcdonalds-hacks-menu-ft-1-blog0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg"},
        {name:"Big Mac", price:50.80,image:"https://www.netnewsledger.com/wp-content/uploads/2015/12/big_mac.jpg"},
        {name:"Chicken KFC", price:70,image:"https://t3.ftcdn.net/jpg/05/41/62/96/360_F_541629636_RlfZtQI6uIOW9Uj52x6HpczOlFNVps4L.jpg"},
        {name:"Pizza", price:29.30,image:"https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"},
        {name:"Rice", price:70.20,image:"https://images.foody.vn/res/g113/1123512/prof/s280x175/foody-upload-api-foody-mobile-ti-357cb35b-230616110024.jpeg"},
        {name:"Chinese Food", price:70,image:"https://cdn-img-v2.webbnc.net/uploadv2/web/14/14961/media/2020/10/07/03/59/1602058801_mon-an-noi-tieng-trung-hoa-1.jpg"},
    ],
    id:3},
]



export const productData = [
    {name:"Fast Food", price:29.30,image:"https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/12/mcdonalds-hacks-menu-ft-1-blog0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg",
        details:"Two 100% fresh beef burger patties that are hot,deliciously",id:0},
    {name:"Big Mac", price:50.80,image:"https://www.netnewsledger.com/wp-content/uploads/2015/12/big_mac.jpg",
        details:"Iconic burger with a special sauce, lettuce, cheese, pickles, onions, and a sesame seed bun.",id:1},
    {name:"Chicken KFC", price:70,image:"https://t3.ftcdn.net/jpg/05/41/62/96/360_F_541629636_RlfZtQI6uIOW9Uj52x6HpczOlFNVps4L.jpg",
        details:"Indulge in the crispy and flavorful goodness of KFC's fried chicken. Served with your choice of sides and signature sauces.",id:2},
    {name:"Pizza", price:29.30,image:"https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
        details:"Classic pizza topped with tomato sauce, cheese, and your favorite toppings.",id:3},
    {name:"Rice", price:70.20,image:"https://images.foody.vn/res/g113/1123512/prof/s280x175/foody-upload-api-foody-mobile-ti-357cb35b-230616110024.jpeg",
        details:"Delicious rice dishes are made from high quality ingredients and ensure complete nutrition.",id:4},
    {name:"Chinese Food", price:70,image:"https://cdn-img-v2.webbnc.net/uploadv2/web/14/14961/media/2020/10/07/03/59/1602058801_mon-an-noi-tieng-trung-hoa-1.jpg",
        details:"Authentic Chinese cuisine with a variety of flavors and textures.",id:5},
              
];   