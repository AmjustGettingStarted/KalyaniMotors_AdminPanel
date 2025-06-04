import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { choose_colors } from "@/data/settings";
import { Bell, Palette, Shield } from "lucide-react";
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
        <div>
          <Card className="rounded-sm shadow-none">
            <CardHeader>
              <CardTitle>
                <p className="flex gap-2 items-center">
                  <Shield />
                  <h1 className="text-lg">Moderations Rules</h1>
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {/* Threshold */}
                <div className="flex flex-col">
                  <p>Auto-approve Threshold</p>
                  <p>
                    <Select>
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="5+ approve posts" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Never auto-appprove</SelectItem>
                        <SelectItem value="2">5+ approve posts</SelectItem>
                        <SelectItem value="3">10+ approve posts</SelectItem>
                        <SelectItem value="4">20+ approve posts</SelectItem>
                      </SelectContent>
                    </Select>
                  </p>
                  <p>Automatically approve posts from trusted users</p>
                </div>
                {/*  Max Uploads */}
                <div className="flex flex-col ">
                  <p>Max Post Length</p>
                  <p>
                    <Input type="number" defaultValue={500} />
                  </p>
                  <p>Maximum characters allowed per post</p>
                </div>
              </div>
              <div className="flex flex-col">
                <h1>Blocked Keywords</h1>
                <Textarea defaultValue="spam offensive" />
                <p>Posts containing these keywords will be auto-flagged</p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex items-center justify-between">
                  <p>
                    <h1>Require Manual Approval</h1>
                    <h2>All posts need manual review</h2>
                  </p>
                  <p>
                    <Switch />
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <h1>Allow Anonymous Posts</h1>
                    <h2>Users can post without accounts</h2>
                  </p>
                  <p>
                    <Switch />
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
