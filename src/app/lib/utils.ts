import mongoose from "mongoose";

interface connectionInfo {
  isconnected?: Boolean;
}
export const connectToDB = async () => {
  const connction: connectionInfo = {};
  try {
    if (connction.isconnected) return;
    const db = await mongoose.connect("mongodb://localhost:27017/test");
    connction.isconnected =
      db.connections && db.connections[0] && db.connections[0].readyState === 1;
  } catch (e: any) {
    throw new Error("something wrong in db connection", e);
  }
};
