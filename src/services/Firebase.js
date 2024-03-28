import { initializeApp } from "firebase/app";

export class Firebase {
  constructor() {
    this._app = initializeApp({
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: "task-manager-ef7b7.firebaseapp.com",
      projectId: "task-manager-ef7b7",
      storageBucket: "task-manager-ef7b7.appspot.com",
      messagingSenderId: "524952855785",
      appId: "1:524952855785:web:3e15b8673f93d2ee2b7c78",
    });
  }

  get app() {
    return this._app;
  }
}

export const firebaseService = new Firebase();
