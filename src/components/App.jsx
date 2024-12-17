import "./App.css";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

export const App = () => {
  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};
export default App;
