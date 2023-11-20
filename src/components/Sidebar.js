const Sidebar = () => {
    return (
      <aside className="bg-gray-800 text-white h-screen w-64 fixed">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Sidebar</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">About</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </aside>
    );
  };

  export default Sidebar;
