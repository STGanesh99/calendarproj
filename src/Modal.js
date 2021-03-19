import React,{useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styles from "./ModalStyles"
import { withStyles } from "@material-ui/core";
import { IconButton } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { TextField } from '@material-ui/core';
import { DateTimePicker,MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
function TransitionsModal(props) {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const [selectedDate1, handleDateChange1] = useState(new Date());
  const [selectedDate2, handleDateChange2] = useState(new Date());
  const [newmember,setnewmember]  = useState("");
  const [members,setmembers] = useState([]);
  
  function addnewMember(e){
    if(newmember!=""){
    const arr = [...members,newmember]
    setmembers(arr)
    console.log(members)
    }
    e.preventDefault()
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.setHoverState(false)  
    setOpen(false);
  };

  return (
      props.hoverState&&
    <div>
     <IconButton color ="primary" onClick={handleOpen}><i class="fa fa-plus"></i></IconButton>
      <Modal
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">New Event</h2>
             <div style={{margin:"20px"}}>
             <h4>Details</h4>
             <TextField id="filled-basic" label="Title" variant="filled" style={{width:"400px"}} />
             <br/>
             <MuiPickersUtilsProvider  utils={DateFnsUtils}>
             <DateTimePicker
        variant="inline"
        label="From"
        value={selectedDate1}
        onChange={handleDateChange1}
        style={{marginRight:"20px",width:"200px",marginTop:"20px"}}
      />
       <DateTimePicker
        variant="inline"
        label="To"
        value={selectedDate2}
        onChange={handleDateChange2}
        style={{marginLeft:"20px",width:"200px",marginTop:"20px"}}
      />
             </MuiPickersUtilsProvider>
             <h4 style={{margin:"20px 0"}}>More information</h4>
             <TextField id="outlined-basic" label="Notes" variant="outlined" multiline rows = {6} style = {{width:"400px"}}/>
             <h4 style={{margin:"20px 0"}}>Add Members</h4>
             <form onSubmit = {(e)=>addnewMember(e)}>
             <TextField
          id="outlined-email-input"
          label="Member"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value = {newmember}
          onChange = {(e)=>setnewmember(e.target.value)}
        />
        <Button type="submit" color="primary">Add +</Button>
        {
                    members.map((str)=>{
                         return(<p>{str}</p>)
                    })  
        }
        </form>
      
          </div>      
            <p id="transition-modal-description"></p>
            <Button color="secondary" onClick={handleClose}>Close</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(TransitionsModal);