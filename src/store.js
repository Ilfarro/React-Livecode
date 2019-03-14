import createStore from 'unistore';
import axios from 'axios';

const initialState = {
    username: "",
    password: "",
    email: "",
    avatar: "",
    is_login: false,
    listMovies: []
};

const urlMovies = 'https://api-todofancy.herokuapp.com/api/movies'

export const store = createStore(initialState);

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },

    postLogout: state => {
        return { is_login: false };
    },

    postLogin: async state => {
        const data = { username: state.username, password: state.password };
        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(response => {
                if (response.data.hasOwnProperty('status')) {
                    store.setState({
                        'is_login': true,
                        'username': response.data.user_data.username,
                        'email': response.data.user_data.email,
                        'avatar': response.data.user_data.avatar
                    })
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    },

    romanceMovie: state => {
        axios
        .get(urlMovies)
        .then(function(response) {
            var films = response.data.movies;
            let result = films.filter(film => film.Category == 'romance');

            store.setState({ listMovies: result })
            // store.setState({ listNews: response.data.articles });
            // console.log(response.data);
        })
        .catch(function(error) {
           console.log(error); 
        });
    },

    actionMovie: state => {
        axios
        .get(urlMovies)
        .then(function(response) {
            var films = response.data.movies;
            let result = films.filter(film => film.Category == 'action');

            store.setState({ listMovies: result })
        })
        .catch(function(error) {
           console.log(error); 
        });
    },

    fictionMovie: state => {
        axios
        .get(urlMovies)
        .then(function(response) {
            var films = response.data.movies;
            let result = films.filter(film => film.Category == 'fiction');

            store.setState({ listMovies: result })
        })
        .catch(function(error) {
           console.log(error); 
        });
    },

    comedyMovie: state => {
        axios
        .get(urlMovies)
        .then(function(response) {
            var films = response.data.movies;
            let result = films.filter(film => film.Category == 'comedy');

            store.setState({ listMovies: result })
        })
        .catch(function(error) {
           console.log(error); 
        });
    }
})