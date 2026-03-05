---
title: DealDrop – Price Tracking App
description: A full stack price tracking application that monitors product prices from Amazon and other e-commerce platforms and sends alerts on price drops.
category: project
date: 2025-02-28
tags:
  - nextjs
  - full-stack
  - prisma
  - neon-db
  - tailwind
  - web-scraping
  - automation
links:
  - type: github
    url: https://github.com/anuragg001/DealDrop
---

## The Problem

We’ve all done this.

You find a product.  
You wait for the price to drop.  
You forget to check.  
Price drops.  
You miss it.

Or worse — you buy it… and the price drops the next day.

That’s annoying.

So I built something to remove that problem completely.

---

## What This Does

DealDrop lets you:

- Paste a product URL from **Amazon, Flipkart, and other platforms**
- Automatically track the product price
- Monitor changes over time
- Get notified when the price drops
- View your tracked products in one clean dashboard
- Remove products anytime

No manual checking.  
No tab hoarding.  
No guesswork.

Just track → wait → get alerted.

---

## 🖼️ Dashboard Preview

![DealDrop Dashboard](/priceDropss.png)

---

## How It Works

You sign in.

Paste a product link.

The system extracts product details like:
- Title
- Current price
- Image
- Source site

It stores the data in the database and keeps monitoring price changes in the background.

If a price drop happens — you get notified.

Everything runs automatically once you add a product.

---

## Under the Hood

Built using the same full stack architecture:

- **Next.js** handling frontend + backend
- **Neon DB** for serverless PostgreSQL
- **Prisma** for schema and data management
- **Tailwind CSS** for clean UI styling
- Background automation for price tracking
- Scraping logic for extracting product data

Authentication, database design, async workflows — all structured like a proper SaaS app.

This is not just a UI clone.  
It actually tracks real data.

---

## Why I Built It

Because small problems compound.

Missing price drops = wasted money.

And I wanted to build something practical —  
something people can actually use.

This project focuses on:
- Automation
- Background processing
- Data tracking
- Real-world scraping challenges
- Clean dashboard UI

---

## Current Status

Fully functional core system:
- Add product
- Track price
- Monitor dashboard
- Remove tracking

Future improvements:
- Email / push notifications
- Historical price charts
- Smarter drop prediction logic

Built to be useful.  
Built to scale.