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
  Filter,
  Mail,
  Search,
} from "lucide-react";
import React from "react";

const Users = () => {
  const reapeated_users = Array(6).fill(all_users).flat();
  console.log("users: " + reapeated_users);
  return (
    <div className="p-6">
      <div className="space-y-8 flex flex-col">
        {/* Top Header */}
        <div>
          <h1 className="text-4xl tracking-tight font-semibold">
            User Management
          </h1>
          <h3 className="text-lg font-normal text-slate-600">
            Manage user accounts and monitor activity
          </h3>
        </div>

        {/* Users Count Card Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {users_count.map((item, i) => (
            <Card key={i} className="rounded-sm">
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <p>{item.lable}</p>
                  <p>
                    <item.icon />
                  </p>
                </div>
                <p>{item.count}</p>
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
            <Card key={i} className="rounded-sm">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center w-[80%]">
                      <div>
                        <Avatar>
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <div className="flex items-center space-x-4">
                          <h1>@{user.name}</h1>
                          <p>{user.status}</p>
                          <p>ID: {user.id}</p>
                        </div>
                        <p className="flex items-center">
                          <Mail />
                          {user.mail}
                        </p>
                        <div className="flex items-center">
                          <Calendar />
                          <p>Joined {user.joined} ago</p>
                          <p>{user.posts} Posts</p>
                          <p>Last active {user.last_active} days ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-[20%}">
                      <Button variant="outline" className="cursor-pointer">
                        View Profile
                      </Button>
                      <Button variant="outline" className="cursor-pointer">
                        <Ban className="mr-2" />
                        Block User
                      </Button>
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
