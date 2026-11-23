# Overlink

Overlink is an Uplink-inspired, browser-based hacking simulation game with modernized quality-of-life features. Take jobs, route a connection across the map, crack your way into systems, copy or delete files, and disconnect before you are traced.

**Play it: https://overlink-phi.vercel.app** (select the `demo` user and press Proceed)

The backend runs on a free hosting tier that sleeps when idle, so the first login can take up to a minute.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Frontend | React 19, React Router 7, Jotai, Sass, Vite |
| Backend | Node.js, Express 5, SQLite (better-sqlite3) |
| Hosting | Vercel (frontend), Render (backend) |

## How It Works

* The backend serves missions, map nodes and file-system data from SQLite, and records which missions each user has accepted and completed. It seeds its own data on startup.
* The frontend keeps game state (money, software, hard drive, saved logins, trace progress) in Jotai atoms that persist to `localStorage`, so a refresh does not lose your session.
* In-game tools (Password Cracker, Copier, Deleter, Trace Monitor) are floating widgets. The Copier and Deleter are picked up and then clicked onto a file.
* A trace timer starts when you connect to a monitored system. Its speed depends on the system's security profile, and reaching 100% disconnects you.

## Running Locally

Requires Node.js 20 or newer.

To start the backend:
  * Navigate to the `backend` folder
  * Type `npm i`
  * Type `npm run dev`

To start the frontend:
  * Navigate to the `frontend` folder
  * Type `npm i`
  * Type `npm run dev`

The frontend expects the API at `http://localhost:5000/api`. Set `VITE_API_BASE` to point it elsewhere.

## Gameplay
### Missions
<img width="1312" height="763" alt="image" src="https://github.com/user-attachments/assets/5853525a-ed57-4762-8a5c-cd751abb0067" />

The missions menu can be accessed in the top navigation menu. It contains a list of all available jobs for you to do. The more missions you successfully complete, the higher your skill rating will be. Higher paying missions require a higher skill level, but are more complex with a higher risk of detection.

### Map
<img width="1312" height="765" alt="image" src="https://github.com/user-attachments/assets/f810c160-67c0-4509-8952-5298a6df23e0" />

The map can also be accessed in the navigation menu. It displays all known devices available for you to connect to. Nodes with a dashed border are devices you have access to at least one account on, while a solid border indicates admin access. Green nodes represent devices that are involved in a mission you are currently on. Route your connection through more nodes in order to delay detection - but make sure to clear your logs!

### Login
<img width="1312" height="762" alt="image" src="https://github.com/user-attachments/assets/9bd5570c-34bc-469a-8854-6dfc25b042c1" />

Upon connecting to an endpoint that you do not yet have access to, you will be presented with a login screen. You will need to find the correct username and password in order to access the system.

Use the Password Cracker (and additional software for more complex systems) to obtain credentials and gain access to the system. Launch it from the tools menu in the bottom left, then click on the `Code` input field to start cracking.

### Shop
Mission payments can be spent in the shop (bottom menu) on new software and upgrades, such as a faster Password Cracker or an Undeleter.

### Terminal
<img width="343" alt="image" src="https://github.com/user-attachments/assets/5202e880-d694-4307-8bee-f017ba3d7892" />

Once a connection is established, you will be presented with a list of folders that currently exist on that device. Click on a folder name to see the files that it contains.

<img width="398" height="466" alt="image" src="https://github.com/user-attachments/assets/5862c633-2f3d-4dfe-b004-6536fb95a914" />

You will then be able to view and interact with (copy, delete, etc) the files in the folder you selected. 

## Planned Features
Some of the upcoming features currently in development include (but aren't limited to):
* Tutorial mission to illustrate gameplay for first time users
* More missions and mission types
* Continue to fix bugs, address edge cases, and polish existing game mechanics
