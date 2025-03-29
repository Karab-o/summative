# Weather Application Deployment

![Weather App Screenshot](./assets/screenshot.png)

## Table of Contents
1. [Project Description](#project-description)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Local Development](#local-development)
5. [Server Deployment](#server-deployment)
6. [Load Balancer Configuration](#load-balancer-configuration)
7. [API Documentation](#api-documentation)
8. [Development Challenges](#development-challenges)
9. [Credits](#credits)
10. [License](#license)

## Project Description
A high-availability weather application providing real-time weather data for cities worldwide. The system features:
- Multi-server deployment with Nginx load balancing
- Responsive frontend with interactive elements
- Robust error handling for API failures

## Features
- **Real-time Weather Data**: Current conditions, temperature, humidity
- **City Search**: Autocomplete-enabled location search
- **Cross-Server Reliability**: Automatic failover between Web1/Web2
- **Performance Optimized**: Cached API responses, gzip compression

## Technology Stack
| Component       | Technology |
|----------------|------------|
| Frontend       | HTML5, CSS3, Vanilla JS |
| Backend        | Nginx reverse proxy |
| APIs           | OpenWeatherMap |
| Infrastructure | Ubuntu 22.04, systemd |

## Local Development

### Prerequisites
- Modern web browser
- Python 3.x (for local server)
- OpenWeatherMap API key

### Installation
```bash
git clone https://github.com/your-repo/summative.git
cd summative/weather-app

Running Locally
1.Add API key
2.Start development server
3.Access at:http://44.208.167.254/

Development Challenges
1. API Rate Limiting
Problem: Frequent 429 errors during testing
Solution: Implemented client-side response caching with localStorage

2. Cross-Server Session Consistency
Problem: Load balancer causing session drops
Solution: Configured Nginx with ip_hash for sticky sessions

3. Deployment Permission Issues
Problem: 403 Forbidden errors after deployment
