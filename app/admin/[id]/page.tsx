import SelectMenu from "@/components/sub/select-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { comment_count, commentFilter } from "@/data/post-details";
import { status } from "@/data/posts";
import { all_users } from "@/data/users";
import {
  ArrowDownUpIcon,
  ArrowLeft,
  CheckCircle,
  CircleCheckBig,
  CircleX,
  Clock,
  Dot,
  ExternalLinkIcon,
  Filter,
  MessageSquare,
  Phone,
  Search,
  Shield,
  Sidebar,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const reach = [
  { count: 24, label: "Likes" },
  { count: 12, label: "Comments" },
  { count: 3, label: "Shares" },
];

const PostDetail = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

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
          <p className="font-semibold text-slate-900">Post Detail</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Back to home button */}
        <div className="pt-6">
          <Link href="/admin">
            <Button
              className="rounded-sm cursor-pointer shadow-none"
              variant="outline"
            >
              <ArrowLeft />
              Back to Posts
            </Button>
          </Link>
        </div>

        {/* Post Details */}
        <div>
          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center space-x-2 md:space-x-4">
                  <Avatar className="size-12">
                    <AvatarImage src="https://images.pexels.com/photos/4565706/pexels-photo-4565706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </Avatar>
                  <div className="flex flex-col leading-loose">
                    <div className="flex items-center gap-2">
                      <p className="text-base md:text-2xl ">{params.id}</p>
                      <Shield size={15} className="text-blue-600" />
                    </div>
                    <div className="flex space-x-4 text-xs sm:text-sm  text-slate-500 font-medium">
                      <p className=" line-clamp-1 ">about 1 year ago</p>
                      <p>•</p>
                      <p>Post ID: 1</p>
                      <p>•</p>
                      <p>Night Sky</p>
                    </div>
                    <div className="flex items-center text-xs text-slate-400 space-x-2">
                      <Phone size={12} />
                      <p>775677477</p>
                      <p>•</p>
                      <p>Members</p>
                    </div>
                  </div>
                </div>
              </CardTitle>
              <CardAction>
                <div className="flex items-center space-x-4">
                  <p
                    className={`flex items-center gap-2 h-6 rounded-full  px-2 text-xs capitalize font-medium bg-amber-100 text-amber-800 `}
                  >
                    <Clock size={12} />
                    Pending
                  </p>
                  <p>
                    <Button variant="outline" className="cursor-pointer">
                      <ExternalLinkIcon size={18} />
                      View Profile
                    </Button>
                  </p>
                </div>
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-4 flex flex-col">
              <h1>Post Content</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                tempore accusantium quod officiis optio exercitationem laborum
                corrupti facilis. Libero consequatur, ipsum sapiente nulla iusto
                vero vitae similique illo ab consectetur? Perferendis inventore
                aliquid quisquam ducimus recusandae impedit minus rem
                praesentium, in, dolorem a fugiat error officiis cum hic
                consectetur laboriosam debitis. Labore ullam facilis magni
                quaerat pariatur quis expedita esse!
              </p>
              <div className="flex flex-col w-full space-y-2">
                <h1>Media</h1>
                <Image
                  src="https://images.pexels.com/photos/4021367/pexels-photo-4021367.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={params.id}
                  width={1920}
                  height={1080}
                  className="w-full h-[50vh] object-cover"
                />
              </div>
              <Card className="grid grid-cols-3 bg-slate-50 py-4 rounded-sm border-none shadow-none">
                {reach.map((item, i) => (
                  <div key={i} className="flex flex-col space-y-1 items-center">
                    <p className="text-slate-900 font-medium">{item.count}</p>
                    <p className="text-sm text-slate-600">{item.label}</p>
                  </div>
                ))}
              </Card>
            </CardContent>
            <CardFooter className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Button
                className="w-full h-10 rounded-sm text-white hover:text-white bg-green-600 hover:bg-green-700 cursor-pointer"
                variant={`outline`}
              >
                <CircleCheckBig />
                Approve Post
              </Button>
              <Button
                className="w-full h-10 rounded-sm text-white hover:text-white bg-red-600 hover:bg-red-700 cursor-pointer"
                variant={`outline`}
              >
                <CircleX />
                Reject Post
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Separator />

        {/* Comments Section */}

        <div>
          <div className="flex flex-col">
            {/* Title  */}
            <div className="flex gap-2 items-center font-semibold">
              <span>
                <MessageSquare />
              </span>
              <h1 className="text-2xl">Comments ( 18 ) </h1>
            </div>

            {/* Users Count Card Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
              {comment_count.map((item, i) => (
                <Card key={i} className="rounded-sm shadow-xs py-3">
                  <CardContent className="px-4">
                    <div className="flex justify-between items-center">
                      <p
                        className={`text-lg font-bold ${
                          item.lable === "Approved"
                            ? "text-green-600"
                            : item.lable === "Rejected"
                            ? "text-red-600"
                            : item.lable === "Pending"
                            ? "text-amber-600"
                            : "text-black"
                        }`}
                      >
                        {item.count}
                      </p>
                    </div>
                    <p className="text-sm">{item.lable}</p>
                  </CardContent>
                </Card>
              ))}
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
                      <SelectMenu data={commentFilter} />
                    </p>
                  </div>
                </div>
                <div className="hidden md:block mb-2">
                  <p className="flex items-center space-x-2">
                    <Checkbox className="mr-2 border-black cursor-pointer" />
                    <Label className="text-sm font-normal text-slate-600">
                      Select all
                    </Label>
                  </p>
                </div>
              </div>
            </div>

            {/* All Users Cards */}
            <div className="py-4 space-y-4">
              {all_users.map((user, i) => (
                <Card key={i} className="rounded-sm shadow-xs flex py-4">
                  <div className="flex items-start w-full">
                    {/* Left Card */}
                    <div className="flex items-start gap-4 px-4">
                      <Checkbox />
                      <Avatar className="size-11">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                          <User />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    {/* Middle Card */}
                    <div className="flex flex-col space-y-2 w-full">
                      {/* Top Line  */}
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                          <p>{user.name}</p>
                          <p>{user.status}</p>
                          <p>ID: {user.id}</p>
                        </div>
                        <div>
                          <p>about {user.last_active} ago</p>
                        </div>
                      </div>
                      <p>
                        Sample comment{user.id}. This is a test comment for
                        demonstration purposes.
                      </p>
                      <div className="flex items-center space-x-2">
                        <p>
                          <Phone />
                        </p>
                        <p>748928989{user.id}</p>
                        <p>
                          <Dot />
                        </p>
                        <p>Member</p>
                      </div>
                      <CardFooter className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          className="flex h-10  items-center  bg-green-600 hover:bg-green-700  text-white hover:text-white rounded-sm  cursor-pointer text-sm"
                        >
                          <CheckCircle /> Approve
                        </Button>
                        <Button
                          variant="destructive"
                          className="flex h-10 items-center  rounded-sm  cursor-pointer text-sm text-white hover:text-white hover:bg-red-700"
                        >
                          <CircleX />
                          Reject
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
