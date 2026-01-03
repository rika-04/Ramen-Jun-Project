import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingCategories = await storage.getCategories();
  if (existingCategories.length === 0) {
    const ramen = await storage.createCategory({ name: "Ramen", slug: "ramen" });
    const sides = await storage.createCategory({ name: "Sides", slug: "sides" });
    const drinks = await storage.createCategory({ name: "Drinks", slug: "drinks" });

    await storage.createMenuItem({
      categoryId: ramen.id,
      name: "Tonkotsu Ramen",
      description: "Rich pork broth, chashu, soft-boiled egg, green onions, wood ear mushrooms.",
      price: 1600,
      available: true
    });
    await storage.createMenuItem({
      categoryId: ramen.id,
      name: "Spicy Miso Ramen",
      description: "Spicy miso broth, ground pork, corn, bean sprouts, butter.",
      price: 1700,
      available: true
    });
    await storage.createMenuItem({
      categoryId: sides.id,
      name: "Gyoza",
      description: "Pan-fried pork and vegetable dumplings (6 pcs).",
      price: 800,
      available: true
    });
    await storage.createMenuItem({
      categoryId: sides.id,
      name: "Edamame",
      description: "Steamed soybeans with sea salt.",
      price: 600,
      available: true
    });
    await storage.createMenuItem({
      categoryId: drinks.id,
      name: "Green Tea",
      description: "Hot authentic Japanese sencha.",
      price: 400,
      available: true
    });
    await storage.createMenuItem({
      categoryId: drinks.id,
      name: "Sake Flight",
      description: "Tasting of 3 premium sakes.",
      price: 2200,
      available: true
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  seedDatabase().catch(console.error);

  app.get(api.categories.list.path, async (_req, res) => {
    const categories = await storage.getCategories();
    res.json(categories);
  });

  app.get(api.menuItems.list.path, async (_req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
