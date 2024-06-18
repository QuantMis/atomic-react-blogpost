import logo from './logo.svg';
import './App.css';

import { Text, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
        <Card>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
        </Card> 
    </div>
  );
}

export default App;
