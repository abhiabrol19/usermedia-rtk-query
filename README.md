# User Management and Album Application

## Overview

The User Management and Album Application is a React and Redux-based app that allows users to manage a list of users, their albums, and photos. This application provides a user-friendly interface for creating, viewing, and deleting users, managing their albums, and adding or removing photos within those albums. The app showcases dynamic data fetching, state management, and interactive UI components.

## Key Technologies

- **React**
- **Redux Toolkit**: Simplifies state management by providing tools to create slices, reducers, and manage complex state.
- **React-Redux**: Connects React components to the Redux store, allowing components to access and modify application state.
- **RTK Query**: A powerful data fetching and caching solution integrated within Redux Toolkit, used for fetching, adding, and removing albums and photos.
- **Bulma CSS**
- **React Icons**
- **Faker.js**
- **JavaScript (ES6+)**

## Project Structure

### Main Entry Point

- **`index.js`**: The main entry point where the React app is initialized and rendered. The application is wrapped in the Redux `Provider` to connect it with the store.

### Core Components

- **App Component**:
  - Serves as the main layout container for the application.
  - Displays the `UsersList` component, which manages the core user and album interactions.

- **UsersList Component**:
  - Fetches and displays a list of users from the server.
  - Allows adding new users and handles errors gracefully.
  - Displays each user with an expandable panel showing their albums.

- **UsersListItem Component**:
  - Represents individual users in the list.
  - Allows users to be deleted with error handling and loading states.
  - Integrates the `AlbumList` component to show user-specific albums.

- **AlbumList Component**:
  - Fetches and displays albums for a specific user.
  - Allows adding new albums and handles loading and error states.
  - Displays albums with an expandable view for showing photos.

- **AlbumListItem Component**:
  - Manages individual albums, including deletion and photo display.
  - Allows users to delete albums and displays photos within each album.

- **PhotosList Component**:
  - Fetches and displays photos for a selected album.
  - Allows adding new photos and shows loading and error handling.
  - Renders photos in a grid layout with options to remove photos.

- **PhotosListItem Component**:
  - Represents individual photos within an album.
  - Provides the functionality to delete photos using RTK Query mutations.

- **Button Component**:
  - A reusable button component styled using Bulma CSS classes.
  - Supports different styles such as primary, secondary, success, warning, and danger.
  - Manages loading states and error conditions visually.

- **ExpandablePanel Component**:
  - Provides an expandable view with a toggle feature.
  - Used throughout the application for expanding and collapsing content sections.

- **Skeleton Component**:
  - Used for displaying loading placeholders while data is being fetched.
  - Creates a shimmer effect to improve the user experience during loading states.

### State Management

- **Redux Store**:
  - Centralized state management using Redux Toolkit.
  - Slices are used to manage user and album data with RTK Query for asynchronous operations.

- **Slices**:
  - **User Slice**:
    - Manages user-related state, including fetching, adding, and deleting users.
  - **Album Slice**:
    - Manages album-related state, including fetching, adding, and removing albums.
  - **Photo Slice**:
    - Handles photo-related state, including fetching, adding, and deleting photos.

- **RTK Query**:
  - Provides a streamlined approach to fetching data from the backend, managing caching, and handling data mutations efficiently.

### Key Features

- **User Management**:
  - View, add, and delete users.
  - Dynamically updates the user list upon adding or deleting a user.

- **Album Management**:
  - View albums associated with a user.
  - Add new albums with generated titles using Faker.js.
  - Remove albums with real-time updates.

- **Photo Management**:
  - View photos within an album.
  - Add new photos using random images generated with Faker.js.
  - Delete photos and update the list in real time.

- **Error Handling and Loading States**:
  - Displays skeleton loaders during data fetching.
  - Error messages are shown when operations fail, ensuring a smooth user experience.

## How the Application Works

1. **Application Initialization**:
   - The app loads with a list of users and options to add new users.

2. **User Actions**:
   - Users can be added or removed, with the list dynamically updating.
   - Each user can be expanded to show their albums.

3. **Album Actions**:
   - Albums can be added for each user, with options to view and manage photos.
   - Users can delete albums, which automatically updates the displayed data.

4. **Photo Actions**:
   - Photos within albums can be viewed, added, or removed.
   - The app manages photo state using RTK Query to ensure data consistency.

### Conclusion

The User Management and Album Application provides a robust and interactive platform for managing users, their albums, and photos. By leveraging React, Redux Toolkit, and RTK Query, it offers a modern approach to state management, data fetching, and user interaction, making it an excellent example of building complex web applications with React.