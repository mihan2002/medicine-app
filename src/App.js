import "./App.css";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

function App() {
  var sessionContainer;
  var authEndpoint = "http://localhost:4000/signature";
  var config = {
    videoSDKJWT: "",
    sessionName: "test",
    userName: "React",
    sessionPasscode: "123",
    features: ["video", "audio", "settings", "users", "chat", "share"],
  };


  function getVideoSDKJWT() {
    sessionContainer = document.getElementById("sessionContainer");

    document.getElementById("join-flow").style.display = "none";

    fetch(authEndpoint)
      .then(async (response) => {
        console.log(response);
        const data = await response.text();
        return data;
      })
      .then((data) => {
        if (data) {
          console.log(data);
          config.videoSDKJWT = data;
          joinSession();
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function joinSession() {
    console.log(config);
    console.log(sessionContainer);
    uitoolkit.joinSession(sessionContainer, config);

    uitoolkit.onSessionClosed(sessionClosed);
  }

  var sessionClosed = () => {
    console.log("session closed");
    uitoolkit.closeSession(sessionContainer);

    document.getElementById("join-flow").style.display = "block";
  };

  return (
    <div className="App">
      <main>
        <div id="join-flow">
          <h1>Zoom Video SDK Sample React</h1>
          <p>User interface offered by the Video SDK UI Toolkit</p>

          <button onClick={getVideoSDKJWT}>Join Session</button>
        </div>

        <div id="sessionContainer"></div>
      </main>
    </div>
  );
}

export default App;
