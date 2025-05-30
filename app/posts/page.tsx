import { Shield, Sidebar } from "lucide-react";
import React from "react";

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
    </div>
  );
};

export default Posts;
