import * as React from 'react';
//import logo from './logo.svg';
import './Cart_page.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Button, Stack, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Cart_page = () => {

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>

      <Grid container spacing={2}>

        <Grid item xs={8}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 2,

                width: 850,
                height: 390,
              },
            }}
          >
            <Paper elevation={6} sx={{ p: 2 }} >

              <Grid container>
                <Grid item xs={6}>
                  <h5>My Cart (1)</h5>
                </Grid>

                <Grid item xs={6}>

                  <Stack direction="row" spacing={1}>
                    <br />
                    <h6 > Deliver to:</h6>


                    <Box class="SearchBar" sx={{ minWidth: 120 }}>
                      <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Address</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Hyderabad</MenuItem>
                          <MenuItem value={20}>Warangal</MenuItem>
                          <MenuItem value={30}>Mumbai</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                  </Stack>

                </Grid>

              </Grid>

              <hr class="dropdown-divider" />

              <Grid container>
                <br />
                <Grid item xs={3}>
                  <img class="image" src="https://rukminim2.flixcart.com/image/224/224/ktop5e80/cap/a/n/e/free-new-stylish-baseball-combo-cap-pack-of-2-fy-lane-original-imag6zazeadxhqxn.jpeg?q=90" align="left" alt="" width="150" height="150"></img>
                </Grid>

                <Grid item xs={5}>
                  <br />
                  <h5> Baseball Cap</h5>
                  <p class="font-weight-light"> Size: Free,Pack of 2 </p>

                  <Stack direction="row" spacing={1}>
                    <div class="font-weight-light align =left"> Seller:New Mart </div>
                    <img class="image" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" align="left" alt="" width="60" height="15"></img>

                  </Stack>

                  <br />
                  <Stack direction="row" spacing={1}>
                    <h4> ₹289 </h4>

                    <h6 class="light-text"> <strike> ₹899 </strike> </h6>
                    <h6 class="text-success"> ( 67% Off )</h6>
                    <h6 class="text-success">  1 offer applied  </h6>
                  </Stack>

                  <br />
                  <Stack direction="row" spacing={4}>
                    <h6> SAVE FOR LATER </h6>
                    <h6> REMOVE </h6>

                  </Stack>


                </Grid>

                <Grid item xs={4}>
                  <br />
                  <h7> Delivery in 5 - 7 days |  </h7>
                  <h7 class="text-success"> Free  </h7>
                  <h7> <strike> ₹40 </strike> </h7>
                </Grid>
              </Grid>

              <hr class="dropdown-divider" />

              <button type="button" class="btn btn-PlaceOrder ">PLACE ORDER</button>

            </Paper>

          </Box>

        </Grid>

        <Grid item xs={4}>
          <Box class="box" sx={{ m: 2 }}>
            <Paper elevation={4} sx={{ p: 2 }} >

              <Grid container>
                <Grid item xs={12}>
                  <h5 class="font-weight-light" align="left"> PRICE DETAILS   </h5>
                  <hr class="dropdown-divider" />
                </Grid>

                <br />

                <Grid item xs={6} sx={{ p: 1 }}>
                  <div class="font-weight-normal"> Price (1 item)  </div>
                </Grid>
                <Grid item xs={6} sx={{ p: 1 }}>
                  <div align="right" > ₹899</div>
                </Grid>


                <Grid item xs={6} sx={{ p: 1 }}>
                  <div class="font-weight-normal"> Discount   </div>
                </Grid>
                <Grid item xs={6} sx={{ p: 1 }}>
                  <div class="text-success" align="right" > -₹610  </div>
                </Grid>


                <Grid item xs={6} sx={{ p: 1 }}>
                  <div class="font-weight-normal" > Delivery Charges   </div>
                </Grid>
                <Grid item xs={6} sx={{ p: 1 }}>
                  <div class="text-success" align="right" > FREE </div>
                </Grid>

                <Grid item xs={12}>
                  <hr class="dropdown-divider" />
                </Grid>

                <Grid item xs={6} sx={{ p: 1 }}>
                  <h5 class="font-weight-normal"> Total Amount   </h5>
                </Grid>
                <Grid item xs={6} sx={{ p: 1 }}>
                  <h5 align="right" > ₹289 </h5>
                </Grid>

                <Grid item xs={12}>
                  <hr class="dropdown-divider" />
                </Grid>

                <Grid item xs={12}>
                  <h6 class="text-success" > You will save ₹610 on this order   </h6>
                </Grid>
              </Grid>

            </Paper>

            <Grid item xs={12}>
              <hr class="dropdown-divider" />
            </Grid>

            <Stack
              direction="row"
              spacing={1}
            >
              <br />
              <img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaJXYj8Ma7dmd72vasVWS2bvqj3Fg84id3Q&usqp=CAU" alt="" width="20" height="20"></img>
              <h6> Safe and Secure Payments.Easy returns.100% <br />Authentic products.</h6>

            </Stack>

          </Box>
        </Grid>

      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 2,

                width: 850,
                height: 390,
              },
            }}
          >
            <Paper elevation={6} sx={{ p: 2 }} >

              <hr class="dropdown-divider" />

              <Grid container>
                <br />
                <Grid item xs={3}>
                  <img class="image" src="https://rukminim2.flixcart.com/image/224/224/ktop5e80/cap/a/n/e/free-new-stylish-baseball-combo-cap-pack-of-2-fy-lane-original-imag6zazeadxhqxn.jpeg?q=90" align="left" alt="" width="150" height="150"></img>
                </Grid>

                <Grid item xs={5}>
                  <br />
                  <h5> Baseball Cap</h5>
                  <p class="font-weight-light"> Size: Free,Pack of 2 </p>

                  <Stack direction="row" spacing={1}>
                    <div class="font-weight-light align =left"> Seller:New Mart </div>
                    <img class="image" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" align="left" alt="" width="60" height="15"></img>

                  </Stack>

                  <br />
                  <Stack direction="row" spacing={1}>
                    <h4> ₹289 </h4>

                    <h6 class="light-text"> <strike> ₹899 </strike> </h6>
                    <h6 class="text-success"> ( 67% Off )</h6>
                    <h6 class="text-success">  1 offer applied  </h6>
                  </Stack>

                  <br />
                  <Stack direction="row" spacing={4}>
                    <h6> SAVE FOR LATER </h6>
                    <h6> REMOVE </h6>

                  </Stack>


                </Grid>

                <Grid item xs={4}>
                  <br />
                  <h7> Delivery in 5 - 7 days |  </h7>
                  <h7 class="text-success"> Free  </h7>
                  <h7> <strike> ₹40 </strike> </h7>
                </Grid>
              </Grid>

              <hr class="dropdown-divider" />

              {/* <button type="button" class="btn btn-PlaceOrder ">PLACE ORDER</button> */}

            </Paper>

          </Box>


        </Grid>
      </Grid>

    </>
  );
}

export default Cart_page;
