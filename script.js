
const cards = document.querySelectorAll(".carousel a");
const next = document.querySelector(".next");

let order = ["active", "second", "third", "fourth", "fifth"];

function updateCards(){

    cards.forEach((card, index)=>{

        card.className = "";
        card.classList.add(order[index]);

    });

}

updateCards();

next.addEventListener("click", ()=>{

    // Move first class to the end
    order.push(order.shift());

    updateCards();

});

const prev = document.querySelector(".prev");

prev.addEventListener("click", ()=>{

    order.unshift(order.pop());

    updateCards();

});

const cards = document.querySelectorAll(".card");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let order = ["active","second","third"];

function updateCards(){

    cards.forEach((card,index)=>{
        card.className = "card";
        card.classList.add(order[index]);
    });

}

updateCards();

next.addEventListener("click",()=>{

    order.push(order.shift());

    updateCards();

});

prev.addEventListener("click",()=>{

    order.unshift(order.pop());

    updateCards();

});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const updateCount = () =>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count) + "+";
                    requestAnimationFrame(updateCount);

                }else{

                    counter.innerText = target + "+";
                }
            }

            updateCount();

            observer.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{
    observer.observe(counter);
});




