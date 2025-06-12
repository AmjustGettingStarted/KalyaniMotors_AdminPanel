import * as React from "react";
import { FileText, LogOut, Settings, Shield, Users } from "lucide-react";

import { Button } from "../ui/button";
import Link from "next/link";
import { Sidebar } from "../ui/sidebar";

// This is sample data.
export const sidebar_routes = [
  { label: "Posts", icon: FileText, href: "/admin" },
  { label: "Users", icon: Users, href: "/users" },
  { label: "Settings", icon: Settings, href: "/admin/settings3" },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <div className="bg-[#FAFAFA] border-r border-gray-300">
        <div className="h-full">
          <div className="flex flex-col justify-between h-full ">
            {/* Top Content */}
            <div className="flex flex-col">
              {/* Top First */}
              <div className="flex items-center gap-2 border-b border-gray-300 p-4">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-md ">
                  <Shield size={16} color="#fff" className="" />
                </div>
                <div>
                  <p className="text-lg font-bold">Admin Panel</p>
                  <p className="text-sm text-gray-500 tracking-tight">
                    Content Moderation
                  </p>
                </div>
              </div>

              {/* Top Second */}
              <div className="px-4 py-2 flex flex-col  space-y-2">
                {sidebar_routes.map((items, i) => (
                  <Link href={items.href} key={i}>
                    <div className="p-1 hover:bg-[#F4F4F5] hover:text-[#18181b] hover:font-semibold">
                      <p className="flex items-center text-[#3f3f46] gap-3">
                        <items.icon size={16} />
                        <span className="text-sm">{items.label}</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="fex flex-col border-t border-gray-300">
              <div className="p-4 space-y-2">
                <p className=" text-[#475569] text-sm">Logged in as Admin</p>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-start cursor-pointer bg-background border-gray-200   text-slate-500 hover:text-slate-900"
                >
                  <LogOut className="mr-2" size={20} />
                  <span className="text-sm ">Sign Out</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
