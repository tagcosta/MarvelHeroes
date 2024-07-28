
**Notes**:

This application is using the Marvel API, it appears that recently the API has been extremely slow (taking up to 2 minutes per request).

The API calls are using my public key and there is a 3000 request limit per day.

This application is using Vite for its dev environment and bundler, vitest and react-testing-library for unit testing.

  
  

**Commands**:

To run the application, execute the following command:

**npm run dev**

  

To run the test suite, execute the following command:

**npm run test**

  

To run the linter (ESLint), execute the following command:

**npm run lint**

  

The dist directory contains the build output with the .css and .js minimized and bundled.

To regenerate the dist directory, execute the following command:

**npm run build**

  
  

**Architecture**:

Inside src, you can find the following directories:

**\_\_test\_\_**: contains helper classes and functions for testing.

- **MockApp.tsx**: Mocks the wiring of the main App component using a mocked Provider, a mocked Service and a Memory Router.

- **MockHeroesProvider.tsx**: Mocked Provider to enable rendering child components with specific initial data

- **mockMarvelService.ts**: Mocked service to control API calls/results without depending on the actual Marvel API

**assets**: static images/logos

**marvel**

- **components**: React components used by views

- **context**: implementation of global state management using Context API

- **interfaces**: interfaces to provide type safe checking and parsing of api results

- **services**: service for the API calls and an interface with the contract

- **views**: Main components that are connected to the routes

- **Main.tsx**: starting view of the root route and does the initial load of data
