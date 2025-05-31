import {
  CheckCircle,
  CircleX,
  Clock,
  FilesIcon,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const posts_data = [
  {
    heading: "Total Posts",
    icon: FilesIcon,
    count: 20,
    subhead: "All content",
    // css: "border-2 border-slate-200 hover:border-slate-300 bg-[#FAFCFD] text-slate-600",
  },
  {
    heading: "Pending Posts",
    icon: Clock,
    count: 6,
    subhead: "Awaiting review",
    // css: "border-2 border-amber-200 hover:border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700 ",
  },
  {
    heading: "Approved Posts",
    icon: CheckCircle,
    count: 7,
    subhead: "Published content",
    // css: "border-2 border-green-200 hover:border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700",
  },
  {
    heading: "Rejected Posts",
    icon: CircleX,
    count: 7,
    subhead: "Declined content",
    // css: "border-2 border-red-200 hover:border-red-300 bg-gradient-to-br from-red-50 to-rose-50 text-red-700",
  },
  {
    heading: "Total Comments",
    icon: MessageSquare,
    count: 188,
    subhead: "User interactions",
    // css: "border-2 border-blue-200 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700",
  },
  {
    heading: "Engagement",
    icon: Sparkles,
    count: "",
    subhead: "Likes & shares",
    // css: "border-2 border-purple-200 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-violet-50 text-purple-700",
  },
];

export const posts_blogs = [];
