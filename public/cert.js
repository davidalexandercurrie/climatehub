//IntersectionObserver
const items = document.getElementsByClassName("inview");

const callback = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('translated'); 
        }else{
            entry.target.classList.remove('translated'); 
        }
    });
}
const io2 = new IntersectionObserver(callback);
Array.from(items).forEach(item => {
    io2.observe(item);
})
