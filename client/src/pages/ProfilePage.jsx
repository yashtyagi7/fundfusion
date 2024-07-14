import { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import HostPage from "./HostPage";
import AccountNav from "../AccountNav";
import Tilt from 'react-parallax-tilt';
import '../App.css'


export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser, isAdmin } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        console.log("User object from server:", data);
        setUser(data);
        setRedirect(null); // Reset redirect state
      });
    }
  }, [user, setUser]);

  // Move the logout function declaration outside of the useEffect
  async function logout() {
    try {
      await axios.post('/logout');
      setRedirect('/');
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle the error as needed, e.g., show a message to the user
    }
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      <div className="App bg-black h-screen w-screen relative overflow-hidden flex justify-center items-center">
        <Tilt>
          <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm overflow-hidden">
            <div className="justify-center items-center h-screen">
              {subpage === 'profile' && (
                <div className="bg-black shadow-md rounded-md p-8 max-w-2xl w-full  flex flex-col items-center justify-center">
                  <div className="text-center mb-6">
                    <div className="bg-white  rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm">
                        {isAdmin
                          ? user.userName && user.userName.charAt(0).toUpperCase()
                          : user.name && user.name.charAt(0).toUpperCase()}
                      </h1>
                    </div>
                    <div className="text-center mb-6">
                      {isAdmin ? (
                        <>
                          <div className="mt-2">
                            <p className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm">
                              Admin Username: {user.userName}<br />
                              {/* Uncomment the line below if you want to display the admin password */}
                              {/* Admin Password: {user.adminPassword} */}
                            </p>
                          </div>
                        </>
                      ) : (
                        <p className="text-xl font-semibold text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm">
                          Logged in as {user.name} ({user.email})
                        </p>
                      )}
                    </div>

                  </div>
                  <button
                    onClick={logout}
                    className="w-full font-bold py-3 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text bg-black text-xl"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </Tilt>
        {subpage === 'hosted' && (
          <HostPage />
        )}
      </div>
    </div>
  )
}





{
    /*<div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form className='h-full flex flex-col justify-evenly items-center'>
            <div className='text-white font-poppins text-2xl tracking-widest'>Login form</div>
            <input type="text" placeholder='username' className='input-text'/>
            <input type="password" placeholder='password' className='input-text'/>
            <input type="Submit" className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
          </form>
        </div>
      </Tilt>
    </div> */ }