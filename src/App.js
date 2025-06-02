import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Table from "./pages/Table";

function App() {

	return (
    	<>
			<BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/table" element={<Table />} />
                </Routes>
            </BrowserRouter>
		</>
  	);
}

export default App;
