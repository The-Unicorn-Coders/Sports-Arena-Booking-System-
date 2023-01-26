import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <div class="comment-box">
     
     <h1>Write a review</h1>
       
       <label> Description </label>
        
      <form class="comment-form">
           <textarea rows="10" placeholder="Write your comment"></textarea>
          <button type='submit'class='submit-btn'>submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
