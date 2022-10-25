// Select all the back buttons
const buttonsBack = document.querySelectorAll(".back");
// Select all the next buttons
const buttonsNext = document.querySelectorAll(".next");
// Select every review
const reviews = document.querySelectorAll(".review-body");
// Function used to show the next and previous review
function changeReview(r){
    //Select the current review with its Id
    const current = parseInt(document.querySelector(".show").dataset.id);
    //assign the id to a variable called value
    let value = current;
    //sum the function parameter with value variable
    value +=r;
    // if value is 0 then change the value to the amount of reviews.
    // if value is grater than the amount of values then change the value to 1
    if( value <= 0 || value >= reviews.length+1){
        value = value <= 0? reviews.length  : 1; 
    }
    //change the current review opacity
    document.querySelector(".show").classList.toggle("show");
    // show the selected review changing its opacity to one
    reviews[value-1].classList.toggle("show");
}
//looping through every button and assign them the function changeReview() on click
buttonsBack.forEach(element=>{
    element.addEventListener("click", ()=> changeReview(-1)) 
})
buttonsNext.forEach(element=>{
    element.addEventListener("click", ()=> changeReview(1))
})
