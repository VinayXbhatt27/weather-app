# Weather App

A Node.js web application that provides weather information for any location using geocoding and weather APIs.

## Features

- **Location Search**: Enter any address or location to get weather information
- **Real-time Weather Data**: Get current weather conditions including temperature, humidity, and weather description
- **Responsive Design**: Clean and modern UI that works on desktop and mobile devices
- **Error Handling**: Comprehensive error handling for invalid locations and API failures

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Handlebars (HBS)** - Template engine
- **Mapbox API** - Geocoding service
- **Weatherstack API** - Weather data service

## Project Structure

```
web-server/
├── src/
│   ├── app.js          # Main application file
│   └── utils/
│       ├── geocode.js  # Geocoding utility
│       └── forecast.js # Weather forecast utility
├── templates/
│   ├── views/          # HBS view templates
│   └── partials/       # HBS partial templates
├── public/
│   ├── css/           # Stylesheets
│   ├── js/            # Client-side JavaScript
│   └── images/        # Static images
├── package.json       # Project dependencies
└── README.md         # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd web-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your API keys:
   ```
   MAPBOX_API_KEY=your_mapbox_api_key_here
   WEATHERSTACK_API_KEY=your_weatherstack_api_key_here
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /` - Home page with weather search form
- `GET /about` - About page
- `GET /help` - Help page
- `GET /weather?address=<location>` - Get weather for a specific location
- `GET /products?search=<term>` - Search products (example endpoint)

## Usage

1. Visit the home page
2. Enter an address or location in the search box
3. Click "Search" to get weather information
4. View current weather conditions including temperature, humidity, and weather description

## API Configuration

This app uses two external APIs:

### Mapbox API (Geocoding)
- Converts addresses to latitude/longitude coordinates
- Sign up at [Mapbox](https://www.mapbox.com/) to get an API key

### Weatherstack API (Weather Data)
- Provides current weather information
- Sign up at [Weatherstack](https://weatherstack.com/) to get an API key

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Vinay Bhatt

## Screenshots

[Add screenshots of your app here]

## Future Enhancements

- [ ] Add 5-day weather forecast
- [ ] Implement user authentication
- [ ] Add favorite locations feature
- [ ] Include weather alerts
- [ ] Add dark/light theme toggle 