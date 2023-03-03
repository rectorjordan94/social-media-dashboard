import React, { useState } from 'react';

const DarkToggle = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <>
            <label class="switch" className={theme}>
                <input type="checkbox" />
                <span class="slider round" className={theme}></span>
            </label>
        </>
    )
}

export default DarkToggle