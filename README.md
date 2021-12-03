## Getting Started

Install packages:

```bash
npm install
```

This application was built to store asset information for FNS, INC.

This application requires database-connection information.

### Environment Variables

You should add `.env` file under the src directory, and fill your database information referring `.env.example` file. Completed filled out `.env` file must be looked like below.

```bash
DB_HOST=localhost:5432
DB_USR=testuser
DB_PW=password
DB_NAME=test
```

### How to run

Create PostgreSQL database with the name `assets`.

If you have different credentials set up for your local PostgresQL database, put that in `.env`.

Implement the command below.

```bash
npm run get-app
```

Run the application located at C:\AssetFNS\assetfns.exe.

※ If your PC is protected under Bitdefender or alternatives, you should be applied new policy which excludes this application.
