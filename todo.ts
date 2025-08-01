import { Console } from 'console';
import {Router} from 'express';
import { appendFile } from 'fs';
import { todo } from 'node:test';

const router = Router()

type todo = {
    id : number,
    name: string,
    completed: boolean,
    importance: "hobby" | "serious" | "extreme"
}

type todo_list = todo[]


const my_todo_list : todo_list = [
    {
        id : 1,
        name : "eating",
        completed:false,
        importance:"hobby"
    },
    {
        id : 2,
        name : "studying",
        completed:false,
        importance:"serious"
    }
]

//using the router to make some api requests

router.get('/get-todo', (req, res) => {
    res.json(my_todo_list);
})

router.post('/add-todo', (req, res) =>{
    const myObject : todo = req.body
    console.log(myObject)

})

export default router
