import React, { useState, useEffect } from 'react';
import { auth, signInWithGoogle } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import QuestList from './QuestList';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => signOut(auth);

  if (loading) {
    return <div className="pixel-box"><p>Loading...</p></div>;
  }

  return (
    <>
      <main>
        <h1 style={{ textAlign: 'center' }}>QuestLog 📜</h1>
        {user ? (
          <div>
            <div className="pixel-box">
              <p style={{ margin: 0 }}>Welcome, {user.displayName}!</p>
              <button className="pixel-button" onClick={handleLogout} style={{ marginTop: '16px' }}>
                Logout
              </button>
            </div>
            <QuestList />
          </div>
        ) : (
          <div className="pixel-box">
            <p>Your adventure awaits. Login to begin.</p>
            <button className="pixel-button" onClick={signInWithGoogle}>
              Login with Google
            </button>
          </div>
        )}
      </main>
      <footer>
        Designed and Developed by Yuvika Varun
      </footer>
    </>
  );
}

export default App;
