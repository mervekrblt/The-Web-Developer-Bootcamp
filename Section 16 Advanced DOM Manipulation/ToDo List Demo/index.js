const lis = document.querySelectorAll("li")

lis.forEach(function(i){
    i.addEventListener("mouseover", function(){
        this.style.color= "green"
    })

    i.addEventListener("mouseout", function(){
        this.style.color= "black"
    })

    i.addEventListener("click", function(){
        this.classList.toggle("done")
    })
})