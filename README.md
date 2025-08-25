# React Profile Card Component

This repository contains a **Profile Card** component built with **React** and **Tailwind CSS**. The card displays user information and social media links in a visually appealing and responsive design.

## Features

- Responsive layout optimized for various screen sizes using Tailwind CSS.
- Displays user photo, name, role, bio, location, skills, and social media icons.
- Uses FontAwesome icons for social media links.
- Easily customizable with props for different user data.

## Technologies Used

- React.js (Functional Components with JSX)
- Tailwind CSS for styling
- FontAwesome Icons for social media branding

## Getting Started

### Prerequisites

- Node.js (>=14.x recommended)
- npm or yarn

### Installation

1. Clone the repository:
```

git clone https://github.com/AdrishikharChowdhury/React-Profile-Card.git

```
2. Navigate to the project directory:
```

cd React-Profile-Card

```
3. Install dependencies:
```

npm install

```
or
```

yarn install

```

### Running the Project

Start the development server:

```

npm start

```

or

```

yarn start

```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Usage

The `Card` component accepts the following props:

| Prop     | Type   | Description                          |
|----------|--------|------------------------------------|
| `user`   | string | Full name of the user               |
| `roles`  | string | User's role or job title            |
| `bio`    | string | A short biography of the user       |
| `location`| string | User's location                    |
| `skills` | string | Comma-separated list of skills      |

Example usage in `App.js`:

```

<Card
  user="Adrishikhar Chowdhury"
  roles="Frontend Developer"
  bio="Hi, I am passionate about creating things and have fun."
  location="Kolkata, IN"
  skills="C, C++, Python, Java, HTML, CSS, JS, React, Tailwind"
/>

```

## Folder Structure

```

/src
/assets
photo.jpeg
background.jpg
/components
Card.js
App.js
index.js

```

## Customization

- Modify Tailwind CSS classes in `Card.jsx` to change styling.
- Update or add FontAwesome icons as needed.

## License

This project is open source and available under the MIT License.
