import React, { useContext } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';
import toast from 'react-hot-toast';
import AuthContext from '../../Context/AuthContext';

const AddJobForm = () => {
    const {user} = useContext(AuthContext);

    const handleAddjob = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
         const {min, max, currency , ...newjob} = initialData;
         console.log(newjob); 
        //this keeps the rest of the data in the newjob object
         newjob.salaryRange = {min, max, currency};
         newjob.requirements= newjob.requirements.split(',');
         newjob.responsibilities= newjob.responsibilities.split(',');
         console.log(newjob);
        // Send the new job data to the server
        fetch('https://job-portal-server-ten-beta.vercel.app/postjob',{
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(newjob)


        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Job added successfully');
                e.target.reset();
            }
            else{
                toast.error('Failed to add job');
            }
        })
    
}
    return (
        <>
            <h3 className='text-3xl flex justify-center items-center font-semibold my-5'>Job Information</h3>
            <div className="flex justify-center items-center min-h-screen p-6">
                <form onSubmit={handleAddjob} className="bg-white p-6 rounded-xl w-full max-w-3xl space-y-4">

                    {/* Title */}
                    <TextField fullWidth label="Job Title" name="title" variant="outlined" defaultValue="" />

                    {/* Location */}
                    <TextField fullWidth label="Location" name="location" variant="outlined"  defaultValue=""/>

                    {/* Job Type */}
                    <TextField select fullWidth label="Job Type" name="jobType" variant="outlined" defaultValue="" >
                        <MenuItem value="Remote">Remote</MenuItem>
                        <MenuItem value="Onsite">Onsite</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </TextField>
                      {/* Category */}
                    <TextField select fullWidth label="Category" name="category" variant="outlined" defaultValue="" >
                        <MenuItem value="Engineering">Engineering</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="Financ">Financ</MenuItem>
                        <MenuItem value="Teaching">Teaching</MenuItem>
                    </TextField>

                  
          
                    {/* Application Deadline */}
                    <TextField
                        fullWidth
                        type="date"
                        label="Expected Deadline"
                        name="applicationDeadline"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        defaultValue=""
                    />

                    {/* Salary Range */}
                    <div className="grid grid-cols-3 gap-4">
                        <TextField fullWidth label="Min Salary" name="min" variant="outlined" type="number" defaultValue="" />
                        <TextField fullWidth label="Max Salary" name="max" variant="outlined" type="number" defaultValue="" />
                        <TextField select fullWidth label="Currency" name="currency" variant="outlined" defaultValue="">
                            <MenuItem value="bdt">Select Currency</MenuItem>
                            <MenuItem value="bdt">BDT</MenuItem>
                            <MenuItem value="usd">USD</MenuItem>
                            <MenuItem value="eur">EUR</MenuItem>
                        </TextField>
                    </div>

                    {/* Description */}
                    <TextField
                        fullWidth
                        label="Job Description"
                        name="description"
                        multiline
                        rows={4}
                        variant="outlined"
                        defaultValue=""
                    />

                    {/* Company */}
                    <TextField fullWidth label="Company Name" name="company" variant="outlined" defaultValue="" />

                    {/* Requirements */}
                    <TextField
                        fullWidth
                        label="Requirements (comma separated)"
                        name="requirements"
                        variant="outlined"
                        defaultValue=""
                    />

                    {/* Responsibilities */}
                    <TextField
                        fullWidth
                        label="Responsibilities (comma separated)"
                        name="responsibilities"
                        variant="outlined"
                        defaultValue=""
                    />

                    {/* Status */}
                    <TextField select fullWidth label="Status" name="status" variant="outlined" defaultValue="">
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="closed">Closed</MenuItem>
                    </TextField>

                    {/* HR Email */}
                    <TextField fullWidth label="HR Email" name="hr_email" variant="outlined" type="email" defaultValue={user.email} />

                    {/* HR Name */}
                    <TextField fullWidth label="HR Name" name="hr_name" variant="outlined" defaultValue="" />

                    {/* Company Logo */}
                    <TextField fullWidth label="Company Logo URL" name="company_logo" variant="outlined" defaultValue=""/>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <Button
                        type='submit'
                            variant="contained"
                            size="large"
                            sx={{ backgroundColor: '#16a34a', '&:hover': { backgroundColor: '#15803d' } }}
                        >
                            Submit
                        </Button>

                    </div>
                </form>
            </div>
        </>
    );
};

export default AddJobForm;
