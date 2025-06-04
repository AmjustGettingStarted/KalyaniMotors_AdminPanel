import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { choose_colors } from "@/data/settings";
import { Bell, Palette } from "lucide-react";
import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <div className="space-y-4 sm:space-y-8 flex flex-col">
        {/* Top Header */}
        <div>
          <h1 className="text-xl sm:text-4xl tracking-tight font-semibold">
            Admin Settings
          </h1>
          <h3 className="text-sm sm:text-lg font-normal text-slate-600 pt-2">
            Configure admin panel preferences and moderation rules
          </h3>
        </div>

        {/* Appearance & Notfication */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Appearance */}
          <div>
            <Card className="rounded-sm shadow-xs">
              <CardHeader>
                <CardTitle>
                  <p className="flex gap-2">
                    <Palette /> Appearance
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col">
                {/* Select theme */}
                <div>
                  <h1> Theme</h1>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Light" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Select Color */}
                <div className="flex flex-col">
                  <h1>Primary Color</h1>
                  <div className="grid grid-cols-3 gap-2">
                    {choose_colors.map((colors, i) => (
                      <Button
                        variant="outline"
                        className=" rounded-sm w-full shadow-none h-12"
                        key={i}
                      >
                        <div className="flex items-center gap-4 justify-start w-full h-8">
                          <p
                            className={`w-5 h-5 rounded-full ${colors.bg} `}
                          ></p>
                          <p>{colors.color}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Notifications */}
          <div>
            <Card className="rounded-sm shadow-xs">
              <CardHeader>
                <CardTitle>
                  <p className="flex gap-2">
                    <Bell />
                    Notifications
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  {/* Email Notfication */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p>Email Notfications</p>
                      <p>Receive email alerts for new posts</p>
                    </div>
                    <div>
                      <Switch />
                    </div>
                  </div>
                  <Separator />
                  {/* Push Notfication */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p>Push Notfications</p>
                      <p>Browser push notifications</p>
                    </div>
                    <div>
                      <Switch />
                    </div>
                  </div>
                  <Separator />
                  {/* Moderation Notfication */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p>Moderation Alerts</p>
                      <p>
                        Browser push notificationsUrgent moderation
                        notifications
                      </p>
                    </div>
                    <div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Moderation Rules */}
        <div className="px-4 py-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
