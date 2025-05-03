import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
      <nav className="max-w-3xl mx-auto py-4 flex gap-x-4">
        <Link className="hover:text-blue-500" href="/">Home</Link>
        <Link className="hover:text-blue-500" href="/sub1">Sub1</Link>
        <Link className="hover:text-blue-500" href="/sub2">銀行</Link>
        <Link className="hover:text-blue-500" href="/sub3">Sub3</Link>
        <Link className="hover:text-blue-500" href="/sub4">Sub4</Link>
        <Link className="hover:text-blue-500" href="/sub5">Sub5</Link>
        <Link className="hover:text-blue-500" href="/sub6">Sub6</Link>
        <Link className="hover:text-blue-500" href="/sub7">Sub7</Link>
        <Link className="hover:text-blue-500" href="/sub8">Sub8</Link>
        <Link className="hover:text-blue-500" href="/sub9">Sub9</Link>
        <Link className="hover:text-blue-500" href="/sub10">Sub10</Link>
        <Link className="hover:text-blue-500" href="/sub11">Sub11</Link>
        <Link className="hover:text-blue-500" href="/sub12">Sub12</Link>
        <Link className="hover:text-blue-500" href="/about">About</Link>
      </nav>
  );
}
