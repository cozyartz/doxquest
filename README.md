# DoxQuest

**DoxQuest** is a real-world, AI-powered treasure hunt platform developed by **Cozyartz Media Group**. It blends immersive storytelling, intricate puzzles, and GPS-based discovery into a modular, scalable experience. Designed for creators and adventurers, DoxQuest enables the launch of interactive quests powered by GPT-generated lore and clues.

## Features

- 🔍 **AI-Generated Clues & Lore**  
  Uses GPT to dynamically generate riddles, narratives, and multi-layered challenges that adapt to each quest.

- 🗺️ **Location-Based Gameplay**  
  Create and deploy hunts tied to real-world coordinates or virtual geocached locations.

- 🧩 **Modular Puzzle System**  
  Craft scalable, multi-stage quests with configurable difficulty and branching logic.

- 🧠 **Customizable Quest Logic**  
  Define and manage quests through structured JSON or Markdown files for fast iteration.

- 💰 **Monetization-Ready**  
  Supports freemium models, clue unlocks, memberships, and digital collectibles.

## Tech Stack

- **Frontend:** React + Tailwind CSS  
- **Backend:** Cloudflare Workers (or Node.js variant)  
- **AI Integration:** OpenAI GPT or Workers AI  
- **Storage:** Cloudflare D1 or KV for session, clue, and user state

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/cozyartz/doxquest.git
cd doxquest
pnpm install
pnpm dev
Roadmap
 Player account system with save/load progress

 Global and regional quests

 Dynamic difficulty scaling based on solve history

 Community-created quest builder

 Optional on-chain rewards or badges

License
MIT © Cozyartz Media Group
