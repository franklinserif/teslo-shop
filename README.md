# Teslo-Shop

Teslo-Shop is an e-commerce platform inspired by the Tesla website. It allows users to purchase accessories and other Tesla-related products. This project uses Next.js as a frontend framework and MongoDB for data storage.

## Prerequisites

- Node.js v16
- Docker

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Features

- Browse and search for Tesla accessories
- Add items to shopping cart
- Secure user authentication and registration
- Order history tracking
- Responsive design for mobile devices

## Installation

To get started with Teslo-Shop, follow these steps:

1. Ensure you have installed the required versions of Node.js (v16).

2. Clone the repository:

   ```bash
   git clone https://github.com/franklinserif/teslo-shop.git
   ```

3. Change enviroment variables:
   rename .env.example to .env

   for production:
   and paste the url mongo connection to MONGO_URL

   ```bash
   MONGO_URL=mongodb:<your mongo db connection>
   ```

   for local development use

   ```bash
   MONGO_URL=mongodb://localhost:27017/teslodb
   ```

   only for development:

   ```bash
   docker-compose up -d
   ```

   this will setup the local database in your docker container

4. Change directory into the project folder:

   ```bash
   cd teslo-shop
   ```

5. Install dependencies using npm or yarn:

   ```bash
   yarn install
   ```

6. Set up environment variables for your MongoDB instance in .env.local file:

   ```bash
   MONGODB_URI=<your_mongodb_connection_string_here>
   ```

7. Start development server:

   ```bash
       yarn dev
   ```

Open <http://localhost:3000> with your browser to see the result.

## Usage

Visit <http://localhost:3000> in your web browser to start browsing available Tesla products on Teslo-Shop.

To create an account or log in, click on "Account" at the top right corner of any page.

Add desired items to your shopping cart by clicking on "Add to Cart." To complete a purchase, proceed to checkout and enter your payment information.

## Contributing

Contributions to Teslo-Shop are welcome! To contribute, please:

1. Fork the repository
2. Create a new branch for your feature or bugfix (git checkout -b my-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-feature)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
