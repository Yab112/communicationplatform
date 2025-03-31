import redisClient from "@/config/redis";

export const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export const storeOTP = async (email: string, otp: string) => {
  await redisClient.set(`otp:${email}`, otp, { EX: 600 });
};

export const verifyOTP = async (email: string, otp: string) => {
  const storedOTP = await redisClient.get(`otp:${email}`);
  return storedOTP === otp;
};
