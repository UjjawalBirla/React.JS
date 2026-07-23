function History({ history, onRestore }) {

  if (history.length === 0) {
    return (
      <p className="no-history">
        No Deleted Expenses
      </p>
    );
  }

  return (
    <div className="history">

      <h2>🗑️ Deleted History</h2>

      {history.map((item) => (
        <div
          className="history-item"
          key={item.id}
        >
          <span>{item.title}</span>

          <span>💲{item.amount}</span>

          <span>{item.type}</span>

          <button
            onClick={() => onRestore(item.id)}
          >
            ♻️ Restore
          </button>
        </div>
      ))}

    </div>
  );
}

export default History;