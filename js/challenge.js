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
             document.getElementById('plus').disabled = true
            document.getElementById('minus').disabled = true
            document.getElementById('heart').disabled = true
            e.target.textContent = 'resume'
            e.target.id = 'resume'
             
        } else if (e.target.matches("#resume")) {
            document.getElementById('plus').disabled = false
            document.getElementById('minus').disabled = false
            document.getElementById('heart').disabled = false
            let resumeCounter = setInterval(createCounter, 1000)
            e.target.textContent = 'pause'
            e.target.id = 'pause'
        }
     })
 }


//  function addResumeButtonText(){
//     const button = document.querySelector('#pause')
//     button.addEventListener("click", function(e) {
//     const pauseButton = e.target
//     pauseButton.textContent = "resume"
//     pauseButton.dataset.status = 'resume'
//     resumeInterval()
    
//  })
//  }

 

//  function enableButtons() {
//     document.getElementById('plus').disabled = false
//     document.getElementById('minus').disabled = false
//     document.getElementById('heart').disabled = false
//     // enablePlus.innerHTML = `<button id="plus"> ➕ </button>`
//     // enableMinus.innerHTML = `<button id="minus"> ➖ </button>`
//     // enableHeart.innerHTML = `<button id="heart"> ❤️ </button>`
// }
    
//  function resumeInterval(){
//     const button = document.querySelector(`[data-status = "resume"]`)
//     button.addEventListener("click", function(e) {
//         const normalButton = e.target
//         normalButton.textContent = "pause"
//         normalButton.dataset.status = 'pause'
        
//         let resumeCounter = setInterval(createCounter, 1000)
       
//         button.removeAttribute("data-status")
//         enableButtons()
        
        
//     })
    
//  }
 
 
 clickHandler()

 function addComment() {  const commentForm = document.getElementById("comment-form") 
 commentForm.addEventListener("submit", function(e){       
     e.preventDefault()       
     const addComment = document.getElementById("list")       
     const comment = document.createElement("li")         
     const com = commentForm["comment"].value        
     comment.innerHTML = com        
     addComment.append(comment)        
     console.log(comment)     
    })      
}
 
 addComment()


 
  





  
  
  




























})