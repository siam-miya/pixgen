"use client";
import { authClient } from "@/lib/auth-client"
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const currentUser = authClient.useSession()
  const user = currentUser.data?.user
  console.log(user)
  const handleSignOut = async () => {
    await authClient.signOut();
  }
  return (
    <div className="border-b px-2 container">
      <nav className=" flex justify-between items-center py-3 w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"photo"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex ">
          {!user && <ul className="flex items-center text-sm gap-4">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/login"}>SignIn</Link>
            </li>
          </ul>}
          {user && <div className="flex items-center gap-4">
            <div>hello: {user.name}</div>
            <Link className="cursor-pointer" href={"/profile"}>
            <Avatar size="sm">
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
            </Avatar>
            </Link>
            <div>
              <Button onClick={handleSignOut} size="sm" variant="danger">Logout</Button>
            </div>
          </div>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;