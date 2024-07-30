var images =[
    "https://the7.io/elementor-shop/wp-content/uploads/sites/79/2023/01/q06129.jpg",
    "https://the7.io/elementor-shop/wp-content/uploads/sites/79/2020/10/q0319.jpg",
    "https://the7.io/elementor-shop/wp-content/uploads/sites/79/2022/12/q09801.jpg  ",
    "https://the7.io/elementor-shop/wp-content/uploads/sites/79/2022/12/shop2023-wide01.jpg",
    
]

let a = 0;



document.querySelector("#image").innerHTML = `<img src=${images[1]} alt=${images[1]} width="100%"/>`

var q=document.querySelector("#next").addEventListener("click",increase)
function increase(){
    if(a < images.length-1){
      a++;
    }else{
      a = 0
    }
  console.log(a)
  document.getElementById("image").innerHTML = `<img src=${images[a]} alt=${images[a]} style="z-index: 0;" width="100%"/> `
}


var w=document.querySelector("#pre").addEventListener("click",decrease);
function decrease(){
  if(a > 0){  
    a--
  }else{
    a = images.length -1 
  }
  console.log(a)
  document.getElementById("image").innerHTML = `<img src=${images[a]} alt=${images[a]} width="100%"/>`
}

