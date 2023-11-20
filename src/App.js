import Sidebar from './components/Sidebar.js';
import './App.css';

function App() {
  return (
<div className="flex">
      <Sidebar />
      <div className="ml-64 p-4">
        {/* Your page content goes here */}
        <h1 className="text-3xl font-bold">Main Content</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
      </div>
    </div>
  )
}

export default App;
