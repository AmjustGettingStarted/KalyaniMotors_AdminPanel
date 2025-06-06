import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  CircleCheckBig,
  CircleX,
  Clock,
  ExternalLinkIcon,
  Shield,
  Sidebar,
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
        <div className="pt-6">
          <Link href="/posts">
            <Button
              className="rounded-sm cursor-pointer shadow-none"
              variant="outline"
            >
              <ArrowLeft />
              Back to Posts
            </Button>
          </Link>
        </div>
        <div>
          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center space-x-2 md:space-x-4">
                  <Avatar className="size-12">
                    <AvatarImage src="https://images.pexels.com/photos/4565706/pexels-photo-4565706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </Avatar>
                  <div className="flex flex-col leading-loose">
                    <p className="text-sm md:text-base">@{params.id}</p>
                    <p className="text-xs md:text-sm text-slate-500 font-normal line-clamp-1 ">
                      about 1 year ago
                    </p>
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
                    <Button variant="outline">
                      <ExternalLinkIcon size={18} className="cursor-pointer" />
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
                className="w-full h-10 rounded-sm text-white hover:text-white bg-green-600 hover:bg-green-700"
                variant={`outline`}
              >
                <CircleCheckBig />
                Approve Post
              </Button>
              <Button
                className="w-full h-10 rounded-sm text-white hover:text-white bg-red-600 hover:bg-red-700"
                variant={`outline`}
              >
                <CircleX />
                Reject Post
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default PostDetail;
