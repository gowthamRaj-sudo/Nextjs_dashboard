import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: any) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const users = await User.find({ userName: { $regex: regex } });
    return users;
  } catch (e: any) {
    throw new Error("Failed to fetch users !", e);
  }
};
