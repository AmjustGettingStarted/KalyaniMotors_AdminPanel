import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  CircleCheckBig,
  CircleX,
  Shield,
  Sidebar,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const PostDetail = ({ params }: { params: { id: string } }) => {
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
          <Card className="h-screen rounded-sm">
            <CardHeader>
              <CardTitle>Title</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
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
      </div>
    </div>
  );
};

export default PostDetail;
