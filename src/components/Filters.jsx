import { useRef, useState } from 'react';

const Filters = (props) => {
  const { setWatched, originalData, setLocalData, localData } = props;
  const [excluded, setExcluded] = useState([]);

  const watchedVideosRef = useRef();
  const excludeVidoesRef = useRef();

  const handleFilterApply = (e) => {
    e.preventDefault();

    let watchedVideosVal = Number(watchedVideosRef.current.value);

    let excludedVideos = excludeVidoesRef.current.value
      .split(",")
      .map((item) => parseInt(item.trim(), 10) - 1)
      .filter((item) => !isNaN(item));

    setExcluded(excludedVideos);

    setLocalData(() => {
      return originalData.filter((_, i) => !excludedVideos.includes(i));
    });

    if (watchedVideosVal > 0 && watchedVideosVal <= localData.length) {
      setWatched(watchedVideosVal);
    } else if (watchedVideosVal !== 0) {
      alert(
        `Watched Videos Value can only be from 1 to Total Number of Playlist Videos (${localData.length})`
      );
      watchedVideosRef.current.value = ""
    } else {
      setWatched(0)
    }
  };

  const handleClearExcluded = () => {
    setExcluded([]);
    setLocalData(originalData);
    excludeVidoesRef.current.value = "";
  };

  return (
    <>
      <button
        className="btn btn-outline-primary shadow-none rounded-3 mb-3 d-flex filters-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#filters"
        aria-controls="filters"
      >
        Specify Videos Watched
      </button>
      {excluded.length > 0 && (
        <button
          className="btn btn-outline-primary shadow-none rounded-3 mb-3 d-flex filters-btn"
          onClick={handleClearExcluded}
        >
          Clear Excluded
        </button>
      )}
      <div
        className="offcanvas offcanvas-start"
        id="filters"
        aria-labelledby="filtersLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fs-3 fw-bolder" id="filtersLabel">
            Advanced Filters
          </h5>
          <button
            type="button"
            className="btn-close text-reset filters-close-btn text-bg-warning"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form
            className="d-flex flex-column gap-3 mt-5"
            id="filters-form"
            onSubmit={handleFilterApply}
          >
            <div className="input-group gap-3 align-items-center">
              <label
                htmlFor="excluded"
                data-toggle="tooltip"
                title="Add Video nubmers to be excluded from Playlist, separated by a comma."
              >
                Videos to Exclude:
              </label>
              <input
                type="text"
                className="form-control form-control-lg rounded-2 text-center filter-input"
                id="excluded"
                ref={excludeVidoesRef}
              />
            </div>
            <div className="input-group gap-3 align-items-center">
              <label htmlFor="watched">Videos Watched: </label>
              <input
                type="number"
                className="form-control form-control-lg rounded-2 text-center filter-input"
                id="watched"
                ref={watchedVideosRef}
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning shadow-none fw-bolder text-dark mt-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filters;
