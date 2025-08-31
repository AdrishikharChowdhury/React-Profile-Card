# React Profile Card Component

A **React** functional component styled with **Tailwind CSS** that renders a sleek, customizable Profile Card. It displays user information and social media links with dynamic FontAwesome icons, crafted for responsiveness and easy integration in any React app.

---

## Features

- Responsive design optimized for desktops, tablets, and mobile devices using Tailwind CSS utility classes.
- Displays user photo, full name, role/job title, short bio, location, and skills list.
- Interactive social media icons (LinkedIn, GitHub, Instagram, Linktree, personal website) using FontAwesome.
- Smooth hover and tap animations powered by Framer Motion for a polished UI experience.
- Fully customizable via props to support any user profile data.

---

## Technologies Used

- React.js (Functional Components with JSX)
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- FontAwesome Icons for social media branding

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```

git clone https://github.com/AdrishikharChowdhury/React-Profile-Card.git

```

2. Navigate into the project directory:

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

Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the app.

---

## Usage

The `Card` component accepts these props to dynamically render user profile information:

| Prop       | Type   | Description                              |
|------------|--------|----------------------------------------|
| `user`     | string | Full name of the user                   |
| `roles`    | string | User's role or job title                |
| `bio`      | string | Short biography or introduction        |
| `location` | string | User's current location                 |
| `skills`   | string | Comma-separated list of skills          |

### Example usage in `App.jsx`:

```

import Card from './components/Card';

function App() {
return (
<Card
      user="Adrishikhar Chowdhury"
      roles="Frontend Developer"
      bio="Hi, I am passionate about creating things and having fun."
      location="Kolkata, IN"
      skills="C, C++, Python, Java, HTML, CSS, JS, React, Tailwind"
    />
);
}

export default App;

```

---

## Folder Structure

```

/src
/assets
background.jpg
photo.jpeg
/components
Card.jsx
App.js
index.js

```

---

## Customization

- Modify Tailwind CSS classes in `Card.jsx` to adjust styling, layout, or responsiveness.
- Add or replace FontAwesome social icons by updating the icon imports and JSX inside the component.
- Replace images in `/assets` with your own background and profile photos.
- Enhance animations using Framer Motion props or add custom animations as needed.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, feel free to reach out to [Adrishikhar Chowdhury](https://www.linkedin.com/in/adrishikhar-chowdhury/).

---

Thank you for checking out the React Profile Card component! Contributions and suggestions are welcome.
