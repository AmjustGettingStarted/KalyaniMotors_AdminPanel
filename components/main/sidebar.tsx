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
    <div className=" w-64 h-full bg-[#FAFAFA] fixed left-0 top-0 border-r border-gray-300">
      <div className="h-full">
        <div className="flex flex-col justify-between h-full ">
          {/* Top Content */}
          <div className="flex flex-col">
            {/* Top First */}
            <div className="flex items-center gap-2 pb-6 border-b border-gray-300 px-4 py-4">
              <div className="flex items-center justify-center w-9 h-9 bg-blue-600 rounded-md ">
                <Shield size={18} color="#fff" className="" />
              </div>
              <div>
                <p className="text-xl font-bold">Admin Panel</p>
                <p className=" text-gray-500 tracking-tight">
                  Content Moderation
                </p>
              </div>
            </div>

            {/* Top Second */}
            <div className="px-4 py-2 flex flex-col  space-y-2">
              {sidebar_routes.map((items, i) => (
                <Link href={items.href} key={i}>
                  <div className="px-2 py-1 hover:bg-[#F4F4F5] hover:text-[#18181b] hover:font-semibold">
                    <p className="flex items-center text-[#3f3f46] ">
                      <items.icon className="mr-4" size={18} />
                      {items.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Content */}
          <div className="fex flex-col border-t border-gray-300">
            <div className="p-4">
              <p className=" text-[#475569] pb-2">Logged in as Admin</p>
              <Button variant="outline" className="w-full justify-start cursor-pointer bg-white border-gray-200 border py-4 text-base text-[#0f172a] font-medium ">
                <LogOut className="mr-2" size={20} /> Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
