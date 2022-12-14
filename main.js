const feedbackButtons = document.querySelectorAll('.buttons')
console.log(feedbackButtons)
//This is my control variable
let clickedFeedbackButton

/* the forEach method is a loop, like a for or a while, we can use it in arrays or in a NodeList, like in this case

The querySelectorAll() returns a NodeList, I can show you more about it later! =)
*/
feedbackButtons.forEach(feedbackButton => {
  console.log(feedbackButton)

  //click event, maybe we should rename some names and elements here, to make it easier to understand
  feedbackButton.addEventListener('click', () => {
    clickedFeedbackButton = feedbackButton.id
    console.log(clickedFeedbackButton) //open console on your browser and check if is capturing the correct id

    //first of all we reset all buttons (just in case if some already has this class)
    feedbackButtons.forEach(button => {
      button.classList.remove('button-selected')
    })

    //then we add the class to the clicked button
    feedbackButton.classList.add('button-selected')

  })
})

const submit = document.getElementById('submit')
const rating = document.getElementById("rating") //remover class display-none
const evaluation = document.getElementById("evaluation") // add class display-none
const subtitle = document.querySelector(".subtitle") 
const back = document.getElementById('back')
  console.log(subtitle)

submit.addEventListener('click',() => {
  evaluation.classList.add('display-none')
  rating.classList.remove('display-none')
  back.classList.remove('display-none')
  subtitle.innerHTML = (`You selected ${clickedFeedbackButton} out of 5`)
})

back.addEventListener('click',() => {
  location. reload();
})
