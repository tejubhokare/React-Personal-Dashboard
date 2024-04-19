

# Personal Dashboard Application

This React-based application serves as a personal dashboard where users can view their profile information, check the current weather, and manage a to-do list.

## Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

## Getting Started

To run the application locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. By default, the application uses a predefined `.env.development` file for the OpenWeather API configuration. If you want to use your own API key, create a `.env.local` file in the root directory of your project and add the following lines, replacing the placeholders with your API key and URL for the OpenWeather API:

```plaintext
REACT_APP_API_KEY=YOUR_API_KEY_HERE
REACT_APP_API_URL=YOUR_API_URL_HERE
```

4. Run `npm install` to install the dependencies.
5. After the installation is complete, run `npm start` to start the development server.
6. Open your browser and go to `http://localhost:3000` to view the application.

## Testing

To run the tests for this application:

```
npm test
```

## Folder Structure

```
src/
|-- components/           # Functional reusable components for the application
|-- hooks/                # Custom hooks
|-- styles/               # CSS for components
|-- redux/                # Redux folder containing actions, reducers, and store
```

## Deployment

This application is deployed on the Vercel platform and can be accessed via the following link: [Personal Dashboard](https://react-personal-dashboard-plk0r9pdz-tejubhokares-projects.vercel.app/).

---
