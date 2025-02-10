"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, PlusCircle, User, LogIn } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Calendar },
    { href: "/add-event", label: "Add Event", icon: PlusCircle },
    { href: "/dashboard", label: "Dashboard", icon: User },
    { href: "/login", label: "Login", icon: LogIn },
  ];

  return (
    <nav className="bg-white shadow-md py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          EventHub
        </Link>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-lg text-base font-medium transition-all ${
                pathname === item.href ? "bg-purple-100 text-purple-600" : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
