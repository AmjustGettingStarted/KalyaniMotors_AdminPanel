import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDownUpIcon, Filter, Search, Shield, Sidebar } from "lucide-react";
import React from "react";
import { filterData, posts_data, status } from "@/data/posts";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import SelectMenu from "@/components/sub/select-menu";

const Posts = () => {
  // Function to determine the css of the posts data
  function getCss(heading: string): string {
    switch (heading.toLowerCase()) {
      case "total posts":
        return "border-2 border-slate-200 hover:border-slate-300 bg-[#FAFCFD] text-slate-600";
      case "pending posts":
        return "border-2 border-amber-200 hover:border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700 ";
      case "approved posts":
        return "border-2 border-green-200 hover:border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700";
      case "rejected posts":
        return "border-2 border-red-200 hover:border-red-300 bg-gradient-to-br from-red-50 to-rose-50 text-red-700";
      case "total comments":
        return "border-2 border-blue-200 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700";
      case "engagement":
        return "border-2 border-purple-200 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-violet-50 text-purple-700";
      default:
        return "";
    }
  }

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
      <div className="py-6">
        <div className="grid grid-cols-3 gap-8">
          {posts_data.map((post, i) => (
            <Card key={i} className={getCss(post.heading)}>
              <CardContent>
                <div className=" flex-col">
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

      {/* Filter component */}
      <div className="p-4 border border-gray-300 rounded-md">
        <div className="flex flex-col gap-4">
          <div className="flex w-full">
            <div className="w-1/2 flex">
              <Search />
              <Input placeholder="Searc by username, content, or post ID..." />
            </div>
            <div className="w-1/2 flex">
              <p className="flex items-center w-1/2">
                <Filter />
                <SelectMenu data={status} />
              </p>
              <p className="flex items-center w-1/2">
                <ArrowDownUpIcon />
                <SelectMenu data={filterData} />
              </p>
            </div>
          </div>
          <div>
            <p className="">
              <Checkbox className="mr-2 border-black items-center" /> Select all
            </p>
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div className="py-4">
        <div className="gird grid-cols-2 gap-4">
          <Card>
            {/* Top Content */}
            <CardHeader>
              <CardTitle>
                <div>
                  <Checkbox className="border-black mr-2" />
                </div>
              </CardTitle>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Posts;
