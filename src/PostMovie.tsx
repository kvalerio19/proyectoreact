  import React, {Component} from "react";
  import axios from "axios";
  //import { types } from "util";

  class PostMovie extends Component<any, any>{
      constructor(props:any){
          super(props)

          this.state={
              status_code:'',
              status_message:'',
              success:''
          }
      }

      ChangeHandler = (event:any) =>{
          this.setState({[event.target.name]: event. target.value})
      }
      submitHandler = (event:any) => {
          event.preventDefault()
          console.log(this.state)
          axios.post('https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=f6f6ccdecf4c60c8bb20d597133d740', this.state)
          .then(response =>{
              console.log(response)
          })
          .catch(error =>{
              console.log(error)
          })
      }

      render(){

          const {status_code, status_message, success} = this.state
          return(
              <div>

                  <form onSubmit={this.submitHandler}>
                      <div>
                      <label>Status:</label>
                          <input type="text" name='status_code' value={status_code} onChange={this.ChangeHandler}/>
                      </div>
                      <div>
                      <label>Message:</label>
                          <input type="text" name='status_message' value={status_message} onChange={this.ChangeHandler}/>
                      </div>
                      <div>
                      <label>Success:</label>
                          <input type="text" name='success'  value={success} onChange={this.ChangeHandler}/>
                      </div>
                  </form>
                  <button type='submit'>Submit</button>

              </div>
          )
      }
  }

  export default PostMovie


// import React, {useState} from "react";
// import axios from "axios";
// import { STATUS_CODES } from "http";

// export const PostMovie:React.FC = () =>{
//     const RATE_MOVIE = 'https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=f6f6ccdecf4c60c8bb20d597133d740';
//     const [rate, setRate] = useState([]);

//     const article = { title: 'React Hooks POST Request Example' };
//         axios.post('https://reqres.in/api/articles', article)
//             .then(response => setRate(response.data.id));

//     return(
//         <div>
            
//         </div>
//     )

    
// }
