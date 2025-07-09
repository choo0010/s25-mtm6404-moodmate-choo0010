# MoodMate 🧠

MoodMate is a mood tracking app where users can:
- Select their daily mood (😀 😐 😢)
- Add a short note about how they feel
- See their mood log
- Filter past entries by mood

## Components:
- App.jsx: Holds main state and logic
- MoodForm.jsx: Controlled input for mood + note
- MoodLog.jsx: Shows list of mood entries
- MoodEntry.jsx: Renders each entry
- MoodFilter.jsx: Dropdown to filter by mood

## Data Flow:
- State is managed in App.jsx using useState and useEffect
- MoodForm sends new data via `onAddEntry`
- Entries are saved to localStorage to persist between sessions
