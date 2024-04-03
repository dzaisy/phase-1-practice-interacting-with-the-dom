
document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter'); // gets element from html file and assigns it the name 'counter' for later use
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const pauseButton = document.getElementById('pause');
    const heartButton = document.getElementById('heart')
    const likes = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');

    let timer; 
    timer = setInterval(counterIncrement, 1000 ) // starts the timer
    let count = 0;

    function counterIncrement() {
        count ++; // increments counter
        counter.textContent = count; // displays counter
    }
    plusButton.addEventListener('click', counterIncrement); // allows us to click on the button and have it actually do something

    function counterDecrement() {
        count --; // decrements counter
        counter.textContent = count;
    }
    minusButton.addEventListener('click', counterDecrement);

    function pauseCounter() {
        clearInterval(timer);
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = 'resume';
    }

    function resumeCounter() {
        timer = setInterval(counterIncrement, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = 'pause';
      }
      pauseButton.addEventListener('click', () => {
        if (pauseButton.textContent === 'pause') {
          pauseCounter();
        } 
        else {
          resumeCounter();
        }
      });
  
      function like() {
        const existingLike = document.getElementById(`like-${count}`);
        if (existingLike) {
          const span = existingLike.querySelector('span');
          span.textContent = parseInt(span.textContent) + 1;
        } 
        else {
          const li = document.createElement('li');
          li.setAttribute('id', `like-${count}`);
          li.innerHTML = `${count} has been liked <span>1</span> time`;
          likes.appendChild(li);
        }
      }
      heartButton.addEventListener('click', like);

      function handleCommentSubmit(event) {
        event.preventDefault();
        const comment = commentInput.value;
        const commentDiv = document.createElement('div');
        commentDiv.textContent = comment;
        document.getElementById('list').appendChild(commentDiv);
        commentInput.value = '';
      }
      commentForm.addEventListener('submit', handleCommentSubmit);
});