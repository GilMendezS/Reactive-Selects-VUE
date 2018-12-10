new Vue({
    el: '#app', 
    data(){
        return {
            state: '',
            city: '',
            states: [],
            cities: []
        }
    },
    mounted(){
        this.getStates();
        this.getCities();
    },
    methods: {
        getStates(){
            axios.get('/api/states')
            .then(response => {
                this.states = response.data.states;
            })
            .catch(err => {
                console.log(err);
            })
        },
        getCities(){
            axios.get('/api/states/cities')
            .then(response => {
                this.cities = response.data.cities;
            })
            .catch(err => {
                console.log(err);
            })
        },
        onSubmit(){
            const endpoint = '';
            const data = {
                city: this.city,
                state: this.state
            }
            axios.post(endpoint, data)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    computed: {
        invalidForm(){
            return this.state == '' || this.city == ''
        },
        filteredCities(){
            return this.cities.filter( city => city.state_id == this.state)
        }
    },
    watch: {
        state(){
            this.city = ''
        }
    }
});
