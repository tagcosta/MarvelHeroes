# **Marvel Heroes**

**IMPORTANT**: This application is using the Marvel API, it appears that recently the API has been extremely flaky and slow, taking up to 2 minutes per request and sometimes failing.
(https://www.reddit.com/r/MarvelUnlimited/comments/1eb5ey4/has_anyone_else_noticed_extremely_slow_response/) 
I don't know if Marvel is aware of the issue and when they expect a fix to be available.

## **Notes**:

You can see the application live at: https://marvel-heroes-pink.vercel.app/

The API calls are using my public key and there is a 3000 request limit per day. If running locally, you will need to set the **VITE_API_PUBLIC_KEY** environment variable with a valid key.

This application is using **Vite** for its dev environment and bundler, **vitest** and **react-testing-library** for unit testing. As requested, the state management is done using the React Context API.
  

## **Commands**:

To run the application, execute the following command:
```console
npm run dev
```

To run the test suite, execute the following command:
```console
npm run test
```

To run the linter (ESLint), execute the following command:
```console
npm run lint
```

The dist directory contains the build output with the .css and .js minimized and bundled.
To regenerate the dist directory, execute the following command:
```console
npm run build
```

## **Architecture**:

Inside **src**, you can find the following structure:
<pre>
├───assets: static images/logos
├───marvel
│   |   Main.tsx: starting view of the root route and responsible for the initial load of data
│   ├───components: React components used by views
│   │   ├───comicCard
│   │   ├───header
│   │   ├───heroCard
│   │   ├───heroesList
│   │   └───search
│   ├───context: implementation of global state management using Context API
│   ├───interfaces: interfaces to provide type safe checking and parsing of API results
│   ├───services: service for the API calls and an interface with the contract for mocking
│   └───views: Main components that are connected to the routes
│       ├───details
│       ├───favorites
│       └───list
└───__test__: contains helper classes and functions for testing.
    |	MockApp.tsx: mocks the wiring of the main App component using a mocked Provider, a mocked Service and a Memory Router.
    |   MockHeroesProvider.tsx: mocked Provider to enable rendering child components with specific initial data
    |   mockMarvelService.ts: mocked service to control API calls/results without depending on the actual Marvel API
</pre>