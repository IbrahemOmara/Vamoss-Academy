import { useState, useEffect } from "react";

function Logout() {

  const [lastActivity, setLastActivity] = useState(Date.now());

  const TIMEOUT_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

  // Function to reset the logout timer on user activity
  const resetLogoutTimer = () => {
    setLastActivity(Date.now());
  };

  // Function to perform logout action
  const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/auth/sign-in";
  };

  // Effect to start the logout timer on component mount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentTime = Date.now();
      if (currentTime - lastActivity > TIMEOUT_DURATION) {
        logoutUser();
      }
    }, TIMEOUT_DURATION);

    return () => clearTimeout(timeoutId);
  }, [TIMEOUT_DURATION, lastActivity]);

  // Reset the logout timer on user activity (e.g., mouse move, key press)
  useEffect(() => {
    const activityListener = () => {
      resetLogoutTimer();
    };

    window.addEventListener("mousemove", activityListener);
    window.addEventListener("keypress", activityListener);

    return () => {
      window.removeEventListener("mousemove", activityListener);
      window.removeEventListener("keypress", activityListener);
    };
  }, []);

  return <></>;
}

export default Logout;
