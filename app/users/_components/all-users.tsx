import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { all_users } from "@/data/users";
import { Ban, Calendar, CircleCheckBig, Mail, User } from "lucide-react";
import React from "react";

const AllUsers = () => {
  const reapeated_users = Array(6).fill(all_users).flat();

  return (
    <>
      {reapeated_users.map((user, i) => (
        <Card key={i} className="rounded-sm shadow-none py-4 overflow-x-auto">
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
                      <h1 className="font-medium text-sm sm:text-lg">
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
                    <p className="flex items-center text-slate-600 text-xs sm:text-base truncate font-normal ">
                      <Mail className="mr-1 " size={15} />
                      {user.mail}
                    </p>
                    {/* Third Line */}
                    <div className="flex flex-col sm:flex-row line-clamp-3  items-start sm:items-center text-slate-600 text-xs sm:text-base space-x-4 space-y-1 font-normal w-full overflow-hidden">
                      <p className="flex items-center gap-1 ">
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
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer "
                  >
                    View Profile
                  </Button>
                  {user.status === "blocked" ? (
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto cursor-pointer  text-green-600 border-green-300 hover:bg-green-50 hover:text-green-700"
                    >
                      <CircleCheckBig className="mr-2" />
                      Unblock User
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto cursor-pointer text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700"
                    >
                      <Ban className="mr-1" />
                      Block User
                    </Button>
                  )}
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
