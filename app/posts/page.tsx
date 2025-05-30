import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, FilesIcon, Shield, Sidebar } from "lucide-react";
import React from "react";

export const posts_data = [
  {
    heading: "Total Posts",
    icon: FilesIcon,
    count: 20,
    subhead: "All content",
    css: "border-2 border-slate-200 hover:border-slate-300 bg-[#FAFCFD] text-slate-600",
  },
  {
    heading: "Pending Posts",
    icon: Clock,
    count: 6,
    subhead: "Awaiting review",
    css: "border-2 border-amber-200 hover:border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700 ",
  },
  {
    heading: "Approved Posts",
    icon: CheckCircle,
    count: 7,
    subhead: "Published content",
    css: "border-2 border-green-200 hover:border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700",
  },
];
const Posts = () => {
  return (
    <div className="px-6 pt-8">
      {/* Top Header */}
      <div className="border-b border-gray-300 pb-3 flex">
        <div className=" p-4 ">
          <Sidebar size={15} />
        </div>
        <div className="border-l border-gray-300 flex items-center">
          <div className="flex items-center justify-center w-6 h-6 bg-blue-600 mx-2 ">
            <Shield size={13} color="#fff" />
          </div>
          <p>Posts & Comments Management</p>
        </div>
      </div>
      {/* Posts Details Cards */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-8">
          {posts_data.map((post, i) => (
            <Card key={i} className={post.css}>
              <CardContent>
                <div className="p-6 flex-col">
                  <div className="w-full flex justify-between items-center">
                    <p>{post.heading}</p>
                    <p>
                      <post.icon />
                    </p>
                  </div>
                  <p>{post.count}</p>
                  <p>{post.subhead}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
