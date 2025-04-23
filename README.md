
# 💸 Expense Tracker

A React-based web application designed to help users manage and track their expenses efficiently. This project utilizes Firebase for backend services, including authentication and real-time database management.

## 🚀 Features

- 🔐 **User Authentication**: Secure sign-up and login functionality using Firebase Authentication.
- 📊 **Real-time Expense Tracking**: Add, edit, and delete expenses with instant updates.
- 📁 **Categorization**: Organize expenses by categories for better insights.
- 📈 **Visual Analytics**: Graphical representation of expenses to monitor spending habits.
- 🌐 **Responsive Design**: Optimized for various devices, ensuring a seamless user experience.

## 🛠️ Technologies Used

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Firebase (Authentication, Firestore Database)
- **State Management**: React Context API
- **Routing**: React Router
- **Styling**: CSS Modules / Styled Components

## 📂 Project Structure

```
Expense-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   └── Expense/
│   ├── contexts/
│   ├── firebase/
│   ├── App.js
│   └── index.js
├── .gitignore
├── firebase-debug.log
├── package.json
└── README.md
```

## 🧰 Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mit510/Expense-tracker.git
   cd Expense-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Firebase:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore Database.
   - Replace Firebase configuration in `src/firebase/config.js` with your project's credentials.

4. **Run the application:**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author

**Mitkumar Patel**

- [GitHub](https://github.com/mit510)
- [Email](mailto:patel77b@uwindsor.ca)
