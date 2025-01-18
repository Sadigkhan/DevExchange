import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";
import React from "react";

const Home = async () => {
  const session = await auth();
  console.log(session)
  return (
    <>
      <h1 className="h1-bold">Welcome to the world of NextJs</h1>

      <form  className="px-10 pt-[100px]"  action={async ()=>{
        "use server"

        await signOut({redirectTo:ROUTES.SIGN_IN});
      }}>
        <button type="submit">Log Out</button>
      </form>
    </>
  );
};

export default Home;
