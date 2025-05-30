import { File, LogOut, Settings, Shield, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const sidebar_routes = [
  { label: "Posts", icon: File, href: "/posts" },
  { label: "Users", icon: Users, href: "/users" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

const Sidebar = () => {
  return (
    <div className=" w-71 h-full bg-[#FAFAFA] fixed left-0 top-0 border-r border-gray-300">
      <div className="px-4 py-4 h-full">
        <div className="flex flex-col justify-between h-full ">
          <div className="flex flex-col">
            
            {/* Top Content */}
            <div className="flex gap-2">
              <div className="flex items-center w-8 h-8 bg-blue-600    ">
                <Shield
                  size={18}
                  color="#fff"
                  className="flex items-center justify-center"
                />
              </div>
              <div>
                <p className="text-xl font-bold">Admin Panel</p>
                <p className="text-sm text-gray-500">Content Moderation</p>
              </div>
            </div>

            {/* Top Second */}
            <div>
              {sidebar_routes.map((items, i) => (
                <Link href={items.href} key={i}>
                  <p className="flex ">
                    <items.icon className="mr-2" />
                    {items.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col">
            <p>Logged in as Admin</p>
            <p>
              <Button variant="ghost" className="flex">
                <LogOut className="mr-2" /> Sign out
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
