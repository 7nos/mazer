# KeshavSoft Dashboard - Mazer Customization Assessment

## Overview
This repository contains a customized version of the [Mazer](https://github.com/7nos/mazer) admin dashboard template, prepared for the Front-End Skill Assessment.
The objective was to transform the generic template into a branded, data-driven application for "KeshavSoft", focusing on UI/UX improvements and dynamic data binding.

https://github.com/7nos/mazer/blob/main/Screenshot%202025-12-31%20181515.png

## Key Features
- **Custom Branding**: App title and navigation rebranded to "KeshavSoft".
- **Royal Blue Theme**: Primary color updated to `#4361ee` for a premium, professional look.
- **Dynamic Data Binding**: Dashboard components (Stats, Active Projects, Recent Activity, Team Members) are populated dynamically from `src/data.json`.
- **New Component**: Added a "Team Members" card to the dashboard to display user data.
- **Layout Optimization**: Reorganized the dashboard layout to prioritize charts (moved Visitors Profile to main area).
- **Data Injection**: Utilizing Nunjucks and global window objects to inject external JSON data into the frontend.

## Change Log
1.  **Branding**:
    - Replaced all instances of "Mazer" with "KeshavSoft" in titles and sidebar.
    - Updated `vite.config.js` and `data.json` with the new app name.
2.  **Data Architecture**:
    - Identified existing JSON data handling.
    - Created `dataHandler.js` to simulate data fetching and rendering.
    - Injected `dashboardData` from `data.json` into the `window` object via `master.html`.
3.  **Data Binding**:
    - Replaced hardcoded "Latest Comments" table with dynamic **Active Projects** list.
    - Replaced hardcoded "Recent Messages" with dynamic **Recent Activity** timeline.
    - Connected Dashboard Stats to `data.json`.
4.  **UI/UX Enhancements**:
    - **Theme**: Changed primary color to Royal Blue (`#4361ee`) in `_variables.scss`.
    - **New Component**: Added "Team Members" table to the dashboard.
    - **Layout**:
    - **Layout**:
        - Removed sidebar column constraint to use full screen width.
        - Reorganized all components into a fluid, responsive grid.
        - Integrated "Recent Activity" and Profile Card into the main flow.
        - **Refined User Profile Card**: Updated the design to use a vertical, centered layout with larger typography and avatar (80px) to effectively utilize full-column space.

## Data Sources
The application uses mock data located in `src/data.json`, which simulates an API response.
- **Dashboard Stats**: Revenue, Customers, Projects, Tasks
- **Projects**: List of active projects with status and progress
- **Activity**: User activity log
- **Users**: Team members list

## Setup & Running
1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Customization Logic
- **`src/assets/scss/_variables.scss`**: Modified SCSS variables to apply the new color scheme.
- **`src/layouts/master.html`**: Injected `dashboardData` into `window.dashboardData` for client-side access.
- **`src/assets/js/dataHandler.js`**: Created a script to read `window.dashboardData` and hydrate html containers.
- **`src/index.html`**: adapted the layout to include new ID-bound containers for dynamic content.

## License
Based on Mazer (MIT License).
