import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
      <Link href="/">Terms of Service</Link>
      <Link href="/">Privacy Policy</Link>
      <Link href="/">Cookie Policy</Link>
      <Link href="/">Accessibility</Link>
      <Link href="/">Ads Info</Link>
      <span>© {year} L Corp.</span>
    </div>
  );
};

export default Footer;
