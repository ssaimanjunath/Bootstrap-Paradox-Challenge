import React, { Component } from 'react';

import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../utils/getWeb3";

import Background from "../back.jpg";

export class ViewUser extends Component { 
    state={
          tablerows:[{
               prod_id: '',
               prod_status: '',
               authority: '',
               timestamp: ''
               }],
        
               buffer: null, web3: null, accounts: null, contract: null,
               prod_id: '',
               prod_status: '',
               authority: '',
               timestamp: '',
               rep_id:''
    };      
    componentDidMount = async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3(); 

          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();

          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = SimpleStorageContract.networks[networkId];
          const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
          );          
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, accounts, contract: instance }, this.runExample);              
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };
    getVal= async () =>{
            const { accounts, contract } = this.state;  
            
                    var response1 = await contract.methods.getProd(this.state.rep_id).call();            
                    this.setState({ prod_id : response1[0],
                                    prod_status : response1[1],
                                    authority : response1[2],
                                    timestamp : response1[3]});  
        
                    this.setState({tablerows:[{
                        prod_id: this.state.prod_id,
                        prod_status: this.state.prod_status,
                        authority: this.state.authority,
                        timestamp: this.state.timestamp
                               }]});        
          };    
    addRows(){                       
            return this.state.tablerows.map(function(row,i){
                return   (<tr key={i}>
                         <td>{row.prod_id}</td>
                         <td>{row.prod_status}</td> 
                         <td>{row.authority}</td>
                         <td>{row.timestamp}</td>
                         </tr>);
            });               
      };
    render(){
        return (            
            <div className="main-wrapper" >
                <h4 className="title-styled" style={{marginTop: "100px", marginLeft: "330px", marginBottom:"-40px"}}>View supply status</h4>
                <div className="page-wrapper page-sidebar" >
                <div className="container">
                    <div className="row">
                        <main itemProp="mainContentOfPage" itemscope itemtype="http://schema.org/WebPageElement" className="content">

                            <article className="fly-article-details" itemscope itemtype="http://schema.org/DonateAction" itemref="projectTitle1">                    
                            
                            <div class="row filter-row">
                    <div class="col-sm-6 col-md-3">
                        <div class="form-group form-focus">
                            <label class="focus-label">Block ID</label>
                            <input type="text" class="form-control floating" onChange={(evt) => { this.state.rep_id =  evt.target.value; }} required></input>
                        </div>
                    </div>                    
                    <div class="col-sm-6 col-md-3">
                        <button type="button" class="dropbtn" onClick={this.getVal.bind()}> Get Report </button>
                    </div>
                </div>
              <table className="table table-striped custom-table mb-0 datatable" style={{position: 'absolute',width: "75%",textAlign: 'center'}}>
                                    <thead>
                                        <tr>
                                            <th>Product ID</th>				
                                            <th>Product Status</th>
                                            <th>Signing Authority</th>
                                            <th>Timestamp</th>                                        
                                        </tr>
                                    </thead>
                                    <tbody>      
                                        {this.addRows()}
                                    </tbody>
                                </table>                                    
                            </article>
                        </main>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}