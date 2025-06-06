import {
  CheckCircle,
  CircleX,
  Clock,
  FileSpreadsheet,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const posts_data = [
  {
    heading: "Total Posts",
    icon: FileSpreadsheet,
    count: 20,
    subhead: "All content",
    // css: "border-2 round-sm border-slate-200 hover:border-slate-300 bg-[#FAFCFD] text-slate-600",
  },
  {
    heading: "Pending Posts",
    icon: Clock,
    count: 6,
    subhead: "Awaiting review",
    // css: "border-2 round-sm border-amber-200 hover:border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700 ",
  },
  {
    heading: "Approved Posts",
    icon: CheckCircle,
    count: 7,
    subhead: "Published content",
    // css: "border-2 round-sm border-green-200 hover:border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700",
  },
  {
    heading: "Rejected Posts",
    icon: CircleX,
    count: 7,
    subhead: "Declined content",
    // css: "border-2 round-sm border-red-200 hover:border-red-300 bg-gradient-to-br from-red-50 to-rose-50 text-red-700",
  },
  {
    heading: "Total Comments",
    icon: MessageSquare,
    count: 188,
    subhead: "User interactions",
    // css: "border-2 round-sm border-blue-200 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700",
  },
  {
    heading: "Engagement",
    icon: Sparkles,
    count: "",
    subhead: "Likes & shares",
    // css: "border-2 round-sm border-purple-200 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-violet-50 text-purple-700",
  },
];

export const posts_blogs = [];

export type Status = "All Status" | "Pending" | "Approved" | "Rejected";
export const status: Status[] = [
  "All Status",
  "Pending",
  "Approved",
  "Rejected",
];

type FilterData =
  | "Newest First"
  | "Oldest First"
  | "User Name"
  | "Status"
  | "Most Comments";
export const filterData: FilterData[] = [
  "Newest First",
  "Oldest First",
  "User Name",
  "Status",
  "Most Comments",
];

type AllPostProp = {
  avatar: string;
  user: string;
  time: string;
  status: string;
  postTitle: string;
  url: string;
  commentNo: number;
  pending: number;
  approved: number;
  rejected: number;
};


export const allPostsData:AllPostProp[] = [
  {
    avatar: "",
    user: "user_4",
    time: "2 hours",
    status: "rejected",
    postTitle:
      "Sample post content 4. This is a test post with detailed information for the posts tab.",
    url: "https://wallpaperaccess.com/full/974541.jpg",
    commentNo: 11,
    pending: 3,
    approved: 13,
    rejected: 0,
  },
  {
    avatar: "https://images.pexels.com/photos/1013000/pexels-photo-1013000.jpeg?auto=compress&cs=tinysrgb&w=100",
    user: "user_5",
    time: "3 hours",
    status: "approved",
    postTitle:
      "Sample post content 5. This is a test post with detailed information for the posts tab.",
    url: "https://images.pexels.com/photos/32327754/pexels-photo-32327754/free-photo-of-modern-urban-skyline-with-high-rise-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    commentNo: 6,
    pending: 2,
    approved: 13,
    rejected: 0,
  },
  {
    avatar:
      "https://images.pexels.com/photos/1004000/pexels-photo-1004000.jpeg?auto=compress&cs=tinysrgb&w=100",
    user: "user_8",
    time: "3 hours",
    status: "pending",
    postTitle:
      "Sample post content 8. This is a test post with detailed information for the posts tab.",
    url: "https://images.pexels.com/photos/1216000/pexels-photo-1216000.jpeg?auto=compress&cs=tinysrgb&w=400",
    commentNo: 19,
    pending: 4,
    approved: 0,
    rejected: 0,
  },
];
