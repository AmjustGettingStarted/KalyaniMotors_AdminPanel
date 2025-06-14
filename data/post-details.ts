type comment = "Newest" | "Oldest" | "User Name" | "Status";
export const commentFilter: comment[] = [
  "Newest",
  "Oldest",
  "User Name",
  "Status",
];

export const comment_count = [
  { lable: "Total", count: 18 },
  { lable: "Pending", count: 10 },
  { lable: "Approved", count: 3 },
  { lable: "Rejected", count: 5 },
];

export const all_users = [
  {
    avatar:
      "https://images.pexels.com/photos/1004000/pexels-photo-1004000.jpeg?auto=compress&cs=tinysrgb&w=100",
    name: "user9",
    status: "Approved",
    id: 9,
    mail: "user9@example.com",
    joined: "28 days",
    posts: 9,
    last_active: 4,
  },
  {
    avatar:
      "https://images.pexels.com/photos/1006000/pexels-photo-1006000.jpeg?auto=compress&cs=tinysrgb&w=100",
    name: "user11",
    status: "Rejected",
    id: 11,
    mail: "user11@example.com",
    joined: "1 month",
    posts: 4,
    last_active: 6,
  },
  {
    avatar:
      "https://images.pexels.com/photos/1011000/pexels-photo-1011000.jpeg?auto=compress&cs=tinysrgb&w=100",
    name: "user16",
    status: "Pending",
    id: 16,
    mail: "user16@example.com",
    joined: "3 months",
    posts: 15,
    last_active: 11,
  },
  {
    avatar: "",
    name: "jeff",
    status: "Approved",
    id: 1,
    mail: "jeff@example.com",
    joined: "1 days",
    posts: 100,
    last_active: 1,
  },
];
