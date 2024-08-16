"use client"
import {darkTheme, lightTheme} from "@/redux/store/store";
import {useDispatch, useSelector} from "react-redux";


export default function Home() {

  let {theme} = useSelector((state: any) => state.ThemeSliceState);
  let dispatch = useDispatch();


  return (
    <main>
      <p>{theme}</p>
      <button onClick={() => {dispatch(lightTheme())}}>
        l
      </button>
      <button onClick={() => {dispatch(darkTheme())}}>
        d
      </button>
    </main>
  );
}
