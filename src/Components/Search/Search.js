import React, {useState, useEffect} from 'react'
import './search.css'
import M from "materialize-css";

const Search = () => {

    useEffect(() => {
        let elems = document.querySelectorAll('.autocomplete');
        M.Autocomplete.init(elems, {
            data: {
                "apple" : null,
                'yes': 'https://placehold.it/250x250'
            }
        })
    }, [])
    
    return (
        <div class="containerSearch">
            <div class="container row">
                <div class="col s12 center white-text">
                    <h5>Rechercher les examens et devoirs</h5>
                    <nav>
                        <div class="nav-wrapper">
                            <form className="row">
                                <div class="input-field col s9">
                                    <input id="search" type="search" autoFocus='true' class="white teal-text autocomplete" required placeholder="Niamey, Maradi, etc..." />
                                    <i class="material-icons">close</i>
                                </div>
                                <div className="col s1">
                                    <button class="btn green darken-4 white-text" type="submit" name="action"> Rechercher <i class="material-icons right">send</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    )
}

export default Search
