# PowerZone Fitness

Welcome to PowerZone Fitness! PowerZone Fitness is a dynamic gym management application built using React, Firebase, Leaflet, Google Fonts, and Font Awesome. This README serves as a guide to help you understand the project structure, functionalities, and how to set it up locally.

## Project Structure

- `public/`: This directory contains static assets like HTML files, images, and the `manifest.json`.
- `src/`: The main source code directory.
  - `assets/`: Contains fonts, icons, and other static resources.
  - `components/`: React components used throughout the application.
  - `config/`: Configuration files for Firebase or any other services used.
  - `pages/`: React components that represent individual pages/routes of the application.
  - `services/`: Contains files responsible for interacting with external services like Firebase.
  - `styles/`: CSS or SCSS files for styling the application.
  - `utils/`: Utility functions used across the application.
  - `App.js`: The main component where routing and global state management are usually configured.
  - `index.js`: Entry point of the application.

## Functionalities

1. **User Authentication**: Users can sign up, log in, and log out securely using Firebase authentication.
2. **Gym Management**: Manage gym membership, schedule classes, and track member attendance.
3. **Interactive Map**: Utilize Leaflet to display the gym location and nearby amenities.
4. **Customization**: Incorporate Google Fonts and Font Awesome for a visually appealing and customizable UI.
5. **Real-time Updates**: Firebase ensures real-time data synchronization, enabling instant updates across multiple devices.

## Setting Up Locally

1. **Clone the Repository**: 
    ```
    git clone <repository-url>
    ```
2. **Install Dependencies**:
    ```
    npm install
    ```
3. **Set Up Firebase**:
    - Create a Firebase project on the Firebase Console.
    - Obtain your Firebase configuration object.
    - Replace the Firebase configuration in the appropriate files (usually located in `src/config/firebase.js`).
4. **Run the Application**:
    ```
    npm start
    ```
5. **Open in Browser**:
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Contributing

Contributions to PowerZone Fitness are welcome! Feel free to fork the repository, make your changes, and submit a pull request.

## Support

If you encounter any issues or have questions, please open an issue in the repository, and we'll be happy to assist you.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
