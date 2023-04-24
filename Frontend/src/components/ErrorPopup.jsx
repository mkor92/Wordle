

function ErrorPopup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <p className="bg-slate-50 p-2 rounded font-semibold -mt-10 animate-bounce">Word not in list or not {props.length} letters
        </p>

      </div></div>
  ) : "";
}

export default ErrorPopup