import arrayMove from "array-move";
import { useEffect, useState } from "react";
import SortableList from "react-easy-sort";
import { data } from "../data";
import "./Accounts.css";
import SingleAccount from "./SingleAccount";

function Accounts() {
  const [accounts, setAccounts] = useState(data.accounts);

  function onSortEnd(oldIndex, newIndex) {
    setAccounts((array) => arrayMove(array, oldIndex, newIndex));
  }

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem("ACCOUNTS"));
    if (storedAccounts) setAccounts(storedAccounts);
  }, []);

  useEffect(() => {
    localStorage.setItem("ACCOUNTS", JSON.stringify(accounts));
  }, [accounts]);

  return (
    <section className="accounts-section">
      <SortableList
        className="section-container flex-container"
        onSortEnd={onSortEnd}
        draggedItemClassName="dragged-account"
      >
        {accounts.map((account) => (
          <SingleAccount
            key={account.id}
            account={account.account}
            username={account.username}
            avatar={account.avatar}
            followers={account.followers}
            title={account.title}
            arrow={account.arrow}
            todayText={account.todayText}
          />
        ))}
      </SortableList>
    </section>
  );
}

export default Accounts;
