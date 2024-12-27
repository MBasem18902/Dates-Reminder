import { Container } from "react-bootstrap";
import { person } from "./data";
import Counts from "./component/Counts";
import Actions from "./component/Actions";
import Lists from "./component/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState(person);
  const onDelete = () => {
    setData ([])
  }
  const onView = () => {
    setData (person)
  }
  return (
    <div className="fonts">
      <Container className="py-5">
        <Counts person={data} />
        <Lists person={data} />
        <Actions deteleData={onDelete} viewData={onView} />
      </Container>
    </div>
  );
}

export default App;
