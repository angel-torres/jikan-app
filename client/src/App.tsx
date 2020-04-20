import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Typography, Button, TextField } from '@material-ui/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// COMPONENTS
import Results from './components/Results';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: "600px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
      width: "70%"
    },
    search: {
      width: "100%"
    },
    button: {
      width: "70%"
    }
  }),
);

const App: React.FC<{}> = () => {
  const [ input, setInput ] = useState<string>("");
  const [ category, setCategory ] = useState("anime");
  const [ results, setResults ] = useState<[]>([]);
  const classes = useStyles();

  useEffect(() => {
    const requestURL = `https://api.jikan.moe/v3/top/anime`

    axios.get(requestURL)
    .then((res) => {
      console.log(res.data.top)
      setResults(res.data.top);
    }).catch((err) => {
      console.error(err);
    })
  },[])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(input.length > 0) {
      const requestURL = `https://api.jikan.moe/v3/search/${category}?q=${input}&page=1`

      axios.get(requestURL)
      .then((res) => {
        setResults(res.data.results);
      }).catch((err) => {
        console.error(err);
      })
    }
  }

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleSelect = (e: any) => {
    setCategory(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <div className="title">
          <img className="logo" src={require("./images/Watching_Anime-512.png")} alt="dude watching anime"/>
          <Typography variant="h2" component="h1">Find My Anime</Typography>
        </div>
        <form onSubmit={handleSubmit}>
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={category}
              onChange={handleSelect}
              variant="outlined"
              className={classes.select}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"anime"}>Anime</MenuItem>
              <MenuItem value={"manga"}>Manga</MenuItem>
              <MenuItem value={"person"}>Person</MenuItem>
              <MenuItem value={"character"}>Character</MenuItem>
            </Select>
            <TextField 
              variant="outlined" 
              onChange={handleChanges} 
              value={input} 
              label="Search"
              className={classes.search}
              type="text" />
            <Button className={classes.button} variant="contained" type="submit">Search</Button>
          </FormControl>
        </form>
      </header>
      <div>
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
