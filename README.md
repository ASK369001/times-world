# Countries App

This project is a React application featuring a responsive login page and home page designed based on a provided mockup. It includes form validation, a slider component, country listing with API integration, and continent-based filtering. The application uses React functional components, hooks, Redux Toolkit, and React-Bootstrap.

## Features

- **Responsive Design**
- **Login Page**:
  - Form validation with specific password requirements.
  - Redirects to the home page upon successful submission.
- **Home Page**:
  - Slider component with next/previous icons and pagination dots.
  - Country listing with flags, names, and regions using the REST Countries API.
  - "Load More" pagination for efficient data handling.
  - Continent-based filters for country listings.
- **State Management**: Powered by Redux Toolkit.

## Technologies Used

- React.js
- Redux Toolkit
- React-Bootstrap
- React Router

## API Integration

This project fetches country data using the REST Countries API:

```
https://restcountries.com/v2/all?fields=name,region,flag
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn start
   ```

## Folder Structure

```
src/
|-- components/             # Reusable components (e.g., carditem, carousel...)
|-- assets/                 # assets
|-- reducers/               # State management (slices, store)
|-- views/                  # State management (Login Page, Home Page)
|-- App.js                  # Main application component
|-- index.js                # Application entry point
|-- store.js                # Global store
|-- ProtectedRoute.jsx      # Protect route from unauthorized access
```

## Validation Rules

- Password must:
  - Be at least 8 characters long.
  - Contain at least one capital letter.
  - Contain at least one number.
  - Contain at least one symbol.

## State Management

Redux Toolkit manages application state, including country data, filter selections, and pagination.

## Deployment

To deploy the application:

1. Build the project:
   ```bash
   yarn build
   ```

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License.

