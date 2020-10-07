document.addEventListener("DOMContentLoaded", function(e){

    //1st deliverable---->lets create the counter

  
  function createCounter() {
    const counter =  document.getElementById('counter')
    let number = counter.textContent
    let change  = parseInt(number)
    counter.innerHTML = `${ change += 1}`
    
  }
  

  let obj = setInterval(createCounter, 1000)
  
  
 function clickHandler() {
     const body = document.querySelector('body')
     body.addEventListener("click", function(e){
         if (e.target.matches("#plus")) {
            const button = e.target
            const siblingEl = document.querySelector('#counter')
            const count = parseInt(siblingEl.textContent)
            const plusOne = count + 1
            siblingEl.textContent = plusOne
            
         } else if (e.target.matches("#minus")){
            const button = e.target
            const siblingEl = document.querySelector('#counter')
            const count = parseInt(siblingEl.textContent)
            const minusOne = count - 1
            siblingEl.textContent = minusOne
         } else if (e.target.matches("#heart")) {
             const button = e.target
             const siblingEl = document.querySelector('#counter')
             const ul = document.querySelector(".likes")
             const like = document.createElement('li')
             like.innerHTML = `You gave the DOM challenge ${siblingEl.textContent} likes!`
            ul.appendChild(like)
         } else if (e.target.matches("#pause")) {
             const button = e.target
             const counter = document.getElementById('counter')
             const currentCount = clearInterval(obj)
             disableButtons()
             
        } else {
            console.log("did nothing")
        }
     })
 }


 function addResumeButtonText(){
    const button = document.querySelector('#pause')
    button.addEventListener("click", function(e) {
    const pauseButton = e.target
    pauseButton.textContent = "resume"
    pauseButton.dataset.status = 'resume'
    resumeInterval()
    
 })
 }

 function disableButtons() {
    const disablePlus = document.getElementById('plus').disabled = true
    const disableMinus = document.getElementById('minus').disabled = true
    const disableHeart = document.getElementById('heart').disabled = true
 }

 function enableButtons() {
    const enablePlus = document.getElementById('plus')
    const enableMinus = document.getElementById('minus')
    const enableHeart = document.getElementById('heart')
    enablePlus.innerHTML = `<button id="plus"> ➕ </button>`
    enableMinus.innerHTML = `<button id="minus"> ➖ </button>`
    enableHeart.innerHTML = `<button id="heart"> ❤️ </button>`
}
    
 function resumeInterval(){
    const button = document.querySelector(`[data-status = "resume"]`)
    button.addEventListener("click", function(e) {
        const normalButton = e.target
        normalButton.textContent = "pause"
        normalButton.dataset.status = 'pause'
        createCounter()
        let resumeCounter = setInterval(createCounter, 1000)
        resumeCounter
        enableButtons()
        
        
    })
    
 }
 
 addResumeButtonText()
 clickHandler()



 function addComment() {
     const 
 }
 
  





  
  
  




























})