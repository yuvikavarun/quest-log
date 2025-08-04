import React from 'react';

function QuestList() {
  // In a real app, this data would come from your Firebase 'db'
  const quests = [
    { id: 1, title: 'Daily: Workout' },
    { id: 2, title: 'Side Quest: Finish ECE Report' },
    { id: 3, title: 'Skill: +Drank Water' },
  ];

  return (
    <div className="pixel-box">
      <h2 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>My Quests</h2>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {quests.map(quest => (
          <li key={quest.id} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id={`quest-${quest.id}`} style={{ width: '20px', height: '20px', marginRight: '12px' }}/>
            <label htmlFor={`quest-${quest.id}`}>{quest.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestList;
