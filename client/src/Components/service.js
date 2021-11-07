import React, { Component } from 'react';
import Sort from './Sorting/Sort';
import SortResult from './Sorting/SortResult';
import GenratePassword from './Generating/GenratePassword';
import GenerateResult from './Generating/GenerateResult';


 export default class Services extends Component{

    constructor(){

        super();
        this.state= {toggleSection:'generate' ,  inputValue:'', SortedArray:[] ,NewPassword:'' }    

    }
     
    // handler functions

    //1- Array input onChange handler//

     _handelInputChange=(e)=>{

       // console.log(e.nativeEvent.data);
          
        let inputChar = e.nativeEvent.data;
        if ( ( inputChar && inputChar.match(/[\d,]/g) ) || !inputChar ){

            this.setState({inputValue:e.target.value})
        }
      
} 
     //2- sort Array button//

        _handelSortClick=()=>{
        //console.log(this.state.inputValue.split(','));

        //Check if the first item in the Array is (,)  then delete it and give me the new Array in the State  
        let SortArray = this.state.inputValue[0]===',' ? this.state.inputValue.slice(1):this.state.inputValue;
        //console.log(SortArray.split(','));

        // divide the new Array to items and but (,) between ech item and sort them from smaller to bigger  
        SortArray = SortArray.split(',').map(item=>Number(item)).sort((a,b)=>a-b)

        // change the State to the new sorted Array
        this.setState({ SortedArray:SortArray, inputValue:''})
        
      }

  //3- generate new Password //

  _handelGenerateClick=()=>{


    let Numbers = Array(3).fill('0123456789').map(x=>x[Math.floor(Math.random()* x.length)]).join('')
    let LowerAlpha = Array(2).fill('abcdefghijklmnopqrstuvwxyz').map(x=>x[Math.floor(Math.random()* x.length)]).join('')
    let UpperAlpha= Array(2).fill('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map(x=>x[Math.floor(Math.random()* x.length)]).join('')
    let Symbols = Array(1).fill('!@#$%^&').map(x=>x[Math.floor(Math.random()* x.length)]).join('')

    let newPassword = UpperAlpha+Numbers+LowerAlpha+Symbols;

    this.setState({NewPassword:newPassword})

    }

    // End of the handler functions//

    render(){

        return(
            //Main section//
            <div className="row mt-3">




                {/* Left section */}


                 <div className="col-6 bg-light p-3 mx-3 text-start">

                    <h1 className="display-3 mb-4">Select A Service :  </h1>


                    <div> 
                            <input type="radio" className="" name="service" id="generate" value="generate"
                            checked={this.state.toggleSection === 'generate'}
                            onChange={()=>{this.setState({toggleSection : 'generate'})}}/>
                            
                            <label htmlFor="generate" className="ml-2">Generate Password</label>
                            
                        
                        </div>

                        <div> 
                            <input type="radio" className="" name="service" id="sort" value="sort"
                           checked={this.state.toggleSection === 'sort'}
                            onChange={()=>{this.setState({toggleSection : 'sort'})}}/> 
                        
                            <label htmlFor="sort" className="ml-2">Sort A Numberic Array</label>
                        
                        </div> 
                        
                        { /*if the toggleSection is true show the GenratePassword section else show the sort Numeric section */}

                        {this.state.toggleSection==='generate'? 
                        (
                            <GenratePassword onClick={this._handelGenerateClick}/> 
                        )
                        :(
                                <Sort 
                                onChange={this._handelInputChange}
                                 inputValue={this.state.inputValue} 
                                 onClick={this._handelSortClick}/>
                        )}


                </div>






                {/* Right section */}
              
                     <div className="col-4 bg-light p-3">

                        {this.state.toggleSection==='generate'? 
                        <GenerateResult NewPassword={this.state.NewPassword} / >
                        :
                        <SortResult SortedArray={this.state.SortedArray}/>
                        }

                  </div>
                
 




            </div>

       )
    }
}



