let arr = [
    {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/consulting.png",
      title: "Consulting",
    },
    {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/app-development.png",
      title: "Production",
    },
    {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/help-desk.png",
      title: "24/7 Support",
      href:'https://www.spwebdevs.com/graphics-design/'
    },
    ,
   /* {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/sales-funnel.png",
      title: "Funnel Marketing",
    },
    ,
    {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/search-engine-optimization.png",
      title: "SEO",
    },
    {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/social-media.png",
      title: "SMM",
    },
    {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/settings.png",
      title: "Discover/Explore product",
      
    },
    {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/app-development-1.png",
      title: "Art direction\n Brand Strategies",
      href: "https://www.spwebdevs.com/graphics-design/",
    },
    {
      img_src:
        "https://www.spwebdevs.com/wp-content/uploads/2024/01/illustration.png",
      title: "Products\nUX design",
      href: "",
    },*/
  ];

//  let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.map((element)=>{
  let image = document.createElement('img');
  image.src = element.img_src;
  
  let title = document.createElement("p");
  title.innerHTML = element.title;
 
  let box = document.createElement('div');
  
  box.append(image,title);
  
 document.getElementById("categories").append(box);

})




let a = document.getElementById("categories");
