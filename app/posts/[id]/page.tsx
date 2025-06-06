import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Sidebar } from "lucide-react";
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
          <Button className="" variant="outline">
            <ArrowLeft />
            Back to Posts
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
