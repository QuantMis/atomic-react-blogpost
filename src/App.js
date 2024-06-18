import logo from './logo.svg';
import './App.css';

import { Heading } from './components/atoms/Heading.jsx';
import { Subheading } from './components/atoms/Subheading.jsx';
import { Title } from './components/atoms/Title.jsx';
import { Subtitle } from './components/atoms/Subtitle.jsx';
import { Caption } from './components/atoms/Caption.jsx';
import { Logo } from './components/atoms/Logo.jsx';
import { Input } from './components/atoms/Input.jsx';
import { Button } from './components/atoms/Button.jsx';

function App() {

  let heading="Heading";
  let subheading="Subheading";
  let title="Title";
  let subtitle="Subtitle";
  let caption="Caption";
  let hintText="email@com";
  let buttonText="Hello"

  return (
    <div className="App">
        <p>========= Atoms =========</p>
        <Heading text={heading}/>
        <Subheading text={subheading}/>
        <Title text={title}/>
        <Subtitle text={subtitle}/>
        <Caption text={caption}/>
        <Input hintText={hintText}/>
        <Button text={buttonText}/>

        <p>========= Molecules =========</p>
    </div>
  );
}

export default App;
