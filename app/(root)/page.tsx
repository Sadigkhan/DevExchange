// import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

const Home = async () => {
  // const session = await auth();
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask A Question</Link>
        </Button>
      </section>

      <section className="mt-11">LocalSearch</section>
      Home Filter

      <div className="mt-10 flex w-full flex-col gap-6">
        <p>Question card 1</p>
        <p>Question card 1</p>
        <p>Question card 1</p>
        <p>Question card 1</p>
      </div>
    </>
  );
};

export default Home;
