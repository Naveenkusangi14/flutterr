import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase'; // Import db from your Firebase configuration file

export default function Signup() {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const file = e.target.elements.image.files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      await uploadTask.then(async () => {
        const downloadURL = await getDownloadURL(storageRef);
        await updateProfile(res.user, {
          displayName: name,
          photoURL: downloadURL,
        });
        // Show success notification
        toast.success("Account created successfully!");

        // Store user data in Firestore
        await setDoc(doc(db, 'users', res.user.uid), {
          uid: res.user.uid,
          name,
          email,
          photoURL: downloadURL, // Define downloadURL here
        });
      });
    } catch (error) {
      console.error("Signup Error:", error);
      setErr(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-12 md:p-24 lg:p-8 xl:p-12">
      <ToastContainer />
      <div className="w-full  sm:bg-green-800 lg:max-w-lg xl:max-w-xl rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6  " onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input-field "
                placeholder="Name"
                required=""
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-Mail</label>
              <input
                type="text"
                name="username"
                id="username"
                className="input-field"
                placeholder="Email"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="input-field"
                required=""
              />
            </div>
            {/* File upload input for uploading images */}
            <div>
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="input-field"
                required=""
              />
            </div>
            <button
              type="submit"
              className="btn"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/Login">
                Sign in here
              </a>
            </p>
            {err && <span>Something went wrong. Please check again.</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
