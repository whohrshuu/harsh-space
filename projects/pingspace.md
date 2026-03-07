---
title: PingSpace – Private Self-Destructing Chat Rooms
description: A realtime chat app where temporary rooms expire automatically and messages disappear.
category: project
date: 2026-03-05
tags:
  - nextjs
  - full-stack
  - realtime
  - upstash-redis
  - upstash-realtime
  - react-query
  - elysia
  - tailwind
---


🔗 **Live Demo:**  
https://pingspace-ten.vercel.app/

💻 **GitHub Repository:**  
https://github.com/anuragg001/pingspace

---

### 

It started with a very small thought.

You know those moments when you just want to quickly share something with a friend…

A link.  
A password.  
A quick message.

But opening WhatsApp, Discord, Slack, Telegram… all of them feel **too heavy** for something that should just disappear after a while.

And sometimes you actually **don’t want the message to stay forever**.

Just send it… read it… done.

No history.  
No clutter.

So I thought…

### 

**What if chats worked more like a temporary room?**

You create a room.

Your friend joins.

You both talk.

And after some time — **poof 💨 — everything disappears.**

That idea became **PingSpace**.

---

### 

PingSpace is basically a **temporary chat room system**.

You open the site, click **Create Secure Room**, and boom — a private room is created.

You share the link with someone.

They join.

And now both of you can chat in realtime.

But here’s the interesting part.

The room has a **self-destruct timer**.

When the timer finishes, the room and all messages automatically disappear.

No database history.  
No message archive.  
Just a short conversation that vanishes.

---




![PingSpace Lobby](/pingspaceLobby.png)

---

### 

The flow is actually very simple from the user side.

You open the lobby.

PingSpace automatically generates a **random username** and stores it locally in your browser.

Then when you click **Create Secure Room**, the backend creates a room and gives it a unique `roomId`.

You get redirected to:


Now when someone opens that link, a few checks happen:

- does the room exist  
- is the room already full  
- is the user allowed to enter  

If everything is valid, the user joins the room and can start chatting.

PingSpace intentionally keeps the room **small and private** — maximum **2 people**.

Basically like a quick private tunnel.

---

### 

Inside the room, a few things happen in the background.

Messages are stored in **Redis**.

Each room has its own **TTL (time to live)**.

So when the room expires, Redis automatically removes the data.

Every new message triggers a realtime event so the other user immediately sees it.

No refresh needed.

Everything just appears instantly.

---



![PingSpace Room](/pingspaceRoom.png)

---

### 

Under the hood, the stack is pretty interesting.

The frontend is built with **Next.js (App Router)** and **React 19**.

For UI I used **Tailwind CSS**.

Data fetching and syncing is handled with **TanStack React Query**.

Realtime communication runs through **Upstash Realtime**.

Room metadata and messages live in **Upstash Redis**.

The backend APIs are written using **Elysia**, mounted inside the Next.js API routes.

So technically the whole system runs inside **one Next.js project**, which keeps things neat.

---

### 

Instead of traditional login, PingSpace uses a small trick.

When someone enters a room for the first time, the server generates a **room token** and stores it in an HTTP-only cookie.

That token is also stored inside the room metadata.

Every request checks that token to make sure the user is actually part of the room.

So there’s no signup, no accounts… but the room is still protected.

---

### 

Rooms also have a **self-destruct lifecycle**.

Each room gets a TTL of **10 minutes** when created.

Two things can happen:

Either the timer expires automatically.

Or one of the users presses **DESTROY NOW**.

When that happens, a realtime event is broadcast to everyone in the room and both users get redirected back to the lobby.

Room gone.

Messages gone.

Clean slate.

---

### 

This project was mostly an exploration of:

- realtime systems
- ephemeral data design
- TTL-based storage
- lightweight authentication
- event-driven UI updates

Instead of building a huge messaging app, I wanted something **small but technically interesting**.

Something that feels almost like a **temporary communication tunnel**.

---

### 

Right now PingSpace supports:

- creating rooms
- joining via link
- realtime messaging
- self-destruct countdown
- manual room destruction
- automatic expiry

And honestly… it’s already pretty fun to use.

But there are a few ideas I might add later.

Things like:

- message delivery indicators  
- encryption improvements  
- optional multi-room dashboard  
- maybe some fun room analytics  

But the core idea will always stay the same.

**Quick room. Quick chat. Everything disappears.**