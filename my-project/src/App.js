import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";
import AlexaImage from "./images/alexa.png";

function App() {
  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
              title="rizkybor"
              handle="@rizkybor"
              image={SiriImage}
            />
          </div>
          <div className="column is-4">
            <ProfileCard title="rizkyak" handle="@rizkybor" image={CortanaImage} />
          </div>
          <div className="column is-4">
            <ProfileCard title="rizkyak" handle="@rizkybor" image={AlexaImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
