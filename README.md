# The Complete NodeJS Developer Course
The Complete NodeJS Developer Course

It contains 3 Application

Notes - APP
Manage notes usin CLI arguments.
Available commands:
Add, Remove, List

In this project the work is being done using Yargs module.
Yargs - Create and use interactive command line tools by parsing arguments.

Run Command: node app.js add --title=myTitle --body=content


Weather Application
Show temperature for a specific location.

Accepts location through CLI arguments.
Then, sends a request to Maps API for the langitude and longitude of the address.
Finally, access Weather API to receive temperature for the place.

Run Command:  node app.js Boston

Web-Server

Express based web-server for integrating with weather API and getting weather stats.
There was used a Heroku server for deployment.

