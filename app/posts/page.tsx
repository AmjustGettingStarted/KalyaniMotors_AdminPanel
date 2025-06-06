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
import Link from "next/link";

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
        <div className="cursor-pointer">
          <Sidebar size={18} className="m-2" />
        </div>
        <div className=" flex items-center">
          <div className="border-l border-gray-300 h-6 ml-2 hidden md:block"></div>
          <div className="flex items-center justify-center w-6 h-6 bg-blue-600 mx-2 ">
            <Shield size={13} color="#fff" />
          </div>
          <p className="font-semibold text-slate-900">
            Posts & Comments Management
          </p>
        </div>
      </div>

      {/* Posts Details Cards */}
      <div className="py-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts_data.map((post, i) => (
            <Card key={i} className={`rounded-sm ${getCss(post.heading)}`}>
              <CardContent>
                <div className="flex-col space-y-2">
                  <div className="w-full flex justify-between items-center">
                    <p className="font-medium text-xs md:text-sm tracking-tight line-clamp-1">
                      {post.heading}
                    </p>
                    <p>
                      <post.icon size={16} />
                    </p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="text-2xl font-bold">{post.count}</p>
                    <p className="text-xs ">{post.subhead}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Filter component */}
      <div className="md:px-4 py-2 md:border md:border-gray-300 rounded-md">
        <div className="flex flex-col space-y-2">
          <div className="flex-col md:flex-row md:flex w-full">
            <div className="w-full md:w-1/2 flex items-center space-x-2 ">
              <Search size={18} className="text-slate-400" />
              <Input
                placeholder="Search by username, content, or post ID ..."
                className="my-2 h-10 placeholder:text-sm truncate "
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
              <Checkbox className="mr-2 border-black cursor-pointer" />
              <Label className="text-sm font-normal text-slate-600">
                Select all
              </Label>
            </p>
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div className="py-6">
        <div className="grid lg:grid-cols-2 gap-4">
          {repeatedPosts.map((post, i) => (
            <Card key={i} className="flex-col gap-2 rounded-sm">
              {/* Top Content */}
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <Checkbox className="border-black cursor-pointer " />
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col leading-loose">
                      <p className="text-sm md:text-base">@{post.user}</p>
                      <p className="text-xs md:text-sm text-slate-500 font-normal line-clamp-1 ">
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
                      <Link href={`/posts/${post.user}`}>
                        <ExternalLinkIcon
                          size={18}
                          className="cursor-pointer"
                        />
                      </Link>
                    </p>
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex-col space-y-4">
                  <p className="md:text-base leading-relaxed line-clamp-3 text-slate-700 text-sm">
                    {post.postTitle}
                  </p>
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
                  <div className="py-4">
                    <Card className="bg-slate-50 py-3 flex-col gap-2 border-none rounded-sm">
                      <CardHeader className="px-2 text-sm text-slate-600 font-normal">
                        <CardTitle className="flex items-center px-2 w-full justify-between">
                          <div className="flex items-center space-x-1">
                            <MessageSquare size={18} /> <p>{post.commentNo}</p>
                            <p>Comments</p>
                          </div>
                          <div>
                            <Button
                              variant="ghost"
                              className="text-blue-600 hover:text-blue-700 text-xs px-3 hover:bg-accent cursor-pointer"
                            >
                              View All
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-4 ">
                          <p className="flex-col flex items-center ">
                            <span className="text-xs md:text-sm text-amber-700">
                              {post.pending}
                            </span>
                            <span className="text-xs">Pending</span>
                          </p>
                          <p className="flex-col flex items-center ">
                            <span className="text-xs md:text-sm text-green-700">
                              {post.approved}
                            </span>
                            <span className="text-xs"> Approved</span>
                          </p>
                          <p className="flex-col flex items-center ">
                            <span className="text-xs md:text-sm text-red-700 ">
                              {post.rejected}
                            </span>
                            <span className="text-xs"> Rejected</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex w-full gap-2">
                <Button
                  variant="outline"
                  className="flex h-10  items-center w-1/2 bg-green-600 hover:bg-green-700  text-white hover:text-white rounded-sm  cursor-pointer text-sm"
                >
                  <CheckCircle /> Approve
                </Button>
                <Button
                  variant="destructive"
                  className="flex h-10 items-center w-1/2 rounded-sm  cursor-pointer text-sm text-white hover:text-white hover:bg-red-700"
                >
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
