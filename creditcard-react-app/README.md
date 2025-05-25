This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

![](/public/cc.png)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Challenge

- Complete methods in credit-card-service.ts
- Create a new Button component in in the `ui` folder using the Chat feature. The challenge is to ensure that the button follows the exact coding pattern as the `input` component in the `ui` folder.
- Create new unit tests using vite in credit-card.test.ts


# Steps
1. npm run dev
2. generate a random 16 digit number
3. generate a random 16 digit credit card number in the format "#### #### #### ####"
OR generate a random 16 digit credit card number that has a whitespace between every 4 digits

4. show explain feature
5. show generate docs
--UI 
6. create a button component using React and Typescript
7. Add Button to form.tsx as just </Button>, and then show Fix Copilot
8. In Chat select #file input.tsx and create create a button component using ReactJS and Typescript to refer to the existing file

-- 
TEST
1. copilot -- generate test
2. in chat
3. in file
//generate test that validates that credit card number returned has 16 digits
//generate test that validates that credit card number returned has 3 spaces
//generate test that validates every credit card number returned is different

