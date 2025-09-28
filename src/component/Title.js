import { useState } from 'react';

function Title({ className = ' ', onSubmit, value = '' }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState('');

  const display = value.trim() ? value : 'No title';

  const toggleTitleInInput = () => {
    setDraft(value.trim() ? value : '');
    setIsEditing(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  const commitEdit = () => {
    const next = draft.trim();
    if (next !== value) onSubmit(next);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setDraft(value || '');
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <input
        autoFocus
        value={draft}
        onChange={(el) => setDraft(el.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={commitEdit}
        placeholder="Enter new title"
      />
    );
  }
  return <h3 onClick={toggleTitleInInput}>{display}</h3>;
}
export default Title;
