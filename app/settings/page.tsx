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
import {
  Bell,
  Palette,
  Save,
  SettingsIcon,
  Shield,
  Trash2,
} from "lucide-react";
import React from "react";

const Settings = () => {
  return (
    <div className="p-6 ">
      <div className="space-y-4 sm:space-y-8 flex flex-col">
        {/* Top Header */}
        <div>
          <h1 className="text-3xl tracking-tight font-semibold">
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
                  <p className="flex gap-2 text-xl font-medium items-center">
                    <Palette /> Appearance
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {/* Select theme */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg"> Theme</h1>
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
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-normal tracking-tight">
                    Primary Color
                  </h1>
                  <div className="grid grid-cols-3 gap-2">
                    {choose_colors.map((colors, i) => (
                      <Button
                        variant="outline"
                        className=" rounded-sm w-full shadow-none h-12 cursor-pointer"
                        key={i}
                      >
                        <div className="flex items-center gap-2 justify-start w-full h-8">
                          <p
                            className={`w-5 h-5 rounded-full ${colors.bg} `}
                          ></p>
                          <p className="text-base font-normal">
                            {colors.color}
                          </p>
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
                  <p className="flex gap-2 items-center text-xl font-semibold">
                    <Bell />
                    Notifications
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-5">
                  {/* Email Notfication */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-lg font-medium">Email Notfications</p>
                      <p className="text-sm text-slate-600">
                        Receive email alerts for new posts
                      </p>
                    </div>
                    <div>
                      <Switch className="cursor-pointer " />
                    </div>
                  </div>
                  <Separator />
                  {/* Push Notfication */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-lg font-medium">Push Notfications</p>
                      <p className="text-sm text-slate-600">
                        Browser push notifications
                      </p>
                    </div>
                    <div>
                      <Switch className="cursor-pointer" />
                    </div>
                  </div>
                  <Separator />
                  {/* Moderation Notfication */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-lg font-medium">Moderation Alerts</p>
                      <p className="text-sm text-slate-600">
                        Urgent moderation notifications
                      </p>
                    </div>
                    <div>
                      <Switch className="cursor-pointer" />
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
                <p className="flex gap-2 items-center font-semibold text-xl">
                  <Shield />
                  <h1 className="text-lg font-semibold tracking-tight">
                    Moderations Rules
                  </h1>
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Threshold */}
                <div className="flex flex-col space-y-2">
                  <p className="">Auto-approve Threshold</p>
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
                  <p className="text-xs text-slate-500">
                    Automatically approve posts from trusted users
                  </p>
                </div>
                {/*  Max Uploads */}
                <div className="flex flex-col space-y-2 ">
                  <p>Max Post Length</p>
                  <p>
                    <Input type="number" defaultValue={500} />
                  </p>
                  <p className="text-xs text-slate-500">
                    Maximum characters allowed per post
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <h1>Blocked Keywords</h1>
                <Textarea
                  defaultValue="spam offensive"
                  rows={6}
                  className="h-32 rounded-sm"
                />
                <p className="text-xs text-slate-500">
                  Posts containing these keywords will be auto-flagged
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="flex items-center justify-between">
                  <p>
                    <h1 className="font-medium">Require Manual Approval</h1>
                    <h2 className="text-xs text-slate-500">
                      All posts need manual review
                    </h2>
                  </p>
                  <p>
                    <Switch className="cursor-pointer scale-125" />
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <h1 className="font-medium">Allow Anonymous Posts</h1>
                    <h2 className="text-xs text-slate-500">
                      Users can post without accounts
                    </h2>
                  </p>
                  <p>
                    <Switch className="cursor-pointer scale-125" />
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Data Management */}
        <div>
          <Card className="rounded-sm shadow-none">
            <CardHeader>
              <CardTitle>
                <h1 className="flex items-center gap-2">
                  <SettingsIcon />
                  Data Management
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Button
                  className="flex items-center gap-2 cursor-pointer"
                  variant="outline"
                >
                  <Save /> Export Data
                </Button>
                <Button
                  className="flex items-center gap-2 cursor-pointer"
                  variant="outline"
                >
                  <Save /> Backup settings
                </Button>
                <Button
                  className="flex items-center gap-2 cursor-pointer"
                  variant="destructive"
                >
                  <Trash2 /> Clear cache
                </Button>
              </div>
              <p>
                Export user data, backup configurations, or clear system cache
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Save Settings section */}
        <div>
          <Card className="rounded-sm shadow-none">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between w-full">
                  <p>Changes will be applied to the admin panel immediately</p>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Save />
                    Save Settings
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
