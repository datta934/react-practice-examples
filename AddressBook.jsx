import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ handleChange, handleSubmit, formInputData }) {
  const addUser = () => {
    alert("hi")
  }

  return (
    <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input onChange={handleChange}
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        placeholder="First Name"
        value={formInputData.userFirstname}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input onChange={handleChange}
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        placeholder="Last Name"
        value={formInputData.userLastname}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input onChange={handleChange}
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        placeholder="Phone Number"
         value={formInputData.userPhone}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
        onClick={handleSubmit}
      />
    </form>
  )
}

function InformationTable({ tableData }) {

  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First Name</th>
          <th style={style.tableCell}>Last Name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.userFirstname}</td>
                <td>{data.userLastname}</td>
                <td>{data.userPhone}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

function Application(props) {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    userFirstname: '',
    userLastname: '',
    userPhone: ''
  });

  const handleChange = (evnt) => {
    const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
    setFormInputData(newInput)
  }

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
    if (checkEmptyInput) {
      const newData = (data) => ([...data, formInputData])
      setTableData(newData);
      const emptyInput = {
        userFirstname: '',
        userLastname: '',
        userPhone: ''
      }
      setFormInputData(emptyInput)
    }
  }


  return (
    <section>
      <PhoneBookForm handleChange={handleChange} handleSubmit={handleSubmit} formInputData={formInputData} />
      <InformationTable tableData={tableData} />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);