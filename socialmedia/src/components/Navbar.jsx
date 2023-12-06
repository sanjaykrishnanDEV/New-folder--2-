import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/actionslice";
import { onLogIn } from "../utils/userSlice";
import { useState } from "react";
import { auth, provider } from "../utils/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Navbar = () => {
  const [userData, setuserData] = useState(null);
  const [showData, setshowData] = useState(false);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleMenu());
  }
  function handleAuth() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        setuserData(user);
      })
      .then(() => {
        dispatch(onLogIn(userData));
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  function handleDisp() {
    setshowData(!showData);
  }
  return (
    <div className=" shadow-lg w-auto flex justify-between h-12 items-center bg-slate-950">
      <div className="flex items-center ms-2">
        <GiHamburgerMenu size={25} color="white" onClick={handleToggle} />
        <span className="ms-2 text-white bg-red-700 rounded-md p-1 px-2">
          YOUTUBE
        </span>
      </div>
      <div className="flex w-1/3">
        <input
          type="text"
          placeholder="search"
          className="p-1 rounded-s-md w-3/4"
        />
        <button
          className="p-1 bg-red-700 text-white rounded-e-md"
          // onClick={setsearchTerm(searchTemp)}
        >
          search
        </button>
      </div>
      <div>
        <button onClick={handleDisp}>
          {userData ? (
            <img
              src={userData.photoURL}
              className="rounded-full h-10 w-10 me-2"
              size={20}
            />
          ) : (
            <FaRegUserCircle
              size={25}
              color="white"
              onMouseEnter={handleAuth}
            />
          )}
        </button>
        {showData && (
          <div className=" h-fit p-3  w-48 fixed right-6 rounded-lg bg-slate-400 top-0 mt-10">
            <p className="cursor-pointer hover:bg-slate-600">Logout</p>
            <p className="cursor-pointer hover:bg-slate-600">My profile</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
