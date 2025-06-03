import SelectMenu from "@/components/sub/select-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { filterData } from "@/data/posts";
import { all_users, users_count, users_select } from "@/data/users";
import {
  ArrowDownUpIcon,
  Ban,
  Calendar,
  CircleCheckBig,
  Filter,
  Mail,
  Search,
} from "lucide-react";
import React from "react";

const Users = () => {
  const reapeated_users = Array(6).fill(all_users).flat();
  return (
    <div className="p-4 sm:p-6">
      <div className="space-y-4 sm:space-y-8 flex flex-col">
        {/* Top Header */}
        <div>
          <h1 className="text-xl sm:text-4xl tracking-tight font-semibold">
            User Management
          </h1>
          <h3 className="text-sm sm:text-lg font-normal text-slate-600 pt-2">
            Manage user accounts and monitor activity
          </h3>
        </div>

        {/* Users Count Card Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {users_count.map((item, i) => (
            <Card key={i} className="rounded-sm shadow-xs">
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <p>{item.lable}</p>
                  <p
                    className={`${
                      item.lable === "Active Users"
                        ? "text-green-500"
                        : item.lable === "Blocked"
                        ? "text-red-500"
                        : "text-slate-500"
                    }`}
                  >
                    <item.icon size={17} />
                  </p>
                </div>
                <p
                  className={`text-2xl font-bold ${
                    item.lable === "Active Users"
                      ? "text-green-600"
                      : item.lable === "Blocked"
                      ? "text-red-600"
                      : ""
                  }`}
                >
                  {item.count}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter component */}
        <div className="p-0 md:p-4 md:border md:border-gray-300 rounded-md">
          <div className="flex-col md:flex-row md:flex w-full">
            <div className="w-full md:w-1/2 flex items-center space-x-2 ">
              <Search size={18} className="text-slate-400" />
              <Input
                placeholder="Search by username, email, or user ID..."
                className="my-2 h-10 placeholder:text-base truncate"
              />
            </div>
            <div className="flex w-full md:w-1/2 md:pl-4 space-x-2">
              <p className="flex items-center w-1/2 gap-2">
                <Filter size={18} className="text-slate-400" />
                <SelectMenu data={users_select} />
              </p>
              <p className="flex items-center w-1/2 gap-2">
                <ArrowDownUpIcon className="text-slate-400" />
                <SelectMenu data={filterData} />
              </p>
            </div>
          </div>
        </div>

        {/* All Users  */}
        <div className="flex flex-col space-y-4">
          {reapeated_users.map((user, i) => (
            <Card key={i} className="rounded-sm shadow-none">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center w-[80%] space-x-4">
                      {/* Left Avatar */}
                      <div>
                        <Avatar className="size-12">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      {/* Left Middle group */}
                      <div className="flex flex-col items-start space-y-1 w-full">
                        {/* First Line */}
                        <div className="flex items-center space-x-4">
                          <h1 className="font-medium text-base sm:text-lg">
                            @{user.name}
                          </h1>
                          <p
                            className={`capitalize text-sm px-2 rounded-full flex items-center gap-1 font-medium ${
                              user.status === "active"
                                ? "bg-green-100 text-green-800 border border-green-600"
                                : "bg-red-100 text-red-800 border border-red-600"
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
                        <p className="flex items-center text-slate-600 text-sm sm:text-base truncate font-normal ">
                          <Mail className="mr-1 " size={15} />
                          {user.mail}
                        </p>
                        {/* Third Line */}
                        <div className="flex items-center text-slate-600 text-sm sm:text-base space-x-4 font-normal">
                          <p className="flex items-center gap-1">
                            <Calendar size={15} /> Joined {user.joined} ago
                          </p>
                          <p>{user.posts} Posts</p>
                          <p>Last active {user.last_active} days ago</p>
                        </div>
                      </div>
                    </div>
                    {/* Right side buttons */}
                    <div className="flex items-center w-[20%} gap-2">
                      <Button variant="outline" className="cursor-pointer">
                        View Profile
                      </Button>
                      {user.status === "blocked" ? (
                        <Button
                          variant="outline"
                          className="cursor-pointer text-green-600 border-green-300 hover:bg-green-50 hover:text-green-700"
                        >
                          <CircleCheckBig className="mr-2" />
                          Unblock User
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="cursor-pointer text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700"
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
        </div>
      </div>
    </div>
  );
};

export default Users;
