"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";

import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
      <Menu as="div" className="relative">
        <Menu.Button>
          {session?.user?.image ? (
            <div className="relative h-10 w-10">
              <Image
                src={session.user.image}
                alt={session.user.name || ''}
                className="inline-block rounded-full"
                fill
              />
            </div>
          ) : (
            <span className="inline-block h-8 w-8 overflow-hidden rounded-full">
              X
            </span>
          )}
        </Menu.Button>
        <Menu.Items className="bg-react dark:text-react absolute">
          <div className="mb4 flex gap-4 px-6 text-sm">
            {session?.user?.image ? (
              <div className="relative h-10 w-10">
                <Image
                  src={session.user.image}

                  alt={ session.user.name || ''}
                  className="inline-block rounded-full"
                  fill
                />
              </div>
            ) : (
              <span className="inline-block h-8 w-8 overflow-hidden rounded-full">
                X
              </span>
            )}
            <div>
              <p className="font-medium test-stone-600">
                {session?.user?.name || "User name"}
              </p>
              <p className="text-stone-400">{session?.user?.email}</p>
            </div>
            <Menu.Item>
              {//({ active }) => (
                <Link
                  href="/profile"
                  className={clsx(
                    "bg-stone-700/50 dark:bt-stone-200", //active && "bg-stone-700/50 dark:bt-stone-200",
                    "inline-flex items-center gap-6 px-[34px] py-2 text-sm"
                  )}
                >
                  <Cog8ToothIcon className="h-5 w-5 text-stone-400" />
                  <span>Manage Account</span>
                </Link>
              //)
              }
            </Menu.Item>
            <Menu.Item>
              {//({ active }) => ( // don't know what this active thing is
                <button
                  className={clsx(
                    "bg-stone-700/50 dark:bg-stone-200", //active && "bg-stone-700/50 dark:bg-stone-200",
                    "inline-flex items-center gap-6 px-[34px] py-2 text-sm"
                  )}
                  onClick={() => signOut()}
                >
                  <ArrowRightOnRectangleIcon className="h-5 2-5 text-stone" />
                  <span>Sign Out</span>
                </button>
              //)
            }
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
      ) : (
      <button
        className="rounded-md border border-stone-300 px-3 py-1 text-small"
        onClick={() => signIn()}
      >
        Sign In
      </button>
      )}
    </>
  );
};
export default SignInButton;
