import './normal.css'
import './App.css';
import robot from './assets/robot.png'


function App() {
  return (
    <div className='App'>
      <aside className='sideMenu'>
        <div className='side-menu-btn'>
          <span>+</span>
          New Chat
          </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-log'>
          <div className='chat-message'>
            <div className='chat-message-center'>
              <div className='avatar'>
                
              </div>

              <div className='message'>
                Hello World
              </div>
              </div>
              <div className='chat-message chat-bot'>
            <div className='chat-message-center'>
              <div className='avatar chat-bot'>
              <img src={robot} alt='' className='robot'/>
              </div>

              <div className='message'>
                I am AI Bot
              </div>
              </div>
            
          </div>
          </div>
        </div>
        <div className='chat-input-holder'>
          <textarea
            rows="1"
            className='chat-input-textarea'
            // placeholder='Type your question here'
            >
          </textarea>

        </div>
      </section>



    </div>
  )
}

export default App;
