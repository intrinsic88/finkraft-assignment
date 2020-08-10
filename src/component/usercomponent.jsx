import React, {useEffect, useState} from 'react';
import {Container, Grid, makeStyles} from '@material-ui/core'
import MaterialTable from "material-table";
import axios from 'axios'

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:'5%'
    }
}))

const UserComponent = ()=>{

    const classes = useStyles();
    const [rowData, setrowData] = useState([]);

    const getData = ()=>{

        axios({
            method:'GET',
            url:'http://localhost:9000/users'
        })
        .then((response)=>
        {
            const res = response.data.contacts;
            let contactData = [];
            res.forEach(element => {
             let temp = {
             company_name:'', 
             contact_type:'',
             currency_code:'',
             customer_name:'',
             email:'',
             outstanding_payable_amount:'',
             outstanding_receivable_amount:'', 
             status:'', 
             gst_treatment:'', 
            phone:''}

            for(let val in temp){
                temp[val] = element[val]
            }
            contactData.push(temp)
            });
            setrowData(contactData)
        })
    };

    useEffect(() => {
        getData()
        return () => {
            console.log("done")
        };
    }, []);

   const columns = [
        {title:'Name', field:'customer_name'},
        {title:'Company Name', field:'company_name'},
        {title:'Email', field:'email'},
        {title:'Work Phone', field:'phone'},
        {title:'Gst Treatment', field:'gst_treatment'},
        {title:'Payable', field:'outstanding_payable_amount'},
        {title:'Receivable', field:'outstanding_receivable_amount'},
        {title:'status', field:'status'},
   ];

    return(
        <Container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={12}>
                <MaterialTable  
                    title='Customer List'
                    columns={columns}
                    data={rowData}
                    options={{
                        selection: true,
                        sorting:true, 
                        exportButton:true
                      }}
                    />
                </Grid> 
            </Grid>
        </Container>
    )

}

export default UserComponent;