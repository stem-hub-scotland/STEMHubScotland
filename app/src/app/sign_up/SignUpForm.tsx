"use client";
import { createClient } from "@l/supabase/client";
import { redirect } from "next/navigation";
import { useState, type SubmitEvent } from "react";
import { type Role, roles, isRole } from "@t/roles";

// client based signup form
export default function SignUpForm() {
  const supabase = createClient();

  // the on click event signs them up and adds them to the database.
  // BAD Error handling
  async function clicked(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const from_data = new FormData(event.currentTarget);

    const email = from_data.get("email")?.toString();
    const password1 = from_data.get("password1")?.toString();
    const password2 = from_data.get("password2")?.toString();
    const role = from_data.get("Sign Up Search")?.toString();

    if (!email || !password1 || !password2 || !role) {
      console.log("missing info");
      return;
    }

    if (password1 !== password2) {
      console.log("not the same password");
      return;
    }

    console.log("email: ", JSON.stringify(email));
    console.log("password: ", JSON.stringify(password1));
    console.log("role: ", JSON.stringify(role));

    if (!role || !isRole(role)) {
      return;
    }

    const { data: signUpData, error: SignUpError } = await supabase.auth.signUp(
      {
        email,
        password: password1,
        options: {
          data: {
            role: role,
          },
        },
      },
    );

    if (SignUpError || !signUpData) {
      console.log("sign up error:\n", SignUpError);
      return;
    }

    redirect("/");
  }

  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const options = roles.filter((value) => value !== "anon");

  const filteredOptions = options.filter(
    (option) => option.toLowerCase().includes(search.toLowerCase()) || !search,
  );

  return (
    <main className="flex h-screen justify-center items-center">
      <form
        className="w-full sm:w-1/3 border rounded-md p-4"
        onSubmit={clicked}
        method="POST">
        <div className="flex justify-center">
          <h1 className="font-bold text-2xl">Sign Up</h1>
        </div>

        <div className="relative w-64">
          <input
            type="text"
            value={search}
            name="Sign Up Search"
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            className="w-full rounded border border-gray-300 px-3 py-2"
            placeholder="Search..."
          />
          {searchFocus && filteredOptions.length >= 0 && (
            <div className="absolute left-0 right-0 top-full z-10 rounded-b border border-gray-300 bg-white shadow">
              {filteredOptions.map((option) => (
                <div
                  key={option}
                  onMouseDown={() => setSearch(option)}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-100">
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password1" className="block mb-1">
            Password
          </label>
          <input
            id="password1"
            name="password1"
            type="password"
            className=" w-full border rounded-md px-3 py-2 outline-none focus:ring-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password2" className="block mb-1">
            Re-enter Password
          </label>
          <input
            id="password2"
            name="password2"
            type="password"
            className=" w-full border rounded-md px-3 py-2 outline-none focus:ring-2"
            required
          />
        </div>
        <button
          type="submit"
          className="flex justify-center border rounded-xl bg-blue-300 hover:bg-blue-500">
          <div className="text-2xl font-bold bg-center ">Submit</div>
        </button>
      </form>
    </main>
  );
}
