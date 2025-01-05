## Table of Contents

- [Installation](#installation)
- [Running the App in Development](#running-the-app-in-development)
- [Building the App for Production](#building-the-app-for-production)
- [Deploying the App](#deploying-the-app)
- [Running the Production Build Locally](#running-the-production-build-locally)
- [Troubleshooting](#troubleshooting)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/vehicle-reminder-frontend.git
Navigate to the project folder:

bash
Copy code
cd vehicle-reminder-frontend
Install the dependencies:

bash
Copy code
npm install
Running the App in Development
To run the app in development mode, use the following command:

bash
Copy code
npm start
This will start the React development server and open the app in your default browser at http://localhost:3000. You can now make changes to the app, and they will be reflected in real time.

By default, the app will be accessible only on localhost. To make the app accessible on your VM's public IP (e.g., Azure VM), ensure that the start script in package.json has the following:

json
Copy code
"start": "react-scripts start --host 0.0.0.0"
Building the App for Production
To create an optimized production build of the app, run the following command:

bash
Copy code
npm run build
This will create a build/ folder in the root of your project. The build/ folder contains the optimized static files for production.

Contents of the build/ Folder:
index.html: The main HTML file for the app.
static/: A folder containing optimized JavaScript, CSS, and media files.
css/: Optimized CSS files.
js/: Optimized JavaScript files.
media/: Any media assets (images, fonts, etc.).
asset-manifest.json: A manifest file for the assets.
favicon.ico: Your app's favicon.
Important Notes:
The build will be optimized for production with minimized files.
The app will be ready for deployment once the build is complete.
Deploying the App
To deploy the app, you need to serve the files from the build/ directory.

You can use a web server like Nginx, Apache, or Node.js with serve to serve the static files.

Using Nginx (Optional)
If you want to use Nginx to serve the app, follow these steps:

Install Nginx:

bash
Copy code
sudo apt install nginx
Configure Nginx to serve the build/ folder:

Edit the Nginx config file (/etc/nginx/sites-available/default or create a new site configuration):

bash
Copy code
sudo nano /etc/nginx/sites-available/default
Add the following:

nginx
Copy code
server {
  listen 80;
  server_name your-domain.com;

  location / {
    root /path/to/vehicle-reminder-frontend/build;
    try_files $uri /index.html;
  }
}
Restart Nginx:

bash
Copy code
sudo systemctl restart nginx
Now, your app will be served on your VM's public IP or domain.

Running the Production Build Locally
To run the production build locally before deploying, you can use a simple static server. First, install the serve package globally:

bash
Copy code
npm install -g serve
Then, run the following command:

bash
Copy code
serve -s build
This will start serving the production build locally at http://localhost:5000.

Troubleshooting
Issue 1: Port 80 Permission Issues
If you're trying to run the app on port 80 and encountering permission errors, you have a few options:

Use a port above 1024 (e.g., 3000 or 8080).
Set up a reverse proxy using Nginx to forward traffic from port 80 to port 3000.
Run the app with sudo (not recommended for development).
Issue 2: App Not Updating in Development
If the app is not reflecting changes in development, try restarting the development server:

bash
Copy code
npm start
Issue 3: 404 Errors After Building
If you see 404 errors when accessing assets after building, ensure that your paths are correctly set and the assets are included in the static/ folder in the build/ directory.

