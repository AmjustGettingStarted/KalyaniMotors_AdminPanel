import { Card, CardContent } from "@/components/ui/card";
import { users_count } from "@/data/users";
import React from "react";

const Users = () => {
  return (
    <div className="p-6">
      <div className="space-y-4 flex-col">
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
      </div>
    </div>
  );
};

export default Users;
