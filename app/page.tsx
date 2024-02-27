// "use client";

import Login from "./(auth)/login/page";

export default function Home() {
  console.log("where do i render");

  return (
    <>
      <h1>Home</h1>
      <Login />
    </>
  );
}
