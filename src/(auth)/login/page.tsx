import React from "react";
import { useAuthStore } from "@/store/Auth";
export const Loginpage = () => {
  const { createAccount, login } = useAuthStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // collect data
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    //validation
    if (!email || !password) {
      setError(() => "Please fill fields");
      return;
    }

    //handle loading and error

    setIsLoading(() => true);
    setError(() => "");

    //login => store

    const loginResponse = await login(email.toString(), password.toString());

    if (loginResponse.error) {
      setError(() => loginResponse.error!.message);
    }
    setIsLoading(() => true);
    setError(() => "");
  };

  return <div></div>;
};
