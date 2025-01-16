# Storage Demo

This project demonstrates how to use React’s `useSyncExternalStore` hook with both sessionStorage and localStorage. It includes two primary examples:

- ThemeController: Toggles light/dark mode and persists the chosen mode in localStorage
- Accounts: Selects an account type (Checking, Savings, or Retirement) and persists the chosen account in sessionStorage.

## Purpose

- Showcase `useSyncExternalStore`: This hook provides an official way to integrate external store subscriptions with React's concurrent rendering features.
- Local and Session Storage: Demonstrate how to use storage APIs for persisting user preferences and data across browser sessions.
- Reusable Custom Hooks: Illustrate how to build reusable hooks (`useLocalStorage` and `useSessionStorage`) for any data you want to store.

## Project Structure

```
src
 ┣ components
 ┃   ┣ Accounts.tsx        // Demonstrates sessionStorage usage
 ┃   ┗ ThemeController.tsx  // Demonstrates localStorage usage
 ┣ shared
 ┃   ┣ hooks
 ┃   ┃   ┣ useLocalStorage.tsx    // Custom hook for localStorage
 ┃   ┃   ┗ useSessionStorage.tsx  // Custom hook for sessionStorage
 ┃   ┗ styles
 ┃       ┣ CustomThemeProvider.tsx
 ┃       ┗ ...
 ┣ App.tsx
 ┣ main.tsx
 ┗ ...
```

## Running the App
Prerequisites

- Node.js (version 22.11)
- pnpm installed

Installation & Launch

1. Clone the repository: git clone https://github.com/your-username/storage-demo.git

2. Navigate into the project folder: `cd storage-demo`

3. Install dependencies: `pnpm i`

4. Start the development server: `pnpm dev`

5. Open your browser and go to http://localhost:3000 (or the port your dev server indicates).

Key Dependencies

- React (18+)
- React DOM (18+)
- TypeScript
- Material UI (MUI) (v5+)
- @emotion/react / @emotion/styled (required by MUI)
- ESNext features (like optional chaining, etc.)

Note: The exact versions will be in the project’s `package.json`.

## How It Works

`useLocalStorage` and `useSessionStorage` are custom hooks that:
- Leverage `useSyncExternalStore` for a consistent subscription-based approach.
- Store and retrieve data from localStorage or sessionStorage.
- Automatically (reactively) update subscribed components on storage changes (using the `storage` event).
- ThemeController uses `useLocalStorage` to persist the user’s theme preference (light or dark) across reloads and tabs.
- Accounts uses `useSessionStorage` to remember the selected account across page reloads but resets if the browser is closed or if the user opens a different tab.

## Contributing

- Fork the repository.
- Create a new branch with your feature or fix.
- Open a pull request once your work is ready for review.

## License

This project is open source and available under the MIT License. Feel free to use and adapt it for your own purposes.

Enjoy experimenting with `useSyncExternalStore` in this Storage Demo! If you have questions or run into issues, feel free to open an issue or contribute a pull request. Happy coding! "