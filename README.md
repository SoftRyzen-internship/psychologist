This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

## Trainings section component.

You can use this component in Views as frame for building sections on Trainings
Page

### How to use

Component requires markdown (you can find example here)

```bash
src/content/trainings
```

**Props:**

- markdown - markdown in .md format. Example you can find here:

```bash
src/content/trainings
```

- img - image that you wanna to use in section. It's important to transfer image
  properties in wright format. You can put your images here:

```bash
src/utils/imgProperties.js
```

- isHeroSection - props for build Hero Section that can be used on mobile,
  tablet and Desktop versions.
- isTitleCentered - select is title must be centered in section.
- specialTitle - props for cases when you need pass unique title for Hero
  Section not from markdown (like title with &nbsp)

**Here is some specific rules for imgProperties.js:**

1.  If you wanna responsive image - then value of property (width> height -->
    mobile, tablet, desktop) must be an empty string ('')
2.  Path to image starts from public folder
3.  Width and Height attributes must be in numerical format (example: TABLET:
    499 <-- CORRECT;TABLET: '499px' <-- INCORRECT!)

## ContactForm component.

This is a reusable component with 3 validated fields. It's values are saved
onChange in local storage and are set to default on submit.

On form submit it's inputs values are sent via Telegram bot to Telegram group.

On sending result in Form div it renders ThankYou or ErrorNote components on
success / error respectfully.

Uses npm 'react-hook-form' and 'react-hook-form-persist'.

Component can be found here

```bash
src/components/ContactForm
```

### ThankYou component

can be found here

```bash
src/components/ThankYou
```

### TErrorNote component

can be found here

```bash
src/components/ErrorNote
```

### Send values to Telegram function

uses .env keys:

NEXT_PUBLIC_TELEGRAM_BOT_TOKEN NEXT_PUBLIC_TELEGRAM_CHAT_ID

and can be found here

```bash
src/utils/sendFormDataToChat.js
```

### Form inputs validation schema (uses Yup)

can be found here

```bash
src/utils/contactValidationSchema.js
```

### Markdown files, how to use

1. If you wanna to use components for building text sections, yo'll need to use
   files in .md format.
2. All markdown files needs to be stored in

```bash
src/content
```

3. After creating markdown file you'll need to pass the markdown to component
   using
   [**getStaticProps (nextjs)**](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)
   and **getData** function that receive a folder path (see
   src/utils/folderPaths.js) and using such libraries as
   [fs](https://nodejs.org/api/fs.html) and
   [gray-matter](https://github.com/jonschlinkert/gray-matter) to return parsed
   markdown as object with keys and values (located in src/lib directory).

   ```javascript
   export const getStaticProps = async () => {
     const trainings = getData(folderPaths.TRAININGS);
     const {
       conflictology,
       educationWithLove,
       publicSpeaking,
       selfHelp,
       stressResistance,
       strongSides,
       timeManagement,
     } = trainings;
     return {
       props: {
         conflictology,
         educationWithLove,
         publicSpeaking,
         selfHelp,
         stressResistance,
         strongSides,
         timeManagement,
       },
     };
   };
   ```

```

```
