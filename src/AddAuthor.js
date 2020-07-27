import React, {useState} from 'react';
import './AddAuthor.css';


// useState hook is used mostly for managing states in react functional components
// if you want to use class components then you can declare the states in constructor and set it using setState function

function AddAuthor({match, addAuthor}) {
    const [name, setName] = useState('');
    const [imageUrl, setimageUrl] = useState('');
    

    function onFieldChange(e) {
        if(e.target.name === "name"){
            setName(e.target.value);
        }else if(e.target.name === "imageUrl"){
            setimageUrl(e.target.value);
        }
        console.log(e.target);
    }

    function onAddAuthor(e) {
        e.preventDefault();
        addAuthor({name, imageUrl});
    }

    return (
      <div className="container" style = {{margin: '50px 10%'}}>
        <h1>Add Author</h1>
        <form onSubmit = {onAddAuthor}>
            <div className = "addAuthorForm_input">
                <label htmlFor = "name">Name</label>
                <input type="text" name="name" value={name} onChange = {onFieldChange}/>
            </div>
            <div className = "addAuthorForm_input">
                <label htmlFor = "imageUrl">Image Url</label>
                <input type="text" name="imageUrl" value={imageUrl} onChange = {onFieldChange}/>
            </div>
            <button>
                Add Author
            </button>
        </form>
      </div>
    )
  }

  export default AddAuthor;