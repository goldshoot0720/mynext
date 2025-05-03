import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="max-w-3xl mx-auto py-4 flex gap-x-4">
        <Link href="/">Home</Link>
        <Link href="/sub1">Sub1</Link>
        <Link href="/sub2">Sub2</Link>
        <Link href="/sub3">Sub3</Link>
        <Link href="/sub4">Sub4</Link>
        <Link href="/sub5">Sub5</Link>
        <Link href="/sub6">Sub6</Link>
        <Link href="/sub7">Sub7</Link>
        <Link href="/sub8">Sub8</Link>
        <Link href="/sub9">Sub9</Link>
        <Link href="/sub10">Sub10</Link>
        <Link href="/sub11">Sub11</Link>
        <Link href="/sub12">Sub12</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
