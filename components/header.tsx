import React from "react";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl">
        DataCranch <sup>Blog</sup>
      </h1>
      <>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-foreground hover:text-foreground/70">
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-foreground hover:text-foreground/70"
          >
            Blogs
          </Link>
        </nav>
        <ModeToggle />
      </>
    </header>
  );
}
