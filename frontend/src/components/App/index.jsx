import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MauiNuiWai from '../../assets/MauiNuiWai.svg';
import HomePage from '../HomePage';
import UserPage from '../UserPage';
import LearnMorePage from '../LearnMorePage';
import NotFoundPage from '../NotFoundPage';
import AuthFormPage from '../AuthFormPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Implement logic to clear user authentication, e.g., set isAuthenticated to false
    // Clear user token from localStorage or send a logout API request
  };

  return (
    <>
      <div className="flex mt-3 mx-auto max-w-l sm:px-6 lg:px-8 shadow-xl">
        <nav className="flex mx-auto justify-between items-center">
          <div className="flex w-[90vw] justify-between items-center md:hidden">
            <Link to="/Mapping-App" onClick={toggleMenu}>
              <div className='block justify-between'>
                <h2 className="text-lg">MauiNuiWai | Wai = Water</h2>
              </div>
            </Link>
            <div className="flex items-center">
              <button type="button" onClick={toggleMenu} className="justify-between">
                <div className="bg-cyan-500 px-4 pt-1 rounded"></div>
                <div className="bg-cyan-500 px-4 pt-1 mt-1 rounded"></div>
                <div className="bg-cyan-500 px-4 pt-1 mt-1 rounded"></div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="block lg:block mt-1 py-1 lg:flex lg:items-center lg:w-auto shadow-xl">
          <div className="logo hidden lg:block">
            <Link to="/Mapping-App" onClick={toggleMenu}>
              {/* <div className="flex">
                <ul className="pl-4">
                  <li className="w-12 justify-between">
                    <img src={waterIcon} alt="Icon" />
                  </li>
                </ul>
              </div> */}
              <div className='flex justify-between'>
                <h2 className="text-lg">MauiNuiWai | Wai = Water</h2>
              </div>
            </Link>
          </div>
          <div className="flex-grow">
            <ul className="flex justify-end pr-8 text-xs font-medium">
              <li>
                <Link to="/learnMore" onClick={toggleMenu}>
                  <p className="p-2 hover:text-cyan-500">Learn More</p>
                </Link>
              </li>
            </ul>
          </div>

          {isAuthenticated ? (
            <>
              {/* <div className="flex-grow">
                <ul className="flex justify-center border-b-2 border-b-cyan-500 text-xs font-medium">
                  <li>
                    <Link to="/logout" onClick={() => { handleLogout(); toggleMenu(); }}>
                      <p className="p-2 hover:text-cyan-500">Sign Out</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-grow">
                <ul className="flex justify-end pr-8 border-b-2 border-b-cyan-500 text-xs font-medium">
                  <li>
                    <Link to={`/user/${localStorage.getItem('userId')}`}>
                      <p className="p-2 hover:text-cyan-500">User</p>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </>
          ) : (
            <>
              {/* <div className="flex-grow">
                <ul className="flex justify-end pr-8 text-xs font-medium">
                  <li>
                    <Link to="/auth/signup" onClick={toggleMenu}>
                      <p className="p-2 hover:text-cyan-500">Sign Up</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-grow">
                <ul className="flex justify-end pr-8 text-xs font-medium">
                  <li>
                    <Link to="/auth/login" onClick={toggleMenu}>
                      <p className="p-2 hover:text-cyan-500">Log In</p>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </>
          )}
        </div>
      )}

      <div className="hidden mx-auto md:flex md:items-center md:w-auto max-w-4xl">
      <Link to="/Mapping-App" className="flex justify-center items-center">              
              <div className="flex">
                <ul className="pl-4">
                  <li className="w-9 justify-between">
                    <img src={MauiNuiWai} alt="MauiNuiWai" />
                  </li>
                </ul>
              </div>
        <div className='flex pl-4 justify-center inline-flex'>
          <h2 className="p-0.5 text-xl">MauiNuiWai | Wai = Water</h2>
        </div>
      </Link>
      <div className="flex-grow">
        <ul className="flex justify-end text-xs font-medium">
          <li>
            <Link to="/learnMore">
              <p className="p-2 hover:text-cyan-500">Learn More</p>
            </Link>
          </li>
        </ul>
      </div>

      {isAuthenticated ? (
        <>
          {/* <div className="flex-grow">
            <ul className="flex justify-center text-xs font-medium">
              <li>
                <Link to="/logout" onClick={handleLogout}>
                  <p className="p-2 hover:text-cyan-500">Sign Out</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-grow">
            <ul className="flex justify-center text-xs font-medium">
              <li>
                <Link to={`/user/${localStorage.getItem('userId')}`}>
                  <p className="p-2 hover:text-cyan-500">User</p>
                </Link>
              </li>
            </ul>
          </div> */}
        </>
      ) : (
        <>
          {/* <div className="flex-grow">
            <ul className="flex justify-center text-xs font-medium">
              <li>
                <Link to="/auth/signup">
                  <p className="p-2 hover:text-cyan-500">Sign Up</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-grow">
            <ul className="flex justify-center text-xs font-medium">
              <li>
                <Link to="/auth/login">
                  <p className="p-2 hover:text-cyan-500">Log In</p>
                </Link>
              </li>
            </ul>
          </div> */}
        </>
      )}
    </div>

    <Routes>
      <Route path="/learnMore" element={<LearnMorePage />} />
      <Route path="/Mapping-App" element={<HomePage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/auth/:formType" element={<AuthFormPage setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/logout" element={<AuthFormPage setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>

    <div className="mx-auto w-[50vw] flex flex-row justify-between items-center mb-0">
      <a href="https://www.instagram.com"><img className="w-6" src="https://i.postimg.cc/Bvh14y8F/instagram-icon-WHT.png" /></a>
      <a href="https://www.facebook.com/"><img className="w-6" src="https://i.postimg.cc/9QY7NzCJ/facebook-icon-WHT.png" /></a>
    </div>
  </>
);
}

export default App;