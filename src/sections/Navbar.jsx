const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand bg-dark  border-1 shadow-lg border-warning border-bottom"
      data-bs-theme="dark">
      <div className="container justify-content-center">
        <a href="/" className="navbar-brand fs-4 logo fw-bolder m-0">
          <span className="text-warning">Playlist</span>Pal
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
