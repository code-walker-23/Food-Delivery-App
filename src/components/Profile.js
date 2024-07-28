import React from "react";
import OfflineComponent from "../utils/offlineComponent";
import useOnlineStatus from "../utils/useOnlineStatus";

const Profile = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }
  return (
  <div className="profile-container">
    <div className="profile-header">
      <img
        src="profile-picture-url.jpg"
        alt="Profile"
        className="profile-picture"
      />
      <h2 className="profile-name">Vinay Chhabra</h2>
      <p className="profile-title">Software Engineer</p>
    </div>
    <div className="profile-body">
      <p className="profile-bio">
        Passionate about building web applications and learning new
        technologies. Enjoys solving complex problems and collaborating with
        cross-functional teams.
      </p>
      <div className="profile-contact">
        <p>Email: ChhabraVinay549@gmail.com</p>
        <p>Phone: (+91) 9058934746</p>
      </div>
      <div className="profile-social">
        <a href="#" className="social-link twitter">
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/vinay-chhabra-a377601a9/"
          className="social-link linkedin"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/code-walker-23"
          className="social-link github"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
  );
};

export default Profile;
