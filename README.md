

# Books I'm reading

See what I'm reading by using Google Sheets as a database.

[See the live Google Sheets ](https://docs.google.com/spreadsheets/d/1uyWKdom9BsoWUP5Hl32SUj-wmo-Eb9tGeSACJtmJhT8/edit?usp=sharing)

## How it works

I started using [goodreads](https://www.goodreads.com/) to track what books I'm reading. [And found out that they don't support the use of public APIs.](https://help.goodreads.com/s/article/Does-Goodreads-support-the-use-of-APIs)

Hearing about stories of websites using Google Sheets / Excel as a database like [Levels.fyi scaling to millions with Google Sheets](https://www.levels.fyi/blog/scaling-to-millions-with-google-sheets.html), made me want to try it.

[Goodreads supports exporting your information as a .csv file](https://help.goodreads.com/s/article/How-do-I-import-or-export-my-books-1553870934590). Then import the CSV into Google Sheets and let the magic begin.


### Setup 

To expose using Sheets as an API you need to enable it [on  Google Cloud](https://developers.google.com/sheets/api/guides/concepts), then create a service account, and export the ´credentials.json´ to a file. [See more on this video.](https://www.youtube.com/watch?v=zCEJurLGFRk) Your credentials.json should look like this:

```json
{
  "type": "service_account",
  "project_id": "<project-id>",
  "private_key_id": "<private-key-id>",
  "private_key": "<private-key>",
  "client_email": "<client-email>",
  "client_id": "<client-id>",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "<client-x509-cert-url>",
  "universe_domain": "googleapis.com"
}
```

This file needs to live on the root of your project.

Now you need to add the email of the service account to your Google Gheets as an Editor.

To interact with the Google Sheets API, we need to install the googleapis package.

After that, we can use the library for accesing the ROWS and COLUMNS of the Sheet and start querying.

## Deployment

- IMPORTANT: If you are using Github Actions, you need to create a secret that contains the content of `credentials.json`. You can't deploy it without this file.
- In this example we are using static site generation with SvelteKit. That mean we need to run "bun run build" everytime we wan't to update the site with the latest books.
- To update the list of books i'm reading, I manually export the CSV and copy the last rows to Google Sheets. 
- You need to search manually for the image of the book.

# Notes for future-self.

- For some reason bun doesnt read the .env file correctly? I need to explicitly pass down the env variable GOOGLE_APPLICATIONS_CREDENTIALS so it can read the secrets.json file.
- Better animations. clear spacing, yadayadaya...

# References

- [Google Sheets… Your Next Database? ](https://youtu.be/K6Vcfm7TA5U)
- [Service Account Setup Guide](https://www.youtube.com/watch?v=zCEJurLGFRk)