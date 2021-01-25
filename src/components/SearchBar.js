import React from 'react'
import './searchbar.css'

class SearchBar extends React.Component{
   state = {term : ''}

   onFormSubmit=(e)=>{
     e.preventDefault()

     this.props.onSubmit(this.state.term)
   }
    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                       <h3 className='text-center'> <label>Image Search</label></h3>
                    <input type='text'
                    onChange={(e)=> this.setState({term: e.target.value})}
                    value={this.state.term}
                
                    />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar