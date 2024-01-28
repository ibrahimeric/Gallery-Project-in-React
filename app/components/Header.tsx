"use client"
import { useSession, signIn } from "next-auth/react"
import { HiSearch, HiBell, HiChat } from 'react-icons/hi'
import Image from 'next/image' 
import React, { useEffect } from 'react'
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import app from './../Shared/firebaseConfig';


function Header() {
  const { data: session } = useSession();

  // Obtiene una instancia de Firestore
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    try {
      if (session && session.user && session.user.email) {
        await setDoc(doc(db, "user", session.user.email), {
          name: session.user.name || "",
          email: session.user.email || "",
          userImage: session.user.image || ""
        });
      }
    } catch (error) {
      console.error("Error al guardar la información del usuario:", error);
      // Puedes manejar el error de una manera específica aquí
    }
  };

  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
      <Image src='/logo.png' alt='logo'
      width={50} height={50}
      className='hover:bg-gray-300 p-2
      rounded-full cursor-pointer'/>
      <button className='bg-black 
      text-white p-2 px-4 rounded-full hidden md:block'>Home</button>
      <button className='font-semibold p-2 px-4 rounded-full'>Create</button>
      <div className='bg-[#e9e9e9] p-3
      gap-3 items-center rounded-full w-full hidden md:flex'>
        <HiSearch className='text-[25px]
        text-gray-500'/>
        <input type="text" placeholder='Search'
        className='bg-transparent outline-none'/>
      </div>

      <HiSearch className='text-[25px]
        text-gray-500 md:hidden'/>
      <HiBell className='text-[25px] md:text-[40px] text-gray-500 cursor-pointer'/>
      <HiChat className='text-[25px] md:text-[40px] text-gray-500 cursor-pointer'/>
      
      {session?.user ? (
        <Image src={session?.user?.image ?? '/default-image.jpg'} 
        alt='user-image' width={50} height={50} 
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />
      ) : (
        <button className='font-semibold p-2 px-4 rounded-full' onClick={() => signIn()}>Login</button>
      )}

    </div>
  )
}

export default Header
