# Music Store Web API - Final Node.js Project

A modular Node.js REST API built with Express, implementing ES Modules, structured Data Access Layers (DAL), integrated custom request logging, and external web data enrichment via the MusicBrainz API.

## Project Architecture & Structure

The codebase adheres strictly to a separation of concerns pattern across a modular folder design:

- `config/` - Houses application lifecycle configurations.
- `controllers/` - Coordinates incoming client requests, manages query parameters, and surfaces responses.
- `DAL/` (Data Access Layer) - Orchestrates localized file system reads or isolated data storage arrays.
- `routes/` - Maps incoming application route paths directly to specific controller routines.
- `services/` - Handles external networking requests (`async/await`) to the public MusicBrainz platform.
- `utils/` - Utility mechanisms including the custom request tracker logger.

## Setup & Running Instructions

### Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed locally.

### Installation
1. Extract your project workspace file framework.
2. Open your terminal at the root path of the project folder (`Final_Project`).
3. Run the following command to download dependencies declared in `package.json`:
   ```bash
   npm install
   ```

### Execution
To spin up your local environment instance, run:
```bash
node server.js
```
The application will launch and monitor port allocations locally (default: `http://localhost:3000`).

## API Endpoint Blueprint (The 3 Required GET Routes)

### 1. Retrieve All Items / Filter Albums
* **Endpoint:** `GET /api/items`
* **Query Parameters (Optional):**
  * `minPrice` (Number) - Minimum dollar limit filter
  * `maxPrice` (Number) - Maximum dollar limit filter
  * `genre` (String) - Genre array sub-matching (e.g., `power metal`, `hip-hop`)
* **Response Status:** `200 OK`

### 2. Fetch Detailed Album By ID
* **Endpoint:** `GET /api/items/:id`
* **Path Variables:** `id` (e.g., `3001`, `3002`, `3003`)
* **Response Status:** `200 OK` on successful retrieval, `404 Not Found` if missing.

### 3. Fetch A Random Music Fact
* **Endpoint:** `GET /api/items/fact/random`
* **Response Status:** `200 OK` (Pulls random metadata records live via external API loops).
