import './Form.css';
function Form(){
    return(
       
           
            <form id="forms">
                <div className="container">
 <fieldset>
 <legend>SLAM BOOK:</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"/><br/><br/>
  <label for="nname">NickName:</label>
  <input type="text" id="nname" n/><br/><br/>
  <label for="add">Address:</label>
  <input type="add" id="add"/><br/><br/>
  <label for="birthday">DOB:</label>
  <input type="date" id="birthday" name="birthday"/><br/><br/>
  <label for="MEMO">Memories:</label>
  <textarea id="MEMO"></textarea><br/><br/>
  <label for="ac">Favourite Actor:</label><br></br>
  <input type="checkbox" id="ac"/>
  <label for="ac">Surya</label><br></br>
  <input type="checkbox" id="ac"/>
  <label for="ac">Vijay</label><br></br>
  <input type="checkbox" id="ac"/>
  <label for="ac">Ajith</label><br/><br/>
  <label for="ac">Gender</label><br></br>
  <input type="radio" id="male" name="gender" />
<label htmlFor="male">Male</label><br />

<input type="radio" id="female" name="gender" />
<label htmlFor="female">Female</label><br />
<label for="cars">College:</label>

<select name="cars" id="cars">
  <option value="volvo">CIT</option>
  <option value="saab">PSG</option>
  <option value="mercedes">GCT</option>
  <option value="audi">KEC</option>
</select> <br/><br/>
<center>
<button type="submit">Submit</button>
</center>
 </fieldset>
 </div>
</form>
        
    )
}
export default Form;