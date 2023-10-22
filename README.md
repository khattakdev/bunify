# Bunify

Bunify is a simplistic routing framework for Bun.sh, designed to bring an Express.js-like experience to the Bun ecosystem.

## Features

- Simplified HTTP methods (`app.get`, `app.post`, `app.put`, `app.delete`)
- RegEx support (`/ab+cd`, `/ab*cd`, `/a(cd)?e`)
- Easy setup and usage
- Dynamic URL routing (`/users/:id`) (🚧 In progress)

## Installation

Ensure you have [Bun.sh](https://bun.sh) installed on your machine.

```bash
# Clone the repository
git clone https://github.com/khattakdev/bunify.git

# Navigate to the project directory
cd bunify

# Install dependencies and build the project
bun install
```

To try the npm package, use the following command:

```
npm install bunify
```

## Usage

```javascript
// Import the Bunify framework
import App from "bunify";

// Create a new app instance
const app = new App();

// Define a simple GET route
app.get("/", (req, res) => {
  return res.send("Hello World!");
});

// Start listening on port 3001
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
```

## Testing

Bunify uses Bun's built-in testing utilities for writing and running tests.

```bash
# Run tests
bun test
```

## Contributing

Feel free to fork this repository, submit issues, or open pull requests to help improve Bunify.

## License

[MIT](LICENSE)
