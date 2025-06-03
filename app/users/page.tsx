import SelectMenu from "@/components/sub/select-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { filterData } from "@/data/posts";
import { users_count, users_select } from "@/data/users";
import { ArrowDownUpIcon, Filter, Search } from "lucide-react";
import React from "react";

const Users = () => {
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
        <div className="flex flex-col space-y-4"></div>
      </div>
    </div>
  );
};

export default Users;
