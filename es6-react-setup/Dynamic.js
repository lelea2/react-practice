import React from 'react';
import ReactDOM from 'react-dom';

class Dynamic extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {id: 1, name: "Khanh Dao"}, {id: 2, name: "Kareen Dao"},
        {id: 3, name: "Khue Dao"}, {id: 4, name: "John Do"},
        {id: 5, name: "Sophie Tran"}, {id: 6, name: "Michele Sung"}
      ]
    };
  }

  render() {
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person} />;
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  );
};

ReactDOM.render(<Dynamic />, document.getElementById('dynamic'));
export default Dynamic;
