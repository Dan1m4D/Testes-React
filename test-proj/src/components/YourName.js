function YourName({setName}) {
    return (
      <div>
        <p>State your name: </p>
        <input
          type="text"
          placeholder="Example"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
}

export default YourName;