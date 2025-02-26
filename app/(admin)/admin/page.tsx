"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const logOuthandler = async () => {
    try {
      const rawResponse = await fetch("/api/auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const content = await rawResponse.json();
      console.log(content);
      router.refresh();
    } catch (error) {}
  };
  return (
    <div>
      Admin Home
      <br />
      <button onClick={logOuthandler}>Logout</button>
    </div>
  );
}
