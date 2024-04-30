export default function Kontaktformular(props) {
  return (
    <div>
      <div>
        <h2>Fik du ikke svar på dit spørgsmål?</h2>
        <p>Du kan sende mig en mail med dit spørgsmål, så vil jeg svare på det så godt som jeg kan. Du skal blot skrive dit spørgsmål i feltet nedenfor og tryk på "send", så svarer jeg hurtigst muligt</p>
        <form>
          <label htmlFor="userInput">Indtast din besked:</label>
          <br />
          <input type="text" id="userInput" />
          <br />
        </form>
      </div>
    </div>
  );
}
