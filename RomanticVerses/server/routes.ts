import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static content only, no routes needed
  const httpServer = createServer(app);
  return httpServer;
}
