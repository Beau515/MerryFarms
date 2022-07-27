
const arrows = document.querySelectorAll(".arrows");
const container= document.querySelectorAll(".container");

arrows.forEach((arrow,i) =>{
  const ItemNo = container[i].quesrySelectorAll("img").length;
  let clickitem = 0;
  arrow.addEventListener("click", () => {
    clickitem++;
    if(ItemNo - (4 + clickitem) >= 0){
      container[i].style.transfrom = `translateX(${
        container[i].computedStyleMap().get("tansfrom")[0].x.value
        -255}px)`;
    }else{
      container[i].style.transfrom = "translateX(0)";
      clickitem = 0;
    }

  });
});
