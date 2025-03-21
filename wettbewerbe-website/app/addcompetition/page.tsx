"use client";


export default function addCompetition() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  };

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      justifyContent: 'center',
      backgroundColor: '#f9f9f9',
      color: 'black'
    }}>
      <h1 style={{ marginBottom: '5px', marginTop: '0px', fontWeight: 'bold', fontSize: '36px' }}>Wettbewerb erstellen</h1>
      <form 
        onSubmit={handleSubmit} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div>
          <label>Wettbewerbsname:</label>
          <input type="text" name="name" required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div>
          <label>Beschreibung:</label>
          <textarea name="description" required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div>
          <label>Letztes Anmeldedatum:</label>
          <input type="date" name="lastRegistrationDate" required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div>
          <label>Minimale Jahrgangsstufe:</label>
          <input type="number" name="lowestGrade" required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div>
          <label>Teilnehmende Abteilungen:</label>
          <select multiple name="prefBranch" style={{ width: '100%', padding: '8px' }}>
            <option value="Informatik">Informatik</option>
            <option value="Elektrotechnik">Elektrotechnik</option>
            <option value="Maschinenbau">Maschinenbau</option>
            <option value="Bauingenieurwesen">Bauingenieurwesen</option>
            <option value="Wirtschaft">Wirtschaft</option>
          </select>
        </div>
        <div>
          <label>Link zum Wettbewerb:</label>
          <input type="url" name="link" required style={{ width: '100%', padding: '8px' }} />
        </div>
        <button 
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
        >
          Wettbewerb erstellen
        </button>
      </form>
    </div>
  );
}
