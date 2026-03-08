# GitHub Developer Dashboard

A modern developer dashboard that visualizes GitHub profile data.
Search any GitHub username to view profile details, repository analytics, language distribution, and top starred repositories.

The project focuses on clean React architecture, API integration, and data visualization.

---

## Features

* Search any GitHub user
* View profile information
* Repository statistics
* Total stars across repositories
* Language distribution chart
* Top repositories by stars
* Scrollable repository list
* Debounced search to reduce API calls
* Responsive dashboard layout
* Loading skeleton UI

---

## Tech Stack

Frontend:

* React
* Vite
* TypeScript
* TailwindCSS

Data & Visualization:

* Axios
* Recharts

Utilities:

* Debounce for optimized API requests

---

## Project Structure

```
src
 ├ components
 │   ├ SearchBar
 │   ├ ProfileCard
 │   ├ StatsCards
 │   ├ LanguageChart
 │   ├ StarsChart
 │   ├ RepoList
 │   └ Skeleton
 │
 ├ pages
 │   └ Dashboard
 │
 ├ services
 │   └ githubApi
 │
 ├ utils
 │   └ debounce
```

The **Dashboard page acts as the data container**, fetching GitHub data and passing it down to presentational components.

---

## Getting Started

Clone the repository:

```
git clone https://github.com/aviraL27/github-dashboard.git
cd github-dashboard
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root.

```
VITE_GITHUB_TOKEN=your_github_token
```

GitHub authenticated requests increase the rate limit from **60 requests/hour to 5000 requests/hour**.

---

## Build

Create a production build:

```
npm run build
```

Preview production build locally:

```
npm run preview
```

