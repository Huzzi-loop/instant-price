# Project Title

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)

## Introduction

Instant Price is a realtime crypto currency data display website which shows the realtime price and other information of 5 crypto currencies .

## Installation

- Follow the steps written down below for installation .

### Prerequisites

prerequisites for Instant Price

- Node.js
- npm or yarn
- MongoDB

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Huzzi-loop/instant-price.git
   ```
2. Navigate to the project directory:
   ```sh
   cd instant-price
   ```
3. Install dependencies:
   ```sh
   cd instant-price-backend
   npm install
   ```
   and
   ```sh
   cd instant-price-frontend
   npm install
   ```
4. Create env file:
   ```sh
   cd instant-price-backend
   touch .env
   echo MONGODB_URL="YOUR_MONGO_DB_URL" '\n'MONGO_COLLECTION="YOUR_DB_COLLECTION_NAME" '\n'COINGECKO_API_KEY="YOUR_COINGECKO_API_KEY" > .env
   ```
   ```sh
   cd instant-price-frontend
   touch .env
   echo VITE_API_URL="http://localhost:3000" > .env
   ```

### Running the Project

```sh
cd instant-price-backend
npm run dev
cd ..
cd instant-price-frontend
npm run dev
```
