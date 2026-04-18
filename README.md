# 🔍 GitHub Finder

A modern React application to search and explore GitHub users and their repositories. Built with clean architecture, custom hooks, and optimized API handling.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

<img width="1900" height="1660" alt="localhost_5173_profile_bradtraversy" src="https://github.com/user-attachments/assets/b880a7d0-bb9d-4368-8c42-44b8ff46ccbf" />


## ✨ Features

- 🔎 **Search GitHub Users** – Instant profile lookup with debounced input
- 👤 **User Profile Overview** – Avatar, bio, followers, following, and public repos
- 📁 **Repository List** – All public repositories fetched via GitHub API
- 🕒 **Recent Searches** – Last 5 searched users stored in localStorage (persists on refresh)
- 📄 **Repository Details Page** – View repo description, stars, language, and external link
- ⚡ **Optimized API Calls** – `Promise.all` for parallel user + repos fetching
- 🎣 **Custom Hooks** – `useGithub`, `useDebounce`
- 🎨 **Responsive UI** – Tailwind CSS with dark theme

## 🛠️ Tech Stack

| Category         | Technology                |
| ---------------- | ------------------------- |
| Frontend Library | React 19                  |
| Routing          | React Router DOM v6       |
| Styling          | Tailwind CSS              |
| Build Tool       | Vite                      |
| API              | GitHub REST API v3        |
| State Management | React Hooks + Context API |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akshay2403/github-finder.git
   cd github-finder
   ```
