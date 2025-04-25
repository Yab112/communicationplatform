import { env } from "process";
import { createClient } from "redis";

// Create Redis client
const redisClient = createClient({
  username: env.REDIS_USER,
  password: env.REDIS_PASSWORD,
  socket: {
    host: env.REDIS_HOST,
    port: 10310,
    tls: true,
    reconnectStrategy: (retries) => Math.min(retries * 100, 5000),
  },
});

// Error handling
redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("ready", () => console.log("✅ Redis connected"));

(async () => {
  await redisClient.connect();
})();

// Graceful shutdown
process.on("SIGINT", async () => {
  await redisClient.quit();
  console.log("🔴 Redis connection closed");
});

// Export Redis client
export default redisClient;
