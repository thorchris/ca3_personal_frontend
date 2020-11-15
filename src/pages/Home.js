export default function Home() {
  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="mt-5">This i based on startcode from ca3</h2>
          <h4>How it was used:</h4>
          <p>
            <li>Used the backend to create a new endpoint holding a ToDO list, was meant to be each users todo list however for now its only based on if you are logged in or not.</li>
            <li>Used the frontend to show fetched data from remote servers (trump qoute ex.) and to show the ToDO list of the user. </li>
          </p>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
