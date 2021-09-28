import {makeAutoObservable, runInAction} from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment


export default class GiraffeStore {
    giraffes = ["Loading giraffes"];

    constructor(props) {
        makeAutoObservable(this,{},{autoBind:true});
        this.fetchGiraffes();
    }

    fetchGiraffes (){
        fetch(baseUrl + "rest/giraffes").then(
            (response)=> response.json().then(
                (json)=> runInAction(()=>this.giraffes=json)
            )
        )
    }
}

