import { UserProvider } from "./contexts/userContext";
import AppRouter from "./router/AppRouter";

const StudyNoteApp = () => {
  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </>
  );
};

export default StudyNoteApp;
