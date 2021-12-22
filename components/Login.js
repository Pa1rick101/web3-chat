import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate} = useMoralis();


  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center
                      space-y-4">
        {/* Logo */}
        <Image
          className="object-cover rounded-full"
          src='https://www.metagamehub.io/images/mgh_logo.png'
          height={200}
          width={200}
          />

        {/* Button */}
        <button onClick={authenticate}
                className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
                 Join DAO
         </button>

      </div>

      <div className="w-full h-screen">
        <Image
          //src="https://links.papareact.com/55n"
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>


    </div>
  )
}

export default Login
