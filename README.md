# CODEWAY-TASK-02

# Inspiration App

## Overview

The Inspiration App is a simple mobile application built using React Native. The app's purpose is to display a new inspiring quote or message each day, allow users to share their favorite quotes, and provide a space to save and view their favorite quotes.

## Features

1. **Home Screen:**
   - Displays a random inspiring quote or message of the day.
   - Provides a "Share" button for users to share the current quote with others via messaging or social media.

2. **Favorite Quotes:**
   - Users can save their favorite quotes.
   - The "Favorites" screen displays a list of saved favorite quotes.

## Project Structure

- **App.js:** Entry point for the React Native app, setting up navigation between screens.
- **HomeScreen.js:** Represents the home screen, displaying the daily quote and a "Share" button.
- **FavoritesScreen.js:** Represents the favorites screen, displaying saved favorite quotes.
- **QuoteService.js:** Contains a placeholder function (`getDailyQuote`) for fetching a new quote each day.

## Setup

1. Install Node.js and npm.
2. Install React Native CLI: `npm install -g react-native-cli`.
3. Create a new React Native project: `npx react-native init InspirationApp`.
4. Install required packages: `npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated`.
5. Navigate to the project directory: `cd InspirationApp`.

## Running the App

- For Android: `npx react-native run-android`.
- For iOS: `npx react-native run-ios`.

## License

This project is licensed under the [MIT License](LICENSE).

## Notes

- This is a basic example and serves as a starting point.
- In a real-world scenario, you would need to implement a backend for fetching and storing quotes, handle error cases, and add additional features based on your app's requirements.

Feel free to explore, customize, and enhance the app according to your needs.
