import React from 'react';
import {darkTheme, lightTheme, useAppDispatch, useAppSelector} from "@/redux/store/store";

const ThemeSwitcher = () => {

    // let {theme} = useSelector((state: any) => state.ThemeSliceState);
    let dispatch = useAppDispatch()
    let {theme} = useAppSelector(state => state.ThemeSliceState )

    return (
        <div>
            <p>{theme}</p>
            <button onClick={() => {
                dispatch(lightTheme())
            }}>
                l
            </button>
            <button onClick={() => {
                dispatch(darkTheme())
            }}>
                d
            </button>
        </div>
    );
};

export default ThemeSwitcher;