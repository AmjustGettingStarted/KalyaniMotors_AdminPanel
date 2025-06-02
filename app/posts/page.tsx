import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowDownUpIcon,
  CheckCircle,
  CircleX,
  Clock,
  ExternalLinkIcon,
  Filter,
  MessageSquare,
  Search,
  Shield,
  Sidebar,
  User,
} from "lucide-react";
import React from "react";
import { allPostsData, filterData, posts_data, status } from "@/data/posts";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import SelectMenu from "@/components/sub/select-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Posts = () => {
  // Function to determine the css of the posts data
  function getCss(heading: string): string {
    switch (heading.toLowerCase()) {
      case "total posts":
        return "border-2 round-sm border-slate-200 hover:border-slate-300 bg-[#FAFCFD] text-slate-600";
      case "pending posts":
        return "border-2 round-sm border-amber-200 hover:border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700 ";
      case "approved posts":
        return "border-2 round-sm border-green-200 hover:border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700";
      case "rejected posts":
        return "border-2 round-sm border-red-200 hover:border-red-300 bg-gradient-to-br from-red-50 to-rose-50 text-red-700";
      case "total comments":
        return "border-2 round-sm border-blue-200 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700";
      case "engagement":
        return "border-2 round-sm border-purple-200 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-violet-50 text-purple-700";
      default:
        return "";
    }
  }

  // Repeats allPostsData 5 times and flattens the nested array into a single array.
  const repeatedPosts = Array(5).fill(allPostsData).flat();
  // const repeatedPosts = [].concat(...Array(5).fill(allPostsData));
  // const repeatedPosts = Array.from({ length: 5 }, () => allPostsData).flat();

  return (
    <div className="p-4 md:p-6">
      {/* Top Header */}
      <div className="border-b border-gray-300 p-2 md:p-4 flex">
        <div className="">
          <Sidebar size={20} className="m-2" />
        </div>
        <div className=" flex items-center">
          <div className="border-l border-gray-300 h-6 ml-2 hidden md:block"></div>
          <div className="flex items-center justify-center w-6 h-6 bg-blue-600 mx-2 ">
            <Shield size={13} color="#fff" />
          </div>
          <p>Posts & Comments Management</p>
        </div>
      </div>

      {/* Posts Details Cards */}
      <div className="py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {posts_data.map((post, i) => (
            <Card key={i} className={getCss(post.heading)}>
              <CardContent>
                <div className="flex-col">
                  <div className="w-full flex justify-between items-center">
                    <p className="font-medium text-sm md:text-base tracking-tight">
                      {post.heading}
                    </p>
                    <p>
                      <post.icon size={18} />
                    </p>
                  </div>
                  <p className="text-2xl font-bold mt-2">{post.count}</p>
                  <p className="text-xs my-2">{post.subhead}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Filter component */}
      <div className="p-0 md:p-4 md:border md:border-gray-300 rounded-md">
        <div className="flex flex-col space-y-3">
          <div className="flex-col md:flex-row md:flex w-full">
            <div className="w-full md:w-1/2 flex items-center space-x-2 ">
              <Search size={18} className="text-slate-400" />
              <Input
                placeholder="Search by username, content, or post ID ..."
                className="my-2 h-10 placeholder:text-base truncate"
              />
            </div>
            <div className="flex w-full md:w-1/2 md:pl-4 space-x-2">
              <p className="flex items-center w-1/2 gap-2">
                <Filter size={18} className="text-slate-400" />
                <SelectMenu data={status} />
              </p>
              <p className="flex items-center w-1/2 gap-2">
                <ArrowDownUpIcon className="text-slate-400" />
                <SelectMenu data={filterData} />
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="flex items-center space-x-2">
              <Checkbox className="mr-2 border-black " />
              <Label className="text-base font-normal text-slate-600">
                Select all
              </Label>
            </p>
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div className="py-4">
        <div className="grid lg:grid-cols-2 gap-4">
          {repeatedPosts.map((post, i) => (
            <Card key={i} className="flex-col gap-2">
              {/* Top Content */}
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center space-x-4">
                    <Checkbox className="border-black " />
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col leading-loose">
                      <p className="text-lg">@{post.user}</p>
                      <p className="text-sm text-slate-500 font-normal">
                        about {post.time} ago
                      </p>
                    </div>
                  </div>
                </CardTitle>
                <CardAction>
                  <div className="flex space-x-4">
                    <p
                      className={`flex items-center rounded-full  px-2 text-sm capitalize font-medium ${
                        post.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : post.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {post.status === "pending" ? (
                        <Clock size={15} className="mr-2" />
                      ) : post.status === "approved" ? (
                        <CheckCircle size={15} className="mr-2" />
                      ) : (
                        <CircleX size={15} className="mr-2" />
                      )}
                      {post.status}
                    </p>
                    <p>
                      <ExternalLinkIcon size={18} />
                    </p>
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex-col space-y-4">
                  <p className="md:text-lg leading-relaxed line-clamp-3 text-slate-700 text-sm">{post.postTitle}</p>
                  <div>
                    <Image
                      src={post.url}
                      alt="Image"
                      width={1000}
                      height={1000}
                      className="rounded-md object-cover h-[160px] w-full"
                    />
                  </div>
                  {/* Comments */}
                  <div className="py-4 ">
                    <Card className="bg-slate-50">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MessageSquare /> {post.commentNo} Comments
                        </CardTitle>
                        <CardAction>
                          <Button variant="outline">View All</Button>
                        </CardAction>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-evenly">
                          <p className="flex-col flex items-center">
                            <span>{post.pending}</span>
                            <span>Pending</span>
                          </p>
                          <p className="flex-col flex items-center">
                            <span>{post.approved}</span>
                            <span>Approved</span>
                          </p>
                          <p className="flex-col flex items-center">
                            <span>{post.rejected}</span>
                            <span>Rejected</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex w-full gap-2">
                <Button
                  variant="link"
                  className="w-1/2 flex bg-green-500 text-white"
                >
                  <CheckCircle /> Approve
                </Button>
                <Button variant="destructive" className="w-1/2">
                  <CircleX />
                  Reject
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
