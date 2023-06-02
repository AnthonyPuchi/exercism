import ResistorDuo from '../components/Form';

export enum ResistorValues {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9,
  }
  
  export type Color = keyof typeof ResistorValues;
  
  export function decodedValue([first, second]: Color[]): number {
    return Number(`${ResistorValues[first]}${ResistorValues[second]}`);
  }



export function App() {
  return (
    <div>
      <h1>Resistor Calculator</h1>
      <ResistorDuo />
    </div>
  );
}
export default App;