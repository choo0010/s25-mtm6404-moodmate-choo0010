const { useState, useEffect } = React;

function App() {
  const [entries, setEntries] = useState([]);
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const saved = localStorage.getItem('moodEntries');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('moodEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) return alert("Please select a mood!");

    const newEntry = {
      id: Date.now(),
      mood,
      note,
      date: new Date().toLocaleDateString()
    };

    setEntries([newEntry, ...entries]);
    setMood('');
    setNote('');
  };

  const filteredEntries = filter === 'All' ? entries : entries.filter(e => e.mood === filter);

  return (
    <div>
      <h1>MoodMate 😊</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Mood:
          <select value={mood} onChange={e => setMood(e.target.value)}>
            <option value="">-- Choose --</option>
            <option value="😊">😊 Happy</option>
            <option value="😐">😐 Neutral</option>
            <option value="😢">😢 Sad</option>
          </select>
        </label>
        <label>
          Add a note (optional):
          <textarea value={note} onChange={e => setNote(e.target.value)}></textarea>
        </label>
        <button type="submit">Add Mood</button>
      </form>

      <div>
        <label>
          Filter by mood:
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="😊">😊 Happy</option>
            <option value="😐">😐 Neutral</option>
            <option value="😢">😢 Sad</option>
          </select>
        </label>
      </div>

      <h2>Mood Log</h2>
      {filteredEntries.map(entry => (
        <div key={entry.id} className="entry">
          <p><strong>{entry.mood}</strong> - {entry.note || 'No note'}</p>
          <small>{entry.date}</small>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.body).render(<App />);
