import { useDispatch } from "react-redux";
import { updateTheme } from "../../redux/slices/themeSlice";
import { useSelector } from "react-redux";

const Toggler = () => {
  const dispatch = useDispatch();
  const currTheme = useSelector((store) => store.theme.currTheme);
  
  const handleThemeChange = () => {
    if (currTheme != "dark") {
      dispatch(updateTheme("dark"));
    } else {
      dispatch(updateTheme("light"));
    }
  };

  return (
    <button
      onClick={handleThemeChange}
      className={`cursor-pointer ${
        currTheme == 'dark' ? "bg-blue-600" : "bg-gray-300"
      } relative inline-flex  h-5 w-10 items-center rounded-full transition`}
    >
      <span
        className={`${
          currTheme == 'dark' ? "translate-x-5" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </button>
  );
};

export default Toggler;
