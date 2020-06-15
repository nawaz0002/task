import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { getStateData, searchStateData, filterStateData } from '../action/state'
import { history } from 'react-router-dom'
// client-id-json 604110103647-0j3qob4jer2dsbubcgaggmrcselcka9i.apps.googleusercontent.com
// api key - AIzaSyBJhJExbcRG9AVytLjV3KRara0FfeYadS4
// copied from link - 1e96uezQYqgY5cmkcsHyBAzYEDeaOXVTkVft_EpLdtVA
// sheet best - https://sheet.best/api/sheets/22e279e9-33ae-4692-b525-107e5db7d37b
// sheet link-  https://docs.google.com/spreadsheets/u/1/d/1e96uezQYqgY5cmkcsHyBAzYEDeaOXVTkVft_EpLdtVA/edit#gid=0


const Home = ({getStateData, dataState: { data, filterData }, searchStateData, auth: {isAuthenticated, loading}, history , filterStateData}) => {
    const [search, setSearch] = useState("")

    useEffect(() => {
        getStateData()
        // console.log(isAuthenticated, loading)
        if(!loading && !isAuthenticated){
          history.push('/signin')
        }
        if(filterData && filterData.length == 1){
          data = filterData
          // console.log(filterData, data)
        }
      }, [isAuthenticated, filterData]) 

    const searchState = (query) => {
      filterStateData(query)
      setSearch(query)
    }

    return (
        <div className="homepage-container">
          <div className="search-container">
          <i className="material-icons custom-icons search-icon">search</i>
            <input 
                type="text" 
                value={search}
                className="search-input"
                placeholder="Search State" 
                onChange={e => searchState(e.target.value)}
            />
          </div>
            <table className="striped centered responsive-table">
                <thead>
                  <tr>
                      <th>State/UT</th>
                      <th>Confirmed</th>
                      <th>Active</th>
                      <th>Recovered</th>
                      <th>Deceased</th>
                  </tr>
                </thead>
                <tbody>
                    {filterData && filterData.length ? filterData.map(row => (
                      <tr>
                        <td>{row.State}</td>
                        <td>{row.Confirmed}</td>
                        <td>{row.Active}</td>
                        <td>{row.Recovered}</td>
                        <td>{row.Deaths}</td>
                      </tr>
                      )): (
                        data && data.map(row => (
                          <tr>
                            <td>{row.State}</td>
                            <td>{row.Confirmed}</td>
                            <td>{row.Active}</td>
                            <td>{row.Recovered}</td>
                            <td>{row.Deaths}</td>
                          </tr>
                      )))
                    }
                </tbody>
              </table>
        </div>
    )
}


const mapStateToProps = state => ({
  dataState: state.stateData,
  auth: state.auth
})

export default connect(mapStateToProps, {getStateData, searchStateData, filterStateData})(Home)
