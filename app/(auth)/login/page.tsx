"use client";
import React, { MouseEvent } from "react";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";
function Login() {
  const router = useRouter();
  const loginHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const token = "sdfjjdsfkjsdfkjdshfkjhdsjfhkjdshfkjdshfkjhdskjfhsd";
      const rawResponse = await fetch("/api/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      });
      const content = await rawResponse.json();

      console.log(content);
      // // Set the token as a cookie
      // (
      //   await // Set the token as a cookie
      //   cookies()
      // ).set("token", token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === "production",
      //   sameSite: "strict",
      //   path: "/",
      //   maxAge: 60 * 60 * 24 * 7,
      // });

      router.push("/admin");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div>
      Login
      <br />
      <button onClick={loginHandler}>click to login</button>
    </div>
  );
}

export default Login;
