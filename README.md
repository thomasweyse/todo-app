# Simple TODO App

This app is build using Next.js.

1. install Node.js on your machine: https://nodejs.org/en/  
2. create a Next.js application with `npx  create-neact-app todo_app` see https://nextjs.org/ 
3. install Material UI dependencies  
   Material UI  
   `npm install @material-ui/core`  
   `npm install @mui/icons-material`   
   `npm install @emotion/react`  
   `npm install @emotion/styled` 
4. for UUID generation: `npm install uuid`
5. for Cloudant: `npm install @ibm-cloud/cloudant`

##Docker build
Dockerfile taken from: https://nextjs.org/docs/deployment  

Build image:  
`docker build . -t todo-app`

Run image
`docker run -p 3000:3000 --name todo-app todo-app`






# Next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
