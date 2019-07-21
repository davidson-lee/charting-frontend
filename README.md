This demo is hosted on AWS [here](http://tdamdemo-env.6aki9pmnmk.us-west-2.elasticbeanstalk.com/)

Uses Django/PostgreSQL on the backend which serves both the GraphQL API and the React/Redux/Chart.JS frontend.

The app POSTs a query for company data and trade data from the DB via the GraphQL API, stores it in Redux, then displays filtered data based on the selected company.
