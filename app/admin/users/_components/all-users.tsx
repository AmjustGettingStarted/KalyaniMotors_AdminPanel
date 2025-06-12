"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { all_users } from "@/data/users";
import { Ban, Calendar, CircleCheckBig, Mail, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState(all_users);
  const toggleBlockStatus = (userId: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "blocked" ? "active" : "blocked",
            }
          : user
      )
    );
  };
  return (
    <>
      {users.map((user, i) => (
        <Card key={i} className="rounded-sm shadow-none py-2 overflow-x-auto">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4">
                {/* Left Content - Card */}
                <div className="flex items-center w-full sm:w-[50%] md:w-[60%] lg:w-[80%] space-x-4 mb-0">
                  {/* Left Avatar */}
                  <div className="">
                    <Avatar className="size-9 sm:size-12 mb-0">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  {/* Left Middle group */}
                  <div className="flex flex-col items-start space-y-1 w-full">
                    {/* First Line */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4 space-y-1 w-full">
                      <h1 className="font-medium text-sm sm:text-base">
                        @{user.name}
                      </h1>
                      <p
                        className={`capitalize text-xs sm:text-sm px-2 rounded-full flex items-center gap-1 font-medium w-full sm:w-auto ${
                          user.status === "active"
                            ? "bg-green-100 text-green-800 border border-green-200 hover:bg-secondary/80"
                            : "bg-red-100 text-red-800 border border-red-200 hover:bg-secondary/80"
                        }`}
                      >
                        {user.status === "active" ? (
                          <CircleCheckBig size={13} />
                        ) : (
                          <Ban size={13} />
                        )}
                        {user.status}
                      </p>
                      <p className="text-xs hidden sm:inline text-slate-400">
                        ID: {user.id}
                      </p>
                    </div>
                    {/* Second Line */}
                    <p className="flex items-center text-slate-600 text-xs sm:text-sm truncate font-normal ">
                      <Mail className="mr-1 " size={15} />
                      {user.mail}
                    </p>
                    {/* Third Line */}
                    <div className="flex flex-col sm:flex-row line-clamp-3  items-start sm:items-center text-slate-600 text-xs sm:text-sm space-x-4 space-y-1 font-normal w-full overflow-hidden">
                      <p className="flex items-center gap-1 overflow-hidden ">
                        <Calendar size={15} /> Joined {user.joined} ago
                      </p>
                      <div className="flex justify-between items-center w-full sm:w-auto mb-3 sm:mb-0 space-x-4">
                        <p>{user.posts} Posts</p>
                        <p>Last active {user.last_active} days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right side buttons */}
                <div className="flex flex-col sm:flex-row items-center w-full sm:flex-1 gap-2">
                  <Link href={`/admin/${user.name}`}>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer "
                    >
                    View Profile
                  </Button>
                    </Link>
                  <Button
                    variant="outline"
                    className={`cursor-pointer ${
                      user.status === "blocked"
                        ? "text-green-600 border-green-300 hover:bg-green-50"
                        : "text-red-600 border-red-300 hover:bg-red-50"
                    }`}
                    onClick={() => toggleBlockStatus(user.id)}
                  >
                    {user.status === "blocked" ? (
                      <CircleCheckBig className="mr-2" />
                    ) : (
                      <Ban className="mr-1" />
                    )}
                    {user.status === "blocked" ? "Unblock User" : "Block User"}
                  </Button>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default AllUsers;
