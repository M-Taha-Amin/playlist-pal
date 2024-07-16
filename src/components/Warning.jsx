const Warning = () => {
  return (
    <div className="container-md results-div">
      <p className="fs-5 fw-bold">
        Type playlist url of the form:&nbsp;&nbsp;
        <code className="text-warning">
          https://www.youtube.com/playlist?list=playlistID{' '}
        </code>
        in the search bar.
      </p>
    </div>
  );
};
export default Warning;
