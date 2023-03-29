import Form from "./components/form/Form";
import { ThemeContext } from "./context/theme";
import { useToggle } from './hooks/useToggle';
import { useState } from 'react';
import { removeDuplicates } from './utils';


function App() {
	const [theme, setTheme] = useState('light');

	const [isTextChanged, setIsTextChanged] = useToggle(false);


	return (
		<>
			<Form />
			
			<ThemeContext.Provider value={{theme, setTheme}}>
				
				<div>
					<button onClick={setIsTextChanged}>
						{isTextChanged ? 'Toggled' : 'Click to Toggle'}
					</button>

					<button onClick={() => setTheme(currentTheme => currentTheme === "light" ?  "dark" : "light")}>
						change theme - {theme}
					</button>
				</div>

				<div>
					{removeDuplicates([1,2,2,3,3,4,2,5,5,5])}
				</div>


			</ThemeContext.Provider>
			
		</>
	);
}

export default App;
