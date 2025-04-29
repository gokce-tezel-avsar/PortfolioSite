export default function DarkMode(){
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    button.classList.toggle("fa-toggle-on");
    button.classList.toggle("fa-toggle-off");
    
}

    return(
    <>
        <button onClick={toggleDarkMode} className="fa-solid fa-toggle-on"></button>
             <select>
             <option value="tr">Türkçe</option>
             <option value="en">English</option>
             </select>
    </>
    )
}