import './App.css'
import profileImage from './assets/profile.jpg'

function App() {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profileImage} alt="Profile" />
      </div>
      <h1 className="profile-name">Kenneth Lou Tubac</h1>
      <p className="profile-age">Age: 30</p>
      <p className="profile-location">📍 San Jose, Negros Oriental</p>
      
      <div className="profile-section">
        <h2>About Me</h2>
        <p className="profile-about">
          I'm an adventurous student with a passion for technology, computers, motorcycles, and cars. 
          I love exploring new adventures while building the foundation for a stable professional career 
          in the tech industry. Always curious and ready for the next challenge!
        </p>
      </div>
      
      <div className="profile-section">
        <h2>Favorite Hobbies</h2>
        <ul className="profile-hobbies">
          <li>Programming</li>
          <li>Motorcycles</li>
          <li>Cars</li>
          <li>Adventure</li>
        </ul>
      </div>
      
      <div className="profile-section">
        <h2>Favorite Food</h2>
        <p className="profile-food">🍛 Adobo, 🍜 Ramen, 🍱 Sushi, 🥟 Siomai</p>
      </div>
    </div>
  )
}

export default App
