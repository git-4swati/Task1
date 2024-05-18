let sample_data = [
    {
        Brand:"Website",
      // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
        names:"Simple Website",
        price:"6000",
        actualprice:"8000"
        
    },
    {
        Brand:"Website",
       //img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
        names:"Funnel Landing Page",
        price:"8000",
        actualprice:"10000"
        
    },
    {
        Brand:"Website",
      // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        names:"E-Commerce Website",
        price:"10000",
        actualprice:"12000"
        
    }, {
        Brand:"Maintenanace",
       //img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/z/o/46-ares02011a-arrow-sport-original-imagknbgg4dcqvvv.jpeg?q=70",
        names:"Basic Maintenance Plan",
        price:"2000",
        actualprice:"4000"
        
    },
    {
        Brand:"Maintenance",
       // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Mid-level Maintenance Plan",
        price:"4000",
        actualprice:"6000"
        
    },
    {
        Brand:"Maintenance",
     // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Premium Maintenance Plan",
        price:"6000",
        actualprice:"8000"
    },
    /*
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399"
    },
    , {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/4/f/-original-imagsfejwcyfa4yx.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"2,038",
        actualprice:"2,899"
    },
    {
        Brand:"Puma",
        img_src:"",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399"
    },*/
    

];


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();

function Product(){

    collection.map((element)=>{
        
        let box = document.createElement("div");

        let innerbox = document.createElement("div")
    let price1 = document.createElement("span");
     price1.innerHTML = element.price
    let price2 = document.createElement("span");
    price2.innerHTML = element.actualprice

    innerbox.append(price1, price2);
    innerbox.className = "innerbox"
  let avatar = document.createElement("img");
  avatar.src = element.img_src;
  avatar.className = "avatar"
  let brand = document.createElement("p");
  brand.innerHTML = element.Brand;
   box.append(avatar,brand,innerbox);
   document.getElementById("collection").append(box);

    })
}