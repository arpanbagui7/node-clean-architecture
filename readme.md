Create .env and add DATABASE_URL
For e.x -
DATABASE_URL="mysql://root:password@localhost:3306/testdb?schema=public"

#Command to run
1. npx prisma migrate dev -- to adopt schema changes
2. npm start -- to start typescript and create dist folder
3. npm run dev -- to start node server

#Command to execute unit testing
1. npm run test -- to run test
