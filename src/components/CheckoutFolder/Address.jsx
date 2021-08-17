import React, {useState, useEffect} from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import{commerce} from '../../library/Shop';
import CustomField from './CustomField';
import {Link} from 'react-router-dom';

const Address = ({checkoutToken, next}) => {
    const [ShippingCountries, setShippingCountries] = useState([]);
    const [ShippingCountry, setShippingCountry] = useState('');
    const [ShippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [ShippingSubdivision, setShippingSubdivision] = useState('');
    const [ShippingOptions,setShippingOptions] = useState([]);
    const [ShippingOption,setShippingOption] = useState('');
    const methods = useForm();

    const countries =Object.entries(ShippingCountries).map(([code, name]) => ({ id: code, label: name }))
    const subdivisions =Object.entries(ShippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
    console.log(countries)

    const options = ShippingOptions.map((sO)=>({id:sO.id, label:`${sO.description} -(${sO.price.formatted_with_symbol})`}))

    const fetchShippingCountries = async(checkoutTokenId) =>{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

        

        setShippingCountries(countries);
        setShippingCountries(Object.keys(countries)[0]);
        console.log(countries);
    }
    const fetchSubdivisions = async(countryCode) =>{
        const {subdvisions} = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async(checkoutTokenId, country, region = null) =>{
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country,region })
        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    useEffect(()=>{

        fetchShippingCountries(checkoutToken.id )
    }, []);

    useEffect(()=>{
       if(ShippingCountry) fetchSubdivisions(ShippingCountry);

    },[ShippingCountry]);

    useEffect(()=>{
       if(ShippingSubdivisions) fetchShippingOptions(checkoutToken.id,ShippingCountry,ShippingSubdivision);

    },[ShippingSubdivisions]);


    return (
        <>
           <Typography variant='h6' gutterBottom>Shipping details</Typography>
           <FormProvider {...methods}>
               <form onSubmit={methods.handleSubmit((data)=>next({...data, ShippingCountry,ShippingSubdivision,ShippingOption}))}>
                   <Grid container spacing={3}>
                       <CustomField required name="firstName" label='First name'/>
                       <CustomField required name="lastname" label='Last name'/>
                       <CustomField required name="address" label='Address '/>
                       <CustomField required name="City" label='City name'/>
                       <CustomField required name="ZipCode" label='Zip Code'/>
                       <CustomField required name="email" label='Email Address'/>

                   </Grid>

                   <Grid item xs={12} sm={6}>
                       <InputLabel>Shipping Location</InputLabel>
                       <Select value={ShippingCountry} fullWidth onChange={(e)=>setShippingCountry(e.target.value)}>
                          {countries.map((country)=>(
                             
                             <MenuItem key={country.id} value={country.id}>

                               {country.label}
                           </MenuItem>
                          ))}
                           
                       </Select>

                   </Grid>
                   <Grid item xs={12} sm={6}>
                       <InputLabel>Shipping Sub division</InputLabel>
                       <Select value={ShippingSubdivisions} fullWidth onChange={(e)=>setShippingSubdivision(e.target.value)}>
                          {subdivisions.map((subdivision)=>(
                             
                             <MenuItem key={subdivision.id} value={subdivision.id}>

                               {subdivision.label}
                           </MenuItem>
                          ))}
                          </Select>

                   </Grid>
                   <Grid item xs={12} sm={6}>
                       <InputLabel>Shipping Option</InputLabel>
                       <Select value={ShippingOptions} fullWidth onChange={(e)=>setShippingOption(e.target.value)}>
                       {options.map((option)=>(
                             
                             <MenuItem key={option.id} value={option.id}>

                               {option.label}
                           </MenuItem>
                          ))}
                       </Select>

                   </Grid>
                   <br/>
                   <div style={{display:'flex', justifyContent:'space-between'}}>
                   <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                     <Button type="submit" variant="contained" color="primary">Next</Button>

                   </div>

               </form>

           </FormProvider>
        </>
    )
}

export default Address
