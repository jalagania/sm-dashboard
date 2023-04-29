import { SortableItem } from "react-easy-sort";
import "./SingleAccount.css";

function SingleAccount(props) {
  function handleAccountBox(event) {
    event.currentTarget.classList.toggle("flip");
  }

  return (
    <SortableItem>
      <button data-testid="btn-account" className="account-box" onClick={handleAccountBox}>
        <div className={`account-box__front ${props.account}-box`}>
          <div className="account-box__user">
            <img
              src={`./images/icon-${props.account}.svg`}
              alt={props.account}
              className="sm-icon"
            />
            <p className="username">{props.username}</p>
          </div>
          <p className="account-box__followers">{props.followers}</p>
          <p className="account-box__title">{props.title}</p>
          <div className="account-box__stats">
            <img
              src={`./images/icon-${props.arrow}.svg`}
              alt={`arrow ${props.arrow}`}
              className={`icon-arrow arrow${props.arrow}`}
            />
            <span className={`today-text ${props.arrow}`}>{props.todayText}</span>
          </div>
        </div>
        <div className={`account-box__back ${props.account}-box`}>
          <img
            src={props.avatar}
            alt="user avatar"
            className={`account-box__avatar ${props.account}`}
          />
          <p className="account-box__fullname">Nathan Ford</p>
          <img
            src={`./images/icon-${props.account}.svg`}
            alt={props.account}
            className="account-box__sm-logo"
          />
        </div>
      </button>
    </SortableItem>
  );
}

export default SingleAccount;
