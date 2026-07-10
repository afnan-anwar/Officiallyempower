

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




